import { Card, Typography, Image, Spin, Row, Col, Button } from 'antd';
import { useGetResearchQuery } from "../../../services/globalStatus";

const { Title, Paragraph } = Typography;

export default function Article() {
    const { data, isFetching, error } = useGetResearchQuery();

    if (isFetching) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spin size="large" />
            </div>
        );
    }

    if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;

    const articles = data?.data?.items;

    return (
        <div style={{ padding: '40px', backgroundColor: '#f0f2f5' }}>
            <Col className='p-3 text-center'>
                <Title level={1}> Newest News</Title>
            </Col>
            <Row gutter={[24, 24]}>

                {articles?.map((item) => (
                    <Col xs={24} sm={12} lg={8} key={item.title}>
                        <Card
                            hoverable
                            
                            cover={
                                <div style={{ height: '180px', overflow: 'hidden' }}>
                                    <Image
                                        width="100%"
                                        height="100%"
                                        src={item?.image_url}
                                        alt={item?.title}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            }


                        >
                            <Title level={4} style={{ marginBottom: '12px' }}>
                                {item?.title}
                            </Title>
                            <Paragraph
                                type="secondary"
                                ellipsis={{ rows: 2 }}
                                
                            >
                                {item?.introduction}
                            </Paragraph>

                            <Button type="link" href={item.url} target="_blank" style={{ padding: '0' }}>
                                Read More
                            </Button>

                            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
                                <Image
                                    width={40}
                                    src={item?.author?.logo}
                                    alt={item?.author?.name}
              
                                />
                                <div className='ms-5'>
                                    <Title level={5}  >
                                        {item?.author?.name}
                                    </Title>
                                    <Paragraph type="secondary" style={{ margin: 0, fontSize: '12px' }}>
                                        {item?.author?.intro}
                                    </Paragraph>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
