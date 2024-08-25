/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useGetCryptosQuery } from "../../../services/cryptoApi"; // Ensure correct import
import { useGetCoinsQuery } from "../../../services/coinsApi"; // Ensure correct import
import { Card, Col, Row, Spin, Alert, Input } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";
 


function Cryptocurrencies({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching, error } = useGetCryptosQuery(count); // Use the correct hook

  const { data: coinsList } = useGetCoinsQuery(); // Use the correct hook
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  console.log("this is the list", coinsList?.data?.items);

  useEffect(() => {
    if (cryptoList && cryptoList.data && cryptoList.data.coins) {
      setCryptos(cryptoList.data.coins);
    }
  }, [cryptoList]);

  // Filter the cryptocurrencies based on the search term
  const filteredCryptos = cryptos.filter((currency) =>
    currency.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <div className="search">
          <Search
            placeholder="Search Coins"
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: '20px' }}
            enterButton
          />
        </div>
      ) : ""}

      {filteredCryptos.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <Alert
            message="No Results"
            description="No cryptocurrencies match your search term."
            type="error"
            showIcon
          />
        </div>
      ) : (
        <Row gutter={[32, 32]}>
          {filteredCryptos.map((currency) => (
            <Col xs={24} sm={12} lg={6} key={currency.uuid}>
              <Link to={`/crypto/${currency.uuid}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className="w-8 h-8" src={currency.iconUrl} alt={currency.name} />}
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}%</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default Cryptocurrencies;
