/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useGetNewlyListedCoinsQuery } from "../../../services/coinsApi"; 
import { Card, Col, Row, Spin, Alert, Input, Pagination, Divider, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";
import moment from "moment";
import Title from "antd/es/typography/Title";
import { HomeOutlined, UnorderedListOutlined } from "@ant-design/icons";

function NewListed({ simplified }) {

    const { data: cryptoList, isFetching, error } = useGetNewlyListedCoinsQuery(); 
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(20); 

    useEffect(() => {
        if (cryptoList && cryptoList?.data && cryptoList?.data?.items) {
            setCryptos(cryptoList?.data?.items);
        }
    }, [cryptoList]);

    const filteredCryptos = cryptos.filter((currency) =>
        currency?.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentCryptos = filteredCryptos.slice(startIndex, endIndex);

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
            {!simplified ? (
                <>
                    <Title className="text-center p-4 m-4" level={1}>  Recent currency news </Title>
                    <div className="flex justify-between p-4 m-4">
                        <Col>
                            <Breadcrumb
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
                                        href: '/coins',
                                        title: (
                                            <>
                                                <UnorderedListOutlined />
                                                <span> New listed</span>
                                            </>
                                        ),
                                    },
                                ]}
                            />
                        </Col>
                        <div className="search">
                            <Search
                                placeholder="Search Coins"
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{ marginBottom: '20px' }}
                                enterButton
                            />
                        </div>
                    </div>
                    <Divider />
                </>
            ) : ""}

            {currentCryptos.length === 0 ? (
                <div className="flex justify-center items-center h-screen">
                    <Alert
                        message="No Results"
                        description="No cryptocurrencies match your search term."
                        type="error"
                        showIcon
                    />
                </div>
            ) : (
                <>
                    <Row gutter={[32, 32]}>
                        {currentCryptos?.map((currency) => (
                            <Col xs={24} sm={12} lg={6} key={currency.id}>
                                <Link to={`/nodata`}>
                                    <Card
                                        title={`${currency.name}  `}
                                        extra={<img className="w-8 h-8" src={currency.logo} alt={currency.name} />}
                                        hoverable
                                    >
                                        <p>Price: {currency.price ? millify(currency.price) : "N/A"}</p>
                                        <p>Market Cap: {currency.spot_volume_24h ? moment(currency.spot_volume_24h).startOf('ss').fromNow().toUpperCase() : "N/A"}</p>
                                        <p>Daily Change: {currency.price_change_percentage_24h ? millify(currency.price_change_percentage_24h) : "N/A"}%</p>
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
                                total={filteredCryptos.length}
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
}

export default NewListed;
