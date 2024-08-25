/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useGetRateQuery } from "../../../services/rating";
import { Card, Col, Row, Spin, Alert, Pagination, Tag, Divider } from "antd";
import { Link } from "react-router-dom";
 

const Rating = ({ simplified }) => {
    const count = simplified ? 10 : 1000;
    const { data: rateList, isFetching, error } = useGetRateQuery(count);
    const [rates, setRates] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(100);

    useEffect(() => {
        if (rateList && rateList.data && rateList.data.items) {
            setRates(rateList.data.items);
        }
    }, [rateList]);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentRates = rates.slice(startIndex, endIndex);

    if (isFetching) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spin size="large" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Alert message="Error" description={error.message} type="error" showIcon />
            </div>
        );
    }

    return (
        <>
            {currentRates.length === 0 ? (
                <div className="flex justify-center items-center h-screen">
                    <Alert
                        message="No Results"
                        description="No ratings available."
                        type="error"
                        showIcon
                    />
                </div>
            ) : (
                <>
                    <Row gutter={[32, 32]}>
                        {currentRates.map((item) => (
                            <Col xs={24} sm={12} lg={12} key={item.tid} className="p-0">
                                <Link to={`/rateDetails/${item?.tid}`} >
                                    <Card
                                        hoverable
                                        className="rating-card"
                                      
                                    >
                                        <Row className="rating-header flex justify-between">
                                            <Col>
                                                <h4 className="rating-title">{item.name} ({item.symbol})</h4>
                                            </Col>
                                            <Col>
                                                <Tag color="green" className="rating-level">{item.rating_level}</Tag>
                                            </Col>
                                        </Row>
                                        <Divider className="rating-divider" />
                                        <Row gutter={[16, 16]} className="rating-body">
                                            <Col >
                                                <p><strong>Score:</strong> {item.rating_score}</p>
                                            </Col>
                                            <Col >
                                                <p><strong>Ecosystem:</strong> {item.ecosystem_development}</p>
                                            </Col>
                                        </Row>
                                        <Divider className="rating-divider" />
                                        <div className="rating-tags">
                                            {item?.tags?.length > 0 ? (
                                                item.tags.map((tag) => (
                                                    <Tag color="blue" key={tag} className="rating-tag">
                                                        {tag}
                                                    </Tag>
                                                ))
                                            ) : (
                                                <>
                                                    <Tag color="blue" className="rating-tag">Crypto</Tag>
                                                    <Tag color="blue" className="rating-tag">Coins Market</Tag>
                                                </>
                                            )}
                                        </div>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                    {!simplified ? (
                        <div className="pagination">
                            <Pagination
                                className="flex justify-center p-5"
                                current={currentPage}
                                pageSize={pageSize}
                                total={rates.length}
                                onChange={(page, pageSize) => {
                                    setCurrentPage(page);
                                    setPageSize(pageSize);
                                }}
                            />
                        </div>
                    ) : ""}
                </>
            )}
        </>
    );
};

export default Rating;
