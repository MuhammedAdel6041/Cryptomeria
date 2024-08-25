/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useGetCryptoNewsQuery } from "../../../services/cryptoNewsApi";
import { Card, Col, Row, Spin, Alert, Input, Pagination, Empty, Tag, Typography, Select, Avatar, Breadcrumb, Divider } from "antd";
import moment from "moment";
import { useGetCoinsQuery } from "../../../services/coinsApi";
import { BuildOutlined, HomeOutlined } from "@ant-design/icons";

function News({ simplified }) {
    const [selectedCoin, setSelectedCoin] = useState(null); // State to store selected coin or "All"
    const [searchTerm, setSearchTerm] = useState('');
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(simplified ? 20 : 30);
    const { Title, Text } = Typography;
    const { data: newsList, isFetching, error } = useGetCryptoNewsQuery({ category: 'Cryptocurrencies' });
    const { data: cryptoList } = useGetCoinsQuery(1000); // Fetch the list of coins
    const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

    // Handle setting news data
    useEffect(() => {
        if (newsList && newsList.data && newsList.data.items) {
            setNews(newsList.data.items);
        }
    }, [newsList]);

    // Handle resetting the current page when search term or selected coin changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCoin]);

    const filteredNews = news.filter((newsItem) => {
        const matchesSearchTerm = newsItem.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSelectedCoin = selectedCoin && selectedCoin !== 'All'
            ? newsItem.tags.some(tag => tag.name.toLowerCase() === selectedCoin.toLowerCase())
            : true; // Show all if "All" is selected
        return matchesSearchTerm && matchesSelectedCoin;
    });

    const paginatedNews = filteredNews.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleCoinChange = (value) => {
        setSelectedCoin(value);
    };

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

    const { Search } = Input;

    return (
        <>
            {!simplified && (
                <>
                    <Title className="text-center p-4 m-4" level={1}>   All News For Cryptocurrencies </Title>
                    <Col>
                        <Breadcrumb 
                        className="m-4 p-4 "
                            items={[
                                {
                                    href: '',
                                    title: (
                                        <>
                                            <HomeOutlined />
                                            <span> Home</span>
                                        </>
                                    ),

                                },
                                {
                                    href: '/news',
                                    title: (
                                        <>
                                            <BuildOutlined />
                                            <span>  News</span>
                                        </>
                                    ),
                                },

                            ]}
                        />
                    </Col>
                    <Row gutter={[16, 16]} className="mb-4 flex justify-between">
                       
                        <Col xs={24} sm={12} lg={8}>
                            <Select
                                showSearch
                                placeholder="Select a Cryptocurrency"
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                onChange={handleCoinChange}
                                style={{ width: '100%' }}
                                options={[
                                    { value: 'All', label: 'All Cryptocurrencies' }, // "All" option
                                    ...(cryptoList?.data?.items.map((coin) => ({
                                        value: coin.name,
                                        label: coin.name,
                                    })) || [])
                                ]}
                            />
                        </Col>
                        <Col xs={24} sm={12} lg={8}>
                            <Search
                                placeholder="Search News"
                                onChange={(e) => setSearchTerm(e.target.value)}
                                enterButton
                            />
                        </Col>
                    </Row>
                    <Divider />
                </>

            )}

            {paginatedNews.length === 0 ? (
                <div className="flex justify-center items-center h-screen">
                    <Empty />
                </div>
            ) : (
                <>
                    <Row gutter={[32, 32]}>
                        {paginatedNews.map((newsItem) => (
                            <Col xs={24} sm={12} lg={6} key={newsItem.timestamp}>
                                <Card
                                    cover={<img alt={newsItem.title} src={newsItem?.image_url || demoImage} />}
                                    hoverable
                                >
                                    <a href={newsItem.url} rel="noopener noreferrer">
                                        <div>
                                            <Title level={5}>{newsItem.title}</Title>
                                            {newsItem?.tags?.map((tag) => (
                                                <Tag className="m-2" color="geekblue" key={tag.name}>
                                                    {tag.name}
                                                </Tag>
                                            ))}
                                        </div>
                                    </a>
                                    <div>
                                        <div className="m-2">
                                            <Avatar src={newsItem?.image_url || demoImage} />
                                            <Text className="mx-2">{moment(newsItem.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</Text>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    {!simplified ? (
                        <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={filteredNews.length}
                            onChange={handlePageChange}
                            style={{ marginTop: '20px', textAlign: 'center' }}
                        />
                    ) : null}
                </>
            )}
        </>
    );
}

export default News;
