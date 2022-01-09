import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Main } from './components/router';

import './App.css';

function App() {
  return (
    <div className='demo-big-content'>
      <Layout>
        <Header className='layout-header' title='AbduQahhor' scroll>
          <Navigation>
            <a href='/'>Home</a>
            <a href='/about'>About Me</a>
            <a href='/contact'>Contact</a>
          </Navigation>
        </Header>
        <Drawer title='AbduQahhor'>
          <Navigation>
            <a href='/'>Home</a>
            <a href='/about'>About Me</a>
            <a href='/contact'>Contact</a>
          </Navigation>
        </Drawer>
        <Content>
          <div className='page-content' />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
