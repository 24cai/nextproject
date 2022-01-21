/*
 * @Description: 
 * @Autor: 24
 * @Date: 2022-01-18 09:48:39
 * @LastEditors: 24
 * @LastEditTime: 2022-01-18 12:48:06
 */
import React, { FC } from 'react';
import { Layout, Menu } from 'antd';

const { Header, Footer, Content } = Layout;

import styles from './index.module.less';

interface Props {
  children: React.ReactNode
}

const DefaultLayout:FC<Props> = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Header>
      </Header>
      <Layout>
        <Content>{children}</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default DefaultLayout;