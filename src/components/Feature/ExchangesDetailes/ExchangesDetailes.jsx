import { useParams } from "react-router-dom";
import { useGetExchangesDetailesQuery } from "../../../services/Exchanges";
import { Card, Descriptions, Tag, Space, Statistic, Col, Row, List, Spin, Alert, Divider } from "antd";
import { LinkOutlined, TwitterOutlined } from "@ant-design/icons";

export default function ExchangesDetailes() {
  let { id } = useParams();
  const { data, isFetching, error } = useGetExchangesDetailesQuery(id);
  const exchangeData = data?.data;

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
    <div style={{ padding: "20px", backgroundColor: "#f4f6f9", minHeight: "100vh" }}>
      <Card
        title={<span style={{ color: "#fff" }}>{exchangeData?.exchange_name}</span>}
        extra={
          <Space size="middle">
            <a href={exchangeData?.website} target="_blank" rel="noopener noreferrer">
              <LinkOutlined style={{ color: "#fff" }} /> Website
            </a>
            <a href={exchangeData?.twitter} target="_blank" rel="noopener noreferrer">
              <TwitterOutlined style={{ color: "#1DA1F2" }} /> Twitter
            </a>
            <a href={exchangeData?.fees_link} target="_blank" rel="noopener noreferrer">
              <LinkOutlined style={{ color: "#52c41a" }} /> Fees
            </a>
          </Space>
        }
        style={{
          marginBottom: 20,
          backgroundColor: "#001529",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
        }}
        headStyle={{
          backgroundColor: "#001529",
          color: "#fff",
          fontWeight: "bold"
        }}
        bodyStyle={{
          backgroundColor: "#fafafa",
          borderRadius: "0 0 8px 8px",
          padding: "20px"
        }}
      >
        <Descriptions column={3} bordered>
          <Descriptions.Item label="Exchange ID">{exchangeData?.id}</Descriptions.Item>
          <Descriptions.Item label="Launched">{exchangeData?.launched}</Descriptions.Item>
          <Descriptions.Item label="Centralized">
            {exchangeData?.centralized ? <Tag color="green">Yes</Tag> : <Tag color="red">No</Tag>}
          </Descriptions.Item>
          <Descriptions.Item label="Supports Spot Trading">
            {exchangeData?.support_spot ? <Tag color="green">Yes</Tag> : <Tag color="red">No</Tag>}
          </Descriptions.Item>
          <Descriptions.Item label="Supports Derivatives Trading">
            {exchangeData?.support_derivatives ? <Tag color="green">Yes</Tag> : <Tag color="red">No</Tag>}
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
        <Col xs={24} lg={12}>
          <Card
            title="Spot Market Volume"
            bordered={false}
            style={{
              backgroundColor: "#f6ffed",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
            }}
            bodyStyle={{ padding: "20px" }}
          >
            <Statistic title="24h Volume (USD)" value={exchangeData?.price?.vol_spot_24h} precision={2} />
            <Divider />
            <Statistic
              title="Change 24h (USD)"
              value={exchangeData?.price?.vol_spot_change_24h}
              precision={2}
              valueStyle={{ color: exchangeData?.price?.vol_spot_change_24h < 0 ? "red" : "green" }}
            />
            <Statistic
              title="Change Percentage 24h"
              value={exchangeData?.price?.vol_spot_change_percentage_24h * 100}
              precision={2}
              valueStyle={{ color: exchangeData?.price?.vol_spot_change_percentage_24h < 0 ? "red" : "green" }}
              suffix="%"
            />
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card
            title="Derivatives Market Volume"
            bordered={false}
            style={{
              backgroundColor: "#fff7e6",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
            }}
            bodyStyle={{ padding: "20px" }}
          >
            <Statistic title="24h Volume (USD)" value={exchangeData?.price.vol_derivatives_24h} precision={2} />
            <Divider />
            <Statistic
              title="Change 24h (USD)"
              value={exchangeData?.price.vol_derivatives_change_24h}
              precision={2}
              valueStyle={{ color: exchangeData?.price.vol_derivatives_change_24h < 0 ? "red" : "green" }}
            />
            <Statistic
              title="Change Percentage 24h"
              value={exchangeData?.price.vol_derivatives_change_percentage_24h * 100}
              precision={2}
              valueStyle={{ color: exchangeData?.price.vol_derivatives_change_percentage_24h < 0 ? "red" : "green" }}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card
            title="Additional Metrics"
            bordered={false}
            style={{
              backgroundColor: "#e6f7ff",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
            }}
            bodyStyle={{ padding: "20px" }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8}>
                <Statistic title="Spot to Derivatives Ratio" value={exchangeData?.price.spot_to_derivatives_ratio} precision={4} />
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Statistic title="Open Interest (USD)" value={exchangeData?.price.open_interest} precision={2} />
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Statistic
                  title="Open Interest Change 24h (USD)"
                  value={exchangeData?.price.open_interest_change_24h}
                  precision={2}
                  valueStyle={{ color: exchangeData?.price.open_interest_change_24h < 0 ? "red" : "green" }}
                />
                <Statistic
                  title="Change Percentage 24h"
                  value={exchangeData?.price.open_interest_change_percentage_24h * 100}
                  precision={2}
                  valueStyle={{ color: exchangeData?.price.open_interest_change_percentage_24h < 0 ? "red" : "green" }}
                  suffix="%"
                />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={24}>
          <Card
            title="Volume Rankings"
            bordered={false}
            style={{
              backgroundColor: "#fff1f0",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
            }}
            bodyStyle={{ padding: "20px" }}
          >
            <Descriptions column={3} bordered>
              <Descriptions.Item label="Overall Rank by Volume">{exchangeData?.volume_rankings.overall_rank_by_vol}</Descriptions.Item>
              <Descriptions.Item label="Spot Rank by Volume">{exchangeData?.volume_rankings.spot_rank_by_vol}</Descriptions.Item>
              <Descriptions.Item label="Derivatives Rank by Volume">{exchangeData?.volume_rankings.derivatives_rank_by_vol}</Descriptions.Item>
              <Descriptions.Item label="CEX Rank by Volume">{exchangeData?.volume_rankings.cex_rank_by_vol}</Descriptions.Item>
              <Descriptions.Item label="CEX Spot Rank by Volume">{exchangeData?.volume_rankings.cex_spot_rank_by_vol}</Descriptions.Item>
              <Descriptions.Item label="CEX Derivatives Rank by Volume">{exchangeData?.volume_rankings.cex_derivatives_rank_by_vol}</Descriptions.Item>
              <Descriptions.Item label="Derivatives Rank by Open Interest">{exchangeData?.volume_rankings.derivatives_rank_by_oi}</Descriptions.Item>
              <Descriptions.Item label="CEX Derivatives Rank by Open Interest">{exchangeData?.volume_rankings.cex_derivatives_rank_by_oi}</Descriptions.Item>
              <Descriptions.Item label="DEX Rank by Volume">
                {exchangeData?.volume_rankings.dex_rank_by_vol ? exchangeData?.volume_rankings.dex_rank_by_vol : <Tag color="red">N/A</Tag>}
              </Descriptions.Item>
              <Descriptions.Item label="DEX Spot Rank by Volume">
                {exchangeData?.volume_rankings.dex_spot_rank_by_vo ? exchangeData?.volume_rankings.dex_spot_rank_by_vo : <Tag color="red">N/A</Tag>}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
        <Col span={24}>
          <Card title="Verified Tickers" bordered={false} style={{ backgroundColor: "#f0f5ff" }}>
            <List
              grid={{ gutter: 16, column: 4 }}
              pagination={{ pageSize: 8 }}
              dataSource={exchangeData?.tickers_verified}
              renderItem={(item) => (
                <List.Item>
                  <Card bordered={false} hoverable>
                    <List.Item.Meta
                      title={`${item.base.toUpperCase()} / ${item.quote.toUpperCase()} (${item.pair_type.toUpperCase()})`}
                      description={
                        <>
                          <p>Latest Price: {item.price_latest}</p>
                          <p>24h Volume: {item.vol_24h}</p>
                          <p>Open Interest: {item.open_interest !== null ? item.open_interest : "N/A"}</p>
                          <p>Status: <Tag color={item.is_valid ? "green" : "red"}>{item.status}</Tag></p>
                        </>
                      }
                    />
                  </Card>
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col span={24}>
          <Card title="Unverified Tickers" bordered={false} style={{ backgroundColor: "#fff0f6", marginTop: 20 }}>
            <List
              grid={{ gutter: 16, column: 4 }}
              pagination={{ pageSize: 8 }}
              dataSource={exchangeData?.tickers_unverified}
              renderItem={(item) => (
                <List.Item>
                  <Card bordered={false} hoverable>
                    <List.Item.Meta
                      title={`${item.base.toUpperCase()} / ${item.quote.toUpperCase()} (${item.pair_type.toUpperCase()})`}
                      description={
                        <>
                          <p>Latest Price: {item.price_latest}</p>
                          <p>24h Volume: {item.vol_24h}</p>
                          <p>Open Interest: {item.open_interest !== null ? item.open_interest : "N/A"}</p>
                          <p>Status: <Tag color={item.is_valid ? "green" : "red"}>{item.status}</Tag></p>
                        </>
                      }
                    />
                  </Card>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
