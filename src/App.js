import React from 'react';
import { Route, Link, Routes} from 'react-router-dom';
import { Layout ,Typography, Space} from 'antd';
import {Navbar,Homepage,Exchange,Crypocurrencies,CrypoDetail,News} from './components' ;
import './App.css';
const App = () => {
    return (
        <div className='app'> 
           <div className='navbar'>
             <Navbar/>
           </div>
           <div className='main'>
             <Layout>
               
                 <div className='routes'>
                  <Routes>
                    <Route exact path='/'>
                      <Homepage/>
                    </Route>
                    <Route exact path='/exchange'>
                      <Exchange/>
                    </Route>
                    <Route exact path='/crypocurrencies'>
                      <Crypocurrencies/>
                    </Route>
                    <Route exact path='/crypo/:coinId'>
                      <CrypoDetail/>
                    </Route>
                    <Route exact path='/news'>
                      <News/>
                    </Route>
                  </Routes>
                </div>
             </Layout>
          
           
           <div className='footer'level={5} style={{color:'white',textAlign:'center'}}>
             <Typography.Title>
               Crypocurrency<br/>
               All rights reserverd
             </Typography.Title>
             <Space>
               <Link to='/'>Home</Link>
               <Link to='/exchange'>Exchange</Link>
               <Link to='/news'>News</Link>
             </Space>
             </div>
           </div>
        </div>
    )
}
export default App ;
