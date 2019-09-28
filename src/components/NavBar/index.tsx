import React from 'react';
import { Menu } from 'antd';
import Link from 'umi/link';

function NavBar() {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
      <Menu.Item>
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/ssr">SSR</Link>
      </Menu.Item>
    </Menu>
  );
}

export default NavBar;
