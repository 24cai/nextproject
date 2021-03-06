/* eslint-disable @next/next/no-img-element */
/*
 * @Description: 
 * @Autor: 24
 * @Date: 2021-12-27 17:58:58
 * @LastEditors: 24
 * @LastEditTime: 2022-01-25 15:01:50
 * 
 */
import { NextPage } from 'next';
import { useEffect } from 'react';
import { Card } from 'antd';

import { defaultApi } from '../server/defaultApi';
import { CustomHeader } from '../components';

import styles from './Home.module.less';

interface IDataItem {
  title: string;
  id: number;
}

type HomeProps = {
  stars: IDataItem[];
  rjson: string;
};
const data: IDataItem[] = [
  {
    title: 'Title 1',
    id: 1,
  },
  {
    title: 'Title 2',
    id: 2,
  },
  {
    title: 'Title 3',
    id: 3,
  },
  {
    title: 'Title 4',
    id: 4,
  },
  {
    title: 'Title 5',
    id: 5,
  },
  {
    title: 'Title 6',
    id: 6,
  },
];
const Home: NextPage<HomeProps> = ({ stars }) => {

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const res = await defaultApi();
    console.log('页面res--------->', res)
  }
  return (
    <div className={styles.container}>
      <CustomHeader 
        title={'首页-文章列表'}
      />
      <main>
        {
          stars.map(it => (
            <Card style={{ width: '100%' }} key={it.id} title={it.title}>
              <div className={styles.flexSpaceBtn}>
                <span>
                  Card content
                </span>
                <img
                  alt="example"
                  src="http://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  width={50}
                  height={50}
                />
              </div>
            </Card>
          ))
        }
      </main>
    </div>
  )
}

Home.getInitialProps = async (_ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const rjson = await res.json();
  return { stars: data, rjson: rjson }
}

export default Home
