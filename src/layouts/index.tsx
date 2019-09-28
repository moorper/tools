import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import styles from './index.css';

import NavBar from '@/components/NavBar';

const BasicLayout: React.FC = props => {
  return (
    <ConfigProvider locale={zhCN}>
      <Layout className={styles.container}>
        <Layout.Header>
          <NavBar/>
        </Layout.Header>
        <Layout.Content>
          {props.children}
        </Layout.Content>
        <Layout.Footer>
          我是 Footer
        </Layout.Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default BasicLayout;
