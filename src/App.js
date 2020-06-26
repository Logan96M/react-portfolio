import React from 'react';
import { Layout, Button } from 'antd';
import './App.css';

const { Header } = Layout;

function App() {
  return (
      <>
    <div classname = 'App'>
      <Layout>
          <Header className = 'header'>
              <h1 className = 'title'> Ant Design Rocks!!! </h1>
          </Header>
      </Layout>
      <Button>Click Me</Button>
    </div>
    </>
  );
}

export default App
