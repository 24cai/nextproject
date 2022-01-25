/*
 * @Description: 
 * @Autor: 24
 * @Date: 2022-01-18 09:48:39
 * @LastEditors: 24
 * @LastEditTime: 2022-01-25 15:15:48
 */
import React, { FC } from 'react';
import { Layout, Row, Col } from 'antd';

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
        <Content className={styles.layoutContiner}>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={18}>
              {children}
            </Col>
            <Col xs={0} sm={0} md={6}>
              侧边
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default DefaultLayout;