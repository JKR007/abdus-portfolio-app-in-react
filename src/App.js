import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Main } from './components/router';
import { Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='demo-big-content'>
      <Layout>
        <Header className='layout-header' title={<Link className='layout-header__title' to='/'>AbduQahhor</Link>} scroll>
          <Navigation>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Me</Link>
            <Link to='/contact'>Contact</Link>
          </Navigation>
        </Header>
        <Drawer title='AbduQahhor'>
          <Navigation>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Me</Link>
            <Link to='/contact'>Contact</Link>
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
