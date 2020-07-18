module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      disableHostCheck: true,
      sockPort: 8084,
      sockHost: 'localhost',
      https: false,
      port: 8084,
    },
    externals: ['vue', 'vue-router', /^@game-spa\/.+/],
  },
  filenameHashing: false,
};
