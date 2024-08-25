import { useParams } from "react-router-dom";
import { useGetCryptoTeamDetailsQuery } from "../../../services/coinsApi";
import { Alert, Avatar, Card, Col, Grid, Modal, Row, Spin, Typography } from "antd";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




export default function TeamInformation() {
    const { id } = useParams();
    const { data, isFetching, isError } = useGetCryptoTeamDetailsQuery(id)
    console.log(data?.data);
    const teamInofrmation = data?.data
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const { Title, Text, Paragraph } = Typography;
    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();
    const showModal = (member) => {
        setSelectedMember(member);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedMember(null);
    };
    if (isFetching) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spin size="large" />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Alert message="Error" description={isError.message} type="error" showIcon />
            </div>
        );
    }


    return (
        <>
            <Title level={2}>{teamInofrmation.name} Team Group</Title>

            <Swiper
                slidesPerView={4}
                navigation={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {teamInofrmation?.map((member) => (
                    <>


                        <SwiperSlide>
                            <Card
                                key={member.id}
                                title={member.name}
                                hoverable
                                onClick={() => showModal(member)}
                                cover={<img className="w-96" alt={member.name} src={member.pic} />}
                            >
                                <Card.Meta description={member.role} />
                            </Card>
                        </SwiperSlide>
                    </>

                ))}

            </Swiper>


            <Modal
                title={selectedMember?.name}
                open={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <Row className="  ">
                    <Col className="flex  p-4 justify-center   w-full" >
                        <Avatar
                        
                            size={screens.md ? 140 : 120}
                            src={selectedMember?.pic}
                            alt={`${selectedMember?.name} Logo`}
                            style={{
                                border: "3px solid #1890ff",
                                padding: "5px",
                                backgroundColor: "#fff",
                                marginBottom: screens.xs ? "20px" : "0",
                                
                            }}
                        />

                    </Col>


                </Row>
                <Row>
                    <Col className="px-5  ">
                        <Title level={3}>Name : {selectedMember?.name} </Title>
                        <Text>Title : {selectedMember?.title}</Text>
                        <Paragraph>
                            Description : {selectedMember?.desc}
                        </Paragraph>

                    </Col>
                </Row>

            </Modal>

        </>
    )
}
