
import { Link, useParams } from "react-router-dom";
import { useGetCryptoDetailsQuery } from "../../../services/coinsApi";
import { Col, Typography, Alert, Spin, Row, Avatar, Space, Tag, Descriptions, Progress, Statistic, Grid, Divider, Tooltip, List, Table } from 'antd';
import moment from "moment";
import { ArrowDownOutlined, ArrowUpOutlined, AuditOutlined, FacebookOutlined, FileSearchOutlined, GithubOutlined, GlobalOutlined, LinkOutlined, RedditOutlined, TwitterOutlined } from "@ant-design/icons";
import LineChart from "../LineChart/LineChart";
import TeamInformation from "../TeamInformation/TeamInformation";
 

function CryptoDetails() {
  const { id } = useParams();
  const { data, isFetching, isError } = useGetCryptoDetailsQuery(id);
 
  const cryptoDetails = data?.data;
  const { Title, Text } = Typography;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const columns = [
    {
      title: "Exchange",
      dataIndex: "exchange_name",
      key: "exchange_name",
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: "Pair",
      dataIndex: "pair",
      key: "pair",
      render: (_, record) => (
        <Text>{`${record.base.toUpperCase()}/${record.quote.toUpperCase()}`}</Text>
      ),
    },
    {
      title: "Price",
      dataIndex: "price_latest",
      key: "price_latest",
      render: (price) => (
        <Statistic
          value={price}
          precision={2}
          prefix="$"
          valueStyle={{ color: price >= 0 ? "#3f8600" : "#cf1322" }}
          suffix={price >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        />
      ),
    },
    {
      title: "24h Volume",
      dataIndex: "vol_24h",
      key: "vol_24h",
      render: (volume) =>
        volume ? (
          <Text>{`$${volume.toLocaleString()}`}</Text>
        ) : (
          <Text>N/A</Text>
        ),
    },
    {
      title: "Open Interest",
      dataIndex: "open_interest",
      key: "open_interest",
      render: (interest) =>
        interest ? (
          <Text>{`$${interest.toLocaleString()}`}</Text>
        ) : (
          <Text>N/A</Text>
        ),
    },
    {
      title: "Last Traded At",
      dataIndex: "last_traded_at",
      key: "last_traded_at",
      render: (timestamp) => (
        <Text>{new Date(timestamp).toLocaleString()}</Text>
      ),
    },
    {
      title: "Is Anomaly",
      dataIndex: "is_anomaly",
      key: "is_anomaly",
      render: (isAnomaly) =>
        isAnomaly ? <Tag color="red">Yes</Tag> : <Tag color="green">No</Tag>,
    },
    {
      title: "Is Outdated",
      dataIndex: "is_outdated",
      key: "is_outdated",
      render: (isOutdated) =>
        isOutdated ? (
          <Tag color="orange">Yes</Tag>
        ) : (
          <Tag color="green">No</Tag>
        ),
    },
  ];

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
    <div className="p-5">
      <Row gutter={[32, 32]} align="middle">
        <Col
          xs={24}
          sm={6}
          md={4}
          style={{
            textAlign: "center",
            marginBottom: screens.xs ? "20px" : "0",
          }}
        >
          <Avatar
            size={screens.md ? 140 : 120}
            src={cryptoDetails.logo}
            alt={`${cryptoDetails.name} Logo`}
            style={{
              border: "3px solid #1890ff",
              padding: "5px",
              backgroundColor: "#fff",
              marginBottom: screens.xs ? "20px" : "0",
            }}
          />
        </Col>

        <Col xs={24} sm={18} md={20}>
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Space
              align="center"
              style={{
                justifyContent: screens.xs ? "center" : "space-between",
                width: "100%",
              }}
            >
              <Title level={screens.md ? 2 : 3}>
                {cryptoDetails.name} ({cryptoDetails.symbol})
              </Title>
              <Tag
                color="blue"
                style={{
                  fontSize: screens.md ? "18px" : "14px",
                  padding: "6px 12px",
                }}
              >
                Rank #{cryptoDetails.rank}
              </Tag>
            </Space>
            <Descriptions bordered size="small" column={1}>
              <Descriptions.Item label="Rating">
                <div className="flex justify-between">
                  <p>{cryptoDetails.rating.rating}</p>
                  <p className="capitalize">
                    {moment(cryptoDetails.update_date)
                      .startOf("ss")
                      .fromNow()}
                  </p>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Max Supply">
                {cryptoDetails.market_data.max_supply} BTC
              </Descriptions.Item>
              <Descriptions.Item label="Circulating Supply">
                <Progress
                  percent={
                    (cryptoDetails.market_data.circulating_supply /
                      cryptoDetails.market_data.max_supply) *
                    100
                  }
                  showInfo={false}
                />
                <Text>
                  {cryptoDetails.market_data.circulating_supply} BTC
                </Text>
              </Descriptions.Item>
              <Descriptions.Item label="Market Cap">
                <Statistic
                  value={cryptoDetails.market_data.price[0].market_cap}
                  precision={2}
                  prefix="$"
                />
              </Descriptions.Item>
              <Descriptions.Item label="Price (USD)">
                <Statistic
                  value={cryptoDetails.market_data.price[0].price_latest}
                  precision={2}
                  prefix="$"
                />
              </Descriptions.Item>
            </Descriptions>
          </Space>
        </Col>
      </Row>
      <Divider />
      {/* Community Links */}
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Title level={3}>Community</Title>
          <Space size="middle">
            {cryptoDetails.community.twitter && (
              <Tooltip title="Twitter">
                <Link to={cryptoDetails.community.twitter} target="_blank">
                  <Avatar
                    size="large"
                    icon={<TwitterOutlined />}
                    style={{ backgroundColor: "#1DA1F2", color: "#fff" }}
                  />
                </Link>
              </Tooltip>
            )}
            {cryptoDetails.community.telegram && (
              <Tooltip title="Telegram">
                <Link to={cryptoDetails.community.telegram} target="_blank">
                  <Avatar
                    size="large"
                    icon={<LinkOutlined />}
                    style={{ backgroundColor: "#0088cc", color: "#fff" }}
                  />
                </Link>
              </Tooltip>
            )}
            {cryptoDetails.community.reddit && (
              <Tooltip title="Reddit">
                <Link to={cryptoDetails.community.reddit} target="_blank">
                  <Avatar
                    size="large"
                    icon={<RedditOutlined />}
                    style={{ backgroundColor: "#FF5700", color: "#fff" }}
                  />
                </Link>
              </Tooltip>
            )}
            {cryptoDetails.community.facebook && (
              <Tooltip title="Facebook">
                <Link to={cryptoDetails.community.facebook} target="_blank">
                  <Avatar
                    size="large"
                    icon={<FacebookOutlined />}
                    style={{ backgroundColor: "#1877F2", color: "#fff" }}
                  />
                </Link>
              </Tooltip>
            )}
            {cryptoDetails.code.length > 0 && (
              <Tooltip title="Github">
                <Link to={cryptoDetails.code[0]} target="_blank">
                  <Avatar
                    size="large"
                    icon={<GithubOutlined />}
                    style={{ backgroundColor: "#333", color: "#fff" }}
                  />
                </Link>
              </Tooltip>
            )}
          </Space>
        </Col>
      </Row>
      <Divider />
      <Row>
        <LineChart />
      </Row>

      <Divider />
      {/* Resources */}
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Title level={3}>Resources</Title>
          <List grid={{ gutter: 16, column: screens.md ? 3 : 2 }}
            dataSource={[
              {
                name: "Whitepaper",
                url: cryptoDetails.resource.whitepaper[0],
                icon: <FileSearchOutlined />,
              },
              {
                name: "Documentation",
                url: cryptoDetails.resource.doc[0],
                icon: <FileSearchOutlined />,
              },
              {
                name: "Audit Reports",
                url: cryptoDetails.resource.audit_reports[0],
                icon: <AuditOutlined />,
              },
            ]}
            renderItem={(item) => (
              <List.Item key={item.id} >
                <Tooltip title={item.name}>
                  <Link to={item.url} target="_blank">
                    <Avatar shape="square" size="large" icon={item.icon} />
                    <Text style={{ marginLeft: 8 }}>{item.name}</Text>
                  </Link>
                </Tooltip>
              </List.Item>
            )}
          />
        </Col>
      </Row>

      <Divider />

      {/* Block Explorers */}
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Title level={3}>Block Explorers</Title>
          <div style={{ maxHeight: "200px", overflowY: "auto" }}>
            <List
              grid={{ gutter: 25, column: screens.xxl ? 3 : 2 }}
              dataSource={cryptoDetails.block_explorers.map((url, index) => ({
                name: `${index + 1}. ${url}`,
                url,
              }))}
              renderItem={(item) => (
                <List.Item key={item.id} >
                  <Link to={item.url} target="_blank">
                    <GlobalOutlined style={{ marginRight: 8 }} />
                    {item.name}
                  </Link>
                </List.Item>
              )}
            />
          </div>
        </Col>
      </Row>
      <Divider />
      {/* Team Information */}
      <Row>
        <TeamInformation />
      </Row>
      <Divider />
      {/* Market Data Table */}
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Title level={3}>Market Data</Title>
          <Table
            dataSource={cryptoDetails?.tickers || []}
            columns={columns}
            key={cryptoDetails.id}// Use a unique combination of fields
            pagination={{ pageSize: 10 }} // Adjust as needed
          />
        </Col>
      </Row>
    </div>
  );
}

export default CryptoDetails;


