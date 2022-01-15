/*
 * @Description: 
 * @Autor: 24
 * @Date: 2022-01-15 09:38:43
 * @LastEditors: 24
 * @LastEditTime: 2022-01-15 14:14:06
 */
import { message } from 'antd';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import Router from 'next/router';

/**
 * @description 101: 成功 102: 失败 103: 服务端错误
 */
export type typeResponseCode = '101' | '102' | '103';

type RequestMethod = 'get' | 'post';

export interface RequesetConfig extends AxiosRequestConfig {
  token?: string | null,
}

export interface ResponseData extends AxiosResponse {
  data: {
    code: typeResponseCode,
    data: any;
  }
}

const timeout = 4000;

const config: RequesetConfig = {
  baseURL: 'https:0.0.0.0/3000',
  token: '',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
  timeout,
} 

const request = axios.create(config);

request.interceptors.request.use((config: RequesetConfig) => {
  // process.browser  区分浏览器端和node端
  return {
    ...config,
  }
}, (error) => {
  message.error(JSON.stringify(error))
  return Promise.reject(error);
})

const resList = {
};
request.interceptors.response.use((response: ResponseData) => {
  resList[response.config.url] = response.data;
  return Promise.resolve(resList);
},(error) => {
  if(axios.isCancel(error)) return;
  if (error.message === 'Network Error') {
    message.error('服务器错误');
    return;
  }
  if (error.message.includes('timeout')) {
    message.info('请求超时');
    return;
  }
  if (error.response?.status >= 500) {
    message.error('服务器错误');
    return;
  }
})

const reqFunc = (
  method:RequestMethod,
  path: string,
  data?: any
) => {
  const option = {
    url: path,
    method,
    data,
  };
  return request(option);
}

const get = (path: string) => {
  return new Promise(resolve => {
    reqFunc('get', path);
    Object.defineProperty(resList, path, {
      configurable: true,
      enumerable: true,
      set: function(obj) {
        resolve(obj);
      },
    });
  })
}

const post = (path: string) => {
  return new Promise(resolve => {
    reqFunc('post', path);
    Object.defineProperty(resList, path, {
      configurable: true,
      enumerable: true,
      set: function(obj) {
        resolve(obj);
      },
    });
  })
}


export { get, post }
