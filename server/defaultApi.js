/*
 * @Description: 
 * @Autor: 24
 * @Date: 2022-01-15 10:56:09
 * @LastEditors: 24
 * @LastEditTime: 2022-01-15 13:59:27
 */

import { get } from '../utils/request';

export const defaultApi = (data = {}) => {

  return get('https://api.github.com/repos/vercel/next.js', data);
}