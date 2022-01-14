/*
 * @Description:
 * @Autor: 24
 * @Date: 2021-12-27 17:58:58
 * @LastEditors: 24
 * @LastEditTime: 2022-01-14 09:40:47
 */
import '../styles/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
