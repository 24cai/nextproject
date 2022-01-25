/*
 * @Description: 
 * @Autor: 24
 * @Date: 2022-01-25 14:52:15
 * @LastEditors: 24
 * @LastEditTime: 2022-01-25 14:56:06
 */
import { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

interface Props {
  title?: string;
}

const CustomHeader: NextPage<Props> = ({ title }) => {
  useEffect(() => {
    import('amfe-flexible');
  }, []);
  return (
    <>
      <Head>
        <meta name="renderer" content="webkit" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"></meta>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

export default CustomHeader