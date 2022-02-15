import React from 'react';
import {Typography, Row, Col, Statistic} from 'antd';
import {Link} from 'react-router-dom';
import millify from 'millify';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Crypocurrencies , News} from '.';
const {Title} = Typography;
 const Homepage = () => {
   const { data, isFetching } = useGetCryptosQuery();

   const globalStats = data?.data?.stats;
   if (isFetching) return 'Loading...';
   https://github.com/rubal7/cryptocurrencies.git 
   return (
    <>
    <Title level={2} className="heading">Global Crypo Status</Title>
    <Row>
      <Col span={12}><Statistic title ="Total Cyptocurrencies" value={globalStats.total}/></Col>
      <Col span={12}><Statistic title ="Total Exchanges" value={millify(globalStats.exchanges)}/></Col>
      <Col span={12}><Statistic title ="Total Market Cap" value={millify(globalStats.TotalMarketCap)}/></Col>
      <Col span={12}><Statistic title ="Total 24h Volume" value={millify(globalStats.Total24hVolume)}/></Col>
      <Col span={12}><Statistic title ="Total Markets" value={millify(globalStats.TotalMarkets )}/></Col>
    </Row>
    <div className='home-heading-container'>
        <Title level={2} className="home-title">Top 10 Cyptocurrencies in the world</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurencies">show more </Link></Title>
    </div>
    <Crypocurrencies simplified/>
    <div className='home-heading-container'>
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">show more </Link></Title>
    </div>
    <News simplified/>
    </>
  )
}
export default Homepage;
