import { Card, Row, Col, Tag, Typography, List, Spin, Alert, Divider, Empty } from 'antd';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import { useGetDetailsRatingQuery } from '../../../services/rating';

const { Title, Text } = Typography;

export default function RatingDetails() {
    const { id } = useParams();
    const { data, isFetching, isError } = useGetDetailsRatingQuery(id);

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

    const ethereumData = data?.data;

    if (!ethereumData || ethereumData.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Empty description="No data available" />
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6">
            {/* Header Section */}
            <Card>
                <Title level={2} className="mb-1">{ethereumData[0]?.name} ({ethereumData[0]?.symbol})</Title>
                <Text type="secondary" className="mb-4 d-block">
                    Rating: {ethereumData[0]?.rating_level} (Score: {ethereumData[0]?.rating_score})
                </Text>
                <a href={ethereumData[0]?.rating_page} target="_blank" rel="noopener noreferrer">View Full Rating Report</a>
            </Card>

            {/* Divider */}
            <Divider />

            {/* Rating Details */}
            <Row gutter={[24, 24]} style={{ marginTop: '20px' }}>
                <Col xs={24} sm={12} md={8}>
                    <Card title="Underlying Technology Security" hoverable>
                        <Text>{ethereumData[0]?.underlying_technology_security || 'No data available'}</Text>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Card title="Token Performance" hoverable>
                        <Text>{ethereumData[0]?.token_performance || 'No data available'}</Text>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Card title="Ecosystem Development" hoverable>
                        <Text>{ethereumData[0]?.ecosystem_development || 'No data available'}</Text>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Card title="Team, Partners & Investors" hoverable>
                        <Text>{ethereumData[0]?.team_partners_investors || 'No data available'}</Text>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Card title="Token Economics" hoverable>
                        <Text>{ethereumData[0]?.token_economics || 'No data available'}</Text>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Card title="Roadmap Progress" hoverable>
                        <Text>{ethereumData[0]?.roadmap_progress || 'No data available'}</Text>
                    </Card>
                </Col>
            </Row>

            {/* Divider */}
            <Divider />

            {/* Related News */}
            <Card title="Related News" style={{ marginTop: '20px' }}>
                {ethereumData[0]?.related_news && ethereumData[0]?.related_news.length > 0 ? (
                    <List
                        grid={{ gutter: 16, column: 3 }} // Display news items in a 3-column grid
                        dataSource={ethereumData[0]?.related_news}
                        renderItem={item => (
                            <List.Item key={item.url}>
                                <Link to={item.url}>
                                    <Card
                                        hoverable
                                        cover={<img alt="news" src={item.image_url} style={{ height: '200px', objectFit: 'cover' }} />}
                                    >
                                        <Title level={4}>{item.title}</Title>
                                        <Text type="secondary">
                                            {moment(item.timestamp).format('MMMM Do YYYY, h:mm:ss a')}
                                        </Text>
                                    </Card>
                                </Link>
                            </List.Item>
                        )}
                    />
                ) : (
                    <Empty description="No related news available" />
                )}
            </Card>

            {/* Divider */}
            <Divider />

            {/* Tags Section */}
            <Card title="Tags" style={{ marginTop: '20px' }}>
                {ethereumData[0]?.tags && ethereumData[0]?.tags.length > 0 ? (
                    <div className="flex flex-wrap">
                        {ethereumData[0]?.tags.map(tag => (
                            <Tag key={tag} color="blue" className="mb-2">{tag}</Tag>
                        ))}
                    </div>
                ) : (
                    <Empty description="No tags available" />
                )}
            </Card>
        </div>
    );
}
