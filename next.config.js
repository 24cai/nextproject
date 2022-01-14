/*
 * @Description: 
 * @Autor: 24
 * @Date: 2021-12-27 17:58:58
 * @LastEditors: 24
 * @LastEditTime: 2022-01-13 16:52:29
 */
const path = require('path');
/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@pages': path.join(__dirname, './pages'),
      '@components': path.join(__dirname, './components'),
    };
    return config;
  },
}
