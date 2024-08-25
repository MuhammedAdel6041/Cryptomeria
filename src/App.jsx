import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Homepage, Exchanges, Cryptocurrencies, News, CryptoDetails, Coins } from './components/Routes/component.routes';
import './App.css';  // Ensure Tailwind is configured and imported

import TopGainer from './components/Feature/TopGainer/TopGainer';
import TopLoser from './components/Feature/TopLoser/TopLoser';
import ManNwe from './components/Feature/ManNew/ManNwe';
import { useEffect, useState } from 'react';

import { Header } from 'antd/es/layout/layout';
import NewListed from './components/Feature/NewListed/NewListed';
import CryptocurrencyNew from './components/Feature/CryptocurrencyNew/CryptocurrencyNew';
import Rating from './components/Feature/Rating/Rating';
import NoutFound from './components/Feature/Notfound/NoutFound';
import Article from './components/Feature/Article/Article';
import RatingDetailes from './components/Feature/RatingDetailes/RatingDetailes';
import ExchangesDetailes from './components/Feature/ExchangesDetailes/ExchangesDetailes';

function App() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

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

  const { Content, Footer, Sider } = Layout;

  return (
    <Layout className="min-h-screen overflow-hidden bg-slate-950">
      {activeMenu && screenSize > 800 ? (
        <Sider className="fixed top-0 bottom-0 ">
          <Navbar />
        </Sider>
      ) : (
        <Header className="bg-gray-900">
          <Navbar />
        </Header>
      )}

      <Layout className=" "> {/* Adjusted to prevent overlapping */}
        <Content className="   "> {/* Ensured proper padding and overflow handling */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/exchangesDetails/:id" element={<ExchangesDetailes />} />
            <Route path="/news" element={<News />} />
            <Route path="/rate" element={<Rating />} />
            <Route path="/rateDetails/:id" element={<RatingDetailes />} />
            <Route path="/cryptodetailes/:id" element={<CryptoDetails />} />
            <Route path="/coins" element={<Coins />} />
            <Route path="/topGainer" element={<TopGainer />} />
            <Route path="/topLoser" element={<TopLoser />} />
            <Route path="/newList" element={<NewListed />} />
            <Route path="/article" element={<Article />} />
            <Route path="/demo" element={<ManNwe />} />
            <Route path="/nodata" element={<CryptocurrencyNew />} />
            <Route path="*" element={<NoutFound />} />
          </Routes>
        </Content>
        <Footer className="text-center   ">Ant Design ©2024 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
