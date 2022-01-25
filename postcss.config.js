/*
 * @Description: 
 * @Autor: 24
 * @Date: 2022-01-25 14:48:07
 * @LastEditors: 24
 * @LastEditTime: 2022-01-25 14:48:08
 */
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 1080 / 10,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [/^\.html/], //排除html样式
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    },

  },
}