const path = require('path')
const PATH = require('./config/path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'SOURCE': PATH.SOURCE_PATH,
        'PAGES': path.resolve(PATH.SOURCE_PATH, './pages'),
        'COMPONENTS': path.resolve(PATH.SOURCE_PATH, './components'),
        'LAYOUT': path.resolve(PATH.SOURCE_PATH, './layout'),
        'STYLE': path.resolve(PATH.SOURCE_PATH, './style'),
        'STATIC': PATH.STATIC_PATH,
        'ROUTER': path.resolve(PATH.SOURCE_PATH, './router'),
        'UTILS': path.resolve(PATH.SOURCE_PATH, './utils')
      }
    }
  }
}