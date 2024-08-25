import {
    Typography,
    Avatar,
    Row,
    Col,
    Table,
    Tag,
    Divider,
    List,
    Space,
    Tooltip,
    Progress,
    Statistic,
    Descriptions,
    Grid,
} from "antd";
import {
    LinkOutlined,
    FileSearchOutlined,
    TwitterOutlined,
    RedditOutlined,
    FacebookOutlined,
    GithubOutlined,
    AuditOutlined,
    GlobalOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined,
} from "@ant-design/icons";

const { Title, Text, Link } = Typography;
const { useBreakpoint } = Grid;

const BitcoinDataCard = () => {
    const screens = useBreakpoint();

    const bitcoinData = {
        "id": "bitcoin",
        "rating": {
            "rating": "AA",
            "update_date": 1723305606000
        },
        "name": "Bitcoin",
        "rank": 1,
        "symbol": "BTC",
        "logo": "https://s2.tokeninsight.com/static/coins/img/currency/Bitcoin_BTC.png?a=1666955723",
        "block_explorers": [
            "https://blockchair.com/bitcoin",
            "https://explorer.btc.com/",
            "https://live.blockcypher.com/btc/",
            "https://explorer.viabtc.com/btc",
            "https://3xpl.com/bitcoin"
        ],
        "platforms": [],
        "website": [
            "https://bitcoin.org/en/"
        ],
        "community": {
            "twitter": "https://twitter.com/bitcoin",
            "telegram": "https://t.me/BitcoinCore",
            "discord": "",
            "facebook": "https://www.facebook.com/bitcoins/",
            "linkedin": "",
            "instagram": "",
            "reddit": "https://www.reddit.com/r/Bitcoin/",
            "youtube": "",
            "medium": "",
            "mirror": "",
            "others": []
        },
        "resource": {
            "whitepaper": [
                "https://s2.tokeninsight.com/static/upload/whitePaper/Bitcoin_en.pdf?utm_source=public&utm_medium=api"
            ],
            "doc": [
                "https://developer.bitcoin.org"
            ],
            "audit_reports": []
        },
        "code": [
            "https://github.com/bitcoin"
        ],
        "market_data": {
            "max_supply": 21000000,
            "circulating_supply": 19738425,
            "circulating_supply_percentage": 0.939925,
            "last_updated": 1723376696000,
            "price": [
                {
                    "currency": "usd",
                    "price_latest": 60311.979151137675,
                    "market_cap": 1190471197009.626,
                    "fully_diluted_valuation": 1266551562173.891,
                    "price_change_24h": -806.3556731344647,
                    "price_change_percentage_24h": -0.0133697432,
                    "price_change_percentage_1h": 0.00030020129395315424,
                    "price_change_percentage_7d": 0.031411412,
                    "price_change_percentage_30d": null,
                    "price_change_percentage_90d": null,
                    "price_change_percentage_180d": null,
                    "high_24h": 61653.71062906348,
                    "low_24h": 60136.55383162097,
                    "high_7d": 62386.31153472488,
                    "low_7d": 49788.798917578046,
                    "ath": 73637.07114871827,
                    "ath_date": 1710288000000,
                    "atl": 0.05054062,
                    "atl_date": 1280016000000,
                    "vol_spot_24h": 7629264605.084507,
                    "vol_spot_change_24h": -1091422049.7825737,
                    "vol_spot_change_percentage_24h": -0.12515322393488854,
                    "vol_derivatives_24h": null,
                    "vol_derivatives_change_24h": null,
                    "vol_derivatives_change_percentage_24h": null,
                    "vol_spot_7d": 131498081916.18567,
                    "vol_derivatives_7d": null
                }
            ]
        },
        "tickers": [
            {
                "base": "btc",
                "quote": "usdt",
                "base_id": "bitcoin",
                "pair_type": "perpetuals",
                "exchange_name": "Binance",
                "exid": "binance",
                "price_latest": 67726,
                "price_change_percentage_24h": 0,
                "vol_24h": 14470586920,
                "vol_change_percentage_24h": 0,
                "open_interest": 5757546064,
                "last_traded_at": 1718087488000,
                "is_outdated": false,
                "is_anomaly": false,
                "is_valid": true
            },
            {
                "base": "btc",
                "quote": "usdt",
                "base_id": "bitcoin",
                "pair_type": "perpetuals",
                "exchange_name": "Bitget",
                "exid": "bitget",
                "price_latest": 67699.7,
                "price_change_percentage_24h": 0,
                "vol_24h": 8260814690,
                "vol_change_percentage_24h": 0,
                "open_interest": 6603027500,
                "last_traded_at": 1718087409000,
                "is_outdated": false,
                "is_anomaly": true,
                "is_valid": false
            },
            {
                "base": "btc",
                "quote": "usdt",
                "base_id": "bitcoin",
                "pair_type": "perpetuals",
                "exchange_name": "Bybit",
                "exid": "bybit",
                "price_latest": 67695.6,
                "price_change_percentage_24h": 0,
                "vol_24h": 6097700338,
                "vol_change_percentage_24h": 0,
                "open_interest": 4262389482,
                "last_traded_at": 1718087416000,
                "is_outdated": false,
                "is_anomaly": false,
                "is_valid": true
            },
            {
                "base": "btc",
                "quote": "usdt",
                "base_id": "bitcoin",
                "pair_type": "perpetuals",
                "exchange_name": "BitMart",
                "exid": "bitmart",
                "price_latest": 67738.2,
                "price_change_percentage_24h": 0,
                "vol_24h": 5803977963,
                "vol_change_percentage_24h": 0,
                "open_interest": 27529831.93,
                "last_traded_at": 1718087407000,
                "is_outdated": false,
                "is_anomaly": false,
                "is_valid": true
            },
            {
                "base": "btc",
                "quote": "usdt",
                "base_id": "bitcoin",
                "pair_type": "perpetuals",
                "exchange_name": "OKX",
                "exid": "okx",
                "price_latest": 69033.7,
                "price_change_percentage_24h": 0,
                "vol_24h": 4731261961,
                "vol_change_percentage_24h": 0,
                "open_interest": 1681262666,
                "last_traded_at": 1717401626000,
                "is_outdated": false,
                "is_anomaly": false,
                "is_valid": true
            },
            {
                "base": "btc",
                "quote": "usdt",
                "base_id": "bitcoin",
                "pair_type": "perpetuals",
                "exchange_name": "BingX",
                "exid": "bingx",
                "price_latest": 41680,
                "price_change_percentage_24h": 0,
                "vol_24h": 3521062358,
                "vol_change_percentage_24h": 0,
                "open_interest": 888266307.4,
                "last_traded_at": 1718087405000,
                "is_outdated": false,
                "is_anomaly": false,
                "is_valid": true
            },
            {
                "base": "btc",
                "quote": "fdusd",
                "base_id": "bitcoin",
                "pair_type": "spot",
                "exchange_name": "Binance",
                "exid": "binance",
                "price_latest": 67845.26911,
                "price_change_percentage_24h": 0,
                "vol_24h": 3239231713,
                "vol_change_percentage_24h": 0,
                "open_interest": null,
                "last_traded_at": 1718087075000,
                "is_outdated": false,
                "is_anomaly": false,
                "is_valid": true
            },
            {
                "base": "btc",
                "quote": "usdt",
                "base_id": "bitcoin",
                "pair_type": "perpetuals",
                "exchange_name": "Blofin",
                "exid": "blofin",
                "price_latest": 67649.5,
                "price_change_percentage_24h": 0,
                "vol_24h": 2597759252,
                "vol_change_percentage_24h": 0,
                "open_interest": 640326143.2,
                "last_traded_at": 1718087414000,
                "is_outdated": false,
                "is_anomaly": false,
                "is_valid": true
            },
            {
                "base": "btc",
                "quote": "usd",
                "base_id": "bitcoin",
                "pair_type": "perpetuals",
                "exchange_name": "Binance",
                "exid": "binance",
                "price_latest": 67645,
                "price_change_percentage_24h": 0,
                "vol_24h": 2534332386,
                "vol_change_percentage_24h": 0,
                "open_interest": 1667014800,
                "last_traded_at": 1718087486000,
                "is_outdated": false,
                "is_anomaly": false,
                "is_valid": true
            },
            {
                "base": "btc",
                "quote": "usdt",
                "base_id": "bitcoin",
                "pair_type": "perpetuals",
                "exchange_name": "MEXC Global",
                "exid": "mexc-global",
                "price_latest": 67707.6,
                "price_change_percentage_24h": 0,
                "vol_24h": 2062918761,
                "vol_change_percentage_24h": 0,
                "open_interest": 740255058.4,
                "last_traded_at": 1718087443000,
                "is_outdated": false,
                "is_anomaly": false,
                "is_valid": true
            },
            // Add the rest of the tickers here
        ]
    };

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

    return (
        <div style={{ padding: screens.xs ? "10px" : "30px" }}>
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
                        src={bitcoinData.logo}
                        alt="Bitcoin Logo"
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
                                {bitcoinData.name} ({bitcoinData.symbol})
                            </Title>
                            <Tag
                                color="blue"
                                style={{
                                    fontSize: screens.md ? "18px" : "14px",
                                    padding: "6px 12px",
                                }}
                            >
                                Rank #{bitcoinData.rank}
                            </Tag>
                        </Space>
                        <Descriptions bordered size="small" column={1}>
                            <Descriptions.Item label="Rating">
                                {bitcoinData.rating.rating}
                            </Descriptions.Item>
                            <Descriptions.Item label="Max Supply">
                                {bitcoinData.market_data.max_supply.toLocaleString()} BTC
                            </Descriptions.Item>
                            <Descriptions.Item label="Circulating Supply">
                                <Progress
                                    percent={
                                        (bitcoinData.market_data.circulating_supply /
                                            bitcoinData.market_data.max_supply) *
                                        100
                                    }
                                    showInfo={false}
                                />
                                <Text>
                                    {bitcoinData.market_data.circulating_supply.toLocaleString()}{" "}
                                    BTC
                                </Text>
                            </Descriptions.Item>
                            <Descriptions.Item label="Market Cap">
                                <Statistic
                                    value={bitcoinData.market_data.price[0].market_cap}
                                    precision={2}
                                    prefix="$"
                                />
                            </Descriptions.Item>
                            <Descriptions.Item label="Price (USD)">
                                <Statistic
                                    value={bitcoinData.market_data.price[0].price_latest}
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
                        {bitcoinData.community.twitter && (
                            <Tooltip title="Twitter">
                                <Link href={bitcoinData.community.twitter} target="_blank">
                                    <Avatar size="large" icon={<TwitterOutlined />} />
                                </Link>
                            </Tooltip>
                        )}
                        {bitcoinData.community.telegram && (
                            <Tooltip title="Telegram">
                                <Link href={bitcoinData.community.telegram} target="_blank">
                                    <Avatar size="large" icon={<LinkOutlined />} />
                                </Link>
                            </Tooltip>
                        )}
                        {bitcoinData.community.reddit && (
                            <Tooltip title="Reddit">
                                <Link href={bitcoinData.community.reddit} target="_blank">
                                    <Avatar size="large" icon={<RedditOutlined />} />
                                </Link>
                            </Tooltip>
                        )}
                        {bitcoinData.community.facebook && (
                            <Tooltip title="Facebook">
                                <Link href={bitcoinData.community.facebook} target="_blank">
                                    <Avatar size="large" icon={<FacebookOutlined />} />
                                </Link>
                            </Tooltip>
                        )}
                        {bitcoinData.code.length > 0 && (
                            <Tooltip title="Github">
                                <Link href={bitcoinData.code[0]} target="_blank">
                                    <Avatar size="large" icon={<GithubOutlined />} />
                                </Link>
                            </Tooltip>
                        )}
                    </Space>
                </Col>
            </Row>
            <Divider />

            {/* Resources */}
            <Row gutter={[16, 16]}>
                <Col xs={24}>
                    <Title level={3}>Resources</Title>
                    <List
                        grid={{ gutter: 16, column: screens.md ? 3 : 2 }}
                        dataSource={[
                            {
                                name: "Whitepaper",
                                url: bitcoinData.resource.whitepaper[0],
                                icon: <FileSearchOutlined />,
                            },
                            {
                                name: "Documentation",
                                url: bitcoinData.resource.doc[0],
                                icon: <FileSearchOutlined />,
                            },
                            {
                                name: "Audit Reports",
                                url: bitcoinData.resource.audit_reports[0],
                                icon: <AuditOutlined />,
                            },
                        ]}
                        renderItem={(item) => (
                            <List.Item>
                                <Tooltip title={item.name}>
                                    <Link href={item.url} target="_blank">
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
                    <List
                        grid={{ gutter: 16, column: screens.md ? 3 : 2 }}
                        dataSource={bitcoinData.block_explorers.map((url) => ({
                            name: url,
                            url,
                        }))}
                        renderItem={(item) => (
                            <List.Item>
                                <Link href={item.url} target="_blank">
                                    <GlobalOutlined style={{ marginRight: 8 }} />
                                    {item.name}
                                </Link>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
            <Divider />

            {/* Market Data Table */}
            <Row gutter={[16, 16]}>
                <Col xs={24}>
                    <Title level={3}>Market Data (Tickers)</Title>
                    <Table
                        columns={columns}
                        dataSource={bitcoinData.tickers}
                        pagination={{ pageSize: 5, showSizeChanger: true }}
                        rowKey="exchange_name"
                        style={{
                            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                            borderRadius: "12px",
                        }}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default BitcoinDataCard;
