/* eslint-disable react/prop-types */

import { Card, Spin, Alert, Row, Col, Statistic, Tag } from "antd";
import { useGetExchangeQuery } from "../../../services/Exchanges";
import millify from "millify";
import moment from "moment";
import { Link } from "react-router-dom";

function Exchanges({ simplified }) {
  const count = simplified ? 10 : 298;
  const { data, isFetching, error } = useGetExchangeQuery(count);
  const exchanges = data?.data?.items;

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
        <Alert
          message="Error"
          description={error.message}
          type="error"
          showIcon
        />
      </div>
    );
  }

  return (
    <Row gutter={[32, 32]}>
      {exchanges?.map((exchange) => (
        <Col xs={24} sm={24} md={12} lg={12} key={exchange.id}>
          <Link to={`/exchangesDetails/${exchange.id}`} >
            <Card
              hoverable
              title={exchange.exchange_name}
              extra={
                <a href={exchange.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              }
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="Spot Rating" value={exchange.rating_spot || "N/A"} />
                  <Tag color="blue">Spot</Tag>
                  <Statistic
                    title="Spot Rating Date"
                    value={exchange.rating_spot_date ? moment(exchange.rating_spot_date).format('DD-MMM-YYYY') : "N/A"}
                  />
                </Col>
                <Col span={12}>
                  <Statistic title="Derivatives Rating" value={exchange.rating_derivatives || "N/A"} />
                  <Tag color="green">Derivatives</Tag>
                  <Statistic
                    title="Derivatives Rating Date"
                    value={exchange.rating_derivatives_date ? moment(exchange.rating_derivatives_date).format('DD-MMM-YYYY') : "N/A"}
                  />
                </Col>
              </Row>
              <Row gutter={16} style={{ marginTop: 16 }}>
                <Col span={12}>
                  <Statistic
                    title="24h Spot Volume"
                    value={exchange.vol_spot_24h ? millify(exchange.vol_spot_24h) : "N/A"}
                  />
                </Col>
                <Col span={12}>
                  <Statistic
                    title="24h Derivatives Volume"
                    value={exchange.vol_derivatives_24h ? millify(exchange.vol_derivatives_24h) : "N/A"}
                  />
                </Col>
              </Row>
              <Row gutter={16} style={{ marginTop: 16 }}>
                <Col span={24}>
                  <Statistic
                    title="Open Interest"
                    value={exchange.open_interest ? millify(exchange.open_interest) : "Not Available"}
                  />
                </Col>
              </Row>
            </Card></Link>
        </Col>
      ))}
    </Row>
  );
}

export default Exchanges;
