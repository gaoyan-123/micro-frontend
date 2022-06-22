import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import './App.css';
import logo from './logo.svg';
import React from 'react';

const { Header, Sider, Content } = Layout;

function App() {
  const pushState = (path) => {
    window.history.pushState({}, 'aaa', path)
  }
  return (
    <Layout>
      <Sider trigger={null}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />} onClick={() => pushState('/react-app')}>
            react-app
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={() => window.history.replaceState(null, null, '/vue-app1')}>
            vue-app
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />} onClick={() => pushState('/vue-app2')}>
            vue-app2
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(MenuFoldOutlined, {
            className: 'trigger',
          })}
        </Header>
        <Content
          id="yourContainer"
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
