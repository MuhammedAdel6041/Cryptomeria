import { Typography, Avatar, Menu, Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BuildOutlined, FundOutlined, MenuOutlined, UnorderedListOutlined, StarOutlined, CopyrightOutlined, FallOutlined, RiseOutlined, GlobalOutlined } from '@ant-design/icons';
import icon from '../../assets/images/cryptocurrency.png';
import { useEffect, useState } from 'react';
import { Header } from 'antd/es/layout/layout';




const menuItems = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: 'cryptocurrencies',
    icon: <FundOutlined />,
    label: 'Cryptocurrencies',
    children: [
      {
        key: 'coins',
        icon: <CopyrightOutlined />,
        label: <Link to="/coins">All Coins</Link>,
      },
      {
        key: 'newly-listed',
        icon: <UnorderedListOutlined />,
        label: <Link to="/newList">New listed </Link>,
      },
      {
        key: 'top-gainer',
        icon: <RiseOutlined />,
        label: <Link to="/topGainer">Top Gainer</Link>,
      },
      {
        key: 'top-loser',
        icon: <FallOutlined />,
        label: <Link to="/topLoser">Top Loser</Link>,
      },
    ],
  },

  {
    key: 'exchanges',
    icon: <MoneyCollectOutlined />,
    label: <Link to="/exchanges">Exchanges</Link>,
  },
  {
    key: 'article',
    icon: <GlobalOutlined  />,
    label: <Link to="/article">Article</Link>,
  },
  {
    key: 'rating',
    icon: <StarOutlined />,
    label: <Link to="/rate">Rating</Link>,
  },
  {
    key: 'news',
    icon: <BuildOutlined />,
    label: <Link to="/news">News</Link>,
  },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      {activeMenu ? (
        <div className="  flex flex-col fixed">
          <div className="pt-5 text-center">
            <Avatar src={icon} size="large" />
            <Typography.Title level={3} className="mt-5 text-white">
              <Link to="/" className="text-white">Cryptomeria</Link>
            </Typography.Title>
          </div>

          <div className="flex-1 ">
            <Menu theme="dark" mode="inline" items={menuItems} />
          </div>
        </div>
      ) : (
        <Header className="bg-gray-900">
          <div className="flex justify-between items-center p-2">
            <Avatar src={icon} size="large" />
            <Typography.Title level={3} className="text-white">
              <Link to="/" className="text-white">Cryptomeria</Link>
            </Typography.Title>
            <Button type="primary" onClick={showDrawer} icon={<MenuOutlined />} />
          </div>
          <Drawer
            title="Menu"
            placement="right"
            onClose={onClose}
            visible={visible}
          >
            <Menu theme="light" mode="inline" items={menuItems} />
          </Drawer>
        </Header>
      )}
    </>
  );
};

export default Navbar;