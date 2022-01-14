/*
 * @Description: 
 * @Autor: 24
 * @Date: 2022-01-14 17:33:11
 * @LastEditors: 24
 * @LastEditTime: 2022-01-14 17:33:29
 */
module.exports = {
  presets: [['next/babel']],
  plugins: [[
    'import', 
    { libraryName: 'antd', style: true }
  ]],
};