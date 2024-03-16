import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './index.scss'
import { useSelector } from 'react-redux';
import { removeToken } from "@/utils";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('文章', '/article', <PieChartOutlined />),
  getItem('出版', '/publish', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];
const Home = () => {
  
  const userInfo = useSelector(state=>state.user.userInfo)
  // 反向高亮路由
  const location = useLocation();
  const navigate = useNavigate();
  const menuClick = (e) => {
    navigate(e.key);
  }

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const exitLogin = () => {
    removeToken('token');
    navigate('/login');
  }
  return (
    <div
    style={{
      width: 256,
    }}
    >
      <div>{userInfo}</div>
      <div onClick={exitLogin}>退出登录</div>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      {/* <Home> */}
        {/* 这里放置你的菜单内容 */}
        <div className='warp'>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            selectedKeys={[location.pathname]}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            onClick={menuClick}
            items={items}
            className='menu'
          />
            {/* 二级路由的出口默认组件 */}
            <Outlet  />
        </div>
      {/* </Home> */}


    </div>
  );
};
export default Home;