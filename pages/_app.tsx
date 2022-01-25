/*
 * @Description:
 * @Autor: 24
 * @Date: 2021-12-27 17:58:58
 * @LastEditors: 24
 * @LastEditTime: 2022-01-25 15:11:04
 */
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { DefaultLayout } from '../Layout/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
    
  );
}

export default MyApp;
