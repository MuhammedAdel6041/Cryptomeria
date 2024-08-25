import { Col, Row, Statistic, Typography, Spin, Card, Divider } from "antd";

import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import News from "../News/News.jsx";
import Coins from './../Coins/Coins';

import { useGetGlobalQuery } from "../../../services/globalStatus.js";
import { BankOutlined, BarChartOutlined, DollarCircleOutlined, FallOutlined, GlobalOutlined, LineChartOutlined, PieChartOutlined, RiseOutlined } from "@ant-design/icons";
import Rating from "../Rating/Rating.jsx";
import HeroSection from "../HeroSection/HeroSection.jsx";
import Exchanges from "../Exchanges/Exchanges.jsx";



function Homepage() {
  const { Title } = Typography;
  const { data, isFetching, error } = useGetGlobalQuery()
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 50, delay: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, delay: 0.5 }
    }
  };


  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />

      </div>
    );
  }

  if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;

  const globalStats = data?.data


  return (
    <>


      <HeroSection />


      <div  >



        <motion.div
          className="relative p-6 md:p-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Title level={1} className=" "> Crypto Market Overview</Title>
          <Row className="mt-10" gutter={[24, 24]}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <motion.div variants={itemVariants}>
                <Card bordered={false}>
                  <Statistic
                    title={<><GlobalOutlined /> Total Cryptos</>}
                    value={globalStats?.cryptos}
                  />
                </Card>
              </motion.div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <motion.div variants={itemVariants}>
                <Card bordered={false}>
                  <Statistic
                    title={<><BankOutlined /> Exchanges</>}
                    value={globalStats?.exchanges}
                  />
                </Card>
              </motion.div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <motion.div variants={itemVariants}>
                <Card bordered={false} className="bg-green-50 border-green-300">
                  <Statistic
                    title={<><DollarCircleOutlined /> Total Market Cap</>}
                    value={globalStats?.total_market_cap}
                    precision={2}
                    prefix="$"
                  />
                  <Divider />
                  <Statistic
                    title={<><LineChartOutlined /> Change (24h)</>}
                    value={globalStats?.total_market_cap_change_percentage_24h}
                  />
                </Card>
              </motion.div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <motion.div variants={itemVariants}>
                <Card bordered={false} className="bg-yellow-50 border-yellow-300">
                  <Statistic
                    title={<><BarChartOutlined /> Spot Volume (24h)</>}
                    value={globalStats['24h_spot_volume']}
                    precision={2}
                    prefix="$"
                  />
                  <Divider />
                  <Statistic
                    title={<><FallOutlined /> Change (24h)</>}
                    value={globalStats['24h_spot_volume_change_percentage_24h']}
                  />
                </Card>
              </motion.div>
            </Col>
          </Row>
          <Row gutter={[24, 24]} className="mt-6">
            <Col xs={24} sm={12} md={8} lg={6}>
              <motion.div variants={itemVariants}>
                <Card bordered={false} className="bg-pink-50 border-pink-300">
                  <Statistic
                    title={<><BarChartOutlined /> Derivative Volume (24h)</>}
                    value={globalStats['24h_derivative_volume']}
                    precision={2}
                    prefix="$"
                  />
                  <Divider />
                  <Statistic
                    title={<><FallOutlined /> Change (24h)</>}
                    value={globalStats['24h_derivative_volume_change_percentage_24h']}
                  />
                </Card>
              </motion.div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <motion.div variants={itemVariants}>
                <Card bordered={false} className="bg-blue-50 border-blue-300">
                  <Statistic
                    title={<><RiseOutlined /> Total Open Interest</>}
                    value={globalStats?.total_open_interest}
                    precision={2}
                    prefix="$"
                  />
                  <Divider />
                  <Statistic
                    title={<><RiseOutlined /> Change (24h)</>}
                    value={globalStats?.total_open_interest_change_percentage_24h}
                  />
                </Card>
              </motion.div>
            </Col>
            <Col xs={24} md={16} lg={12}>
              <motion.div variants={itemVariants}>
                <Card bordered={false} className="bg-gray-50 border-gray-300">
                  <Title level={4}><PieChartOutlined /> Market Dominance</Title>
                  <Row gutter={[16, 16]}>
                    <Col span={6}>
                      <Statistic title="BTC" value={(globalStats?.market_dominances.btc * 100).toFixed(2)} suffix="%" />
                    </Col>
                    <Col span={6}>
                      <Statistic title="ETH" value={(globalStats?.market_dominances.eth * 100).toFixed(2)} suffix="%" />
                    </Col>
                    <Col span={6}>
                      <Statistic title="USDT" value={(globalStats?.market_dominances.usdt * 100).toFixed(2)} suffix="%" />
                    </Col>
                    <Col span={6}>
                      <Statistic title="BNB" value={(globalStats?.market_dominances.bnb * 100).toFixed(2)} suffix="%" />
                    </Col>
                    <Col span={6}>
                      <Statistic title="USDC" value={(globalStats?.market_dominances.usdc * 100).toFixed(2)} suffix="%" />
                    </Col>
                  </Row>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
      <Divider />
      <div className="home heading flex justify-between items-center p-3 my-5 capitalize">
        <Title level={3} className="heading">Top 10 Cryptocurrencies in The World</Title>
        <Title level={5} className="show more"><Link to='/coins'>Show More</Link></Title>
      </div>

      <Coins simplified />
      <div className="home heading flex justify-between items-center p-3 my-5 capitalize">
        <Title level={3} className="heading">Cryptocurrencies Market </Title>
        <Title level={5} className="show more"><Link to='/coins'>Show More</Link></Title>
      </div>

      < Exchanges simplified />
      <Divider />
      <div className="home heading flex justify-between items-center p-3 my-5 capitalize">
        <Title level={3} className="heading">Recent currency news</Title>
        <Title level={5} className="show more"><Link to='/news'>Show More</Link></Title>
      </div>
      <News simplified />
      <Divider />
      <div className="home heading flex justify-between items-center p-3 my-5 capitalize">
        <Title level={3} className="heading">Top Rated Cryptocurrencies </Title>
        <Title level={5} className="show more"><Link to='/news'>Show More</Link></Title>
      </div>
      <Rating simplified />

    </>
  );
}

export default Homepage;
