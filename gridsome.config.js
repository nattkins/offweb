// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
    plugins: [
      {
        use: 'gridsome-source-google-sheets',
        options: {
          sheetId: '1HosGbnCECF0NLDksafW4MIYDX53Qi9IrYMt_yyub8I8',
          apiKey: 'AIzaSyCjs09-kvOCBJhB5tkjD1KtbH4r18qmpfs',
          // route: '/:Id'
          // // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
        }
      }
  ], 
  templates: {
    googleSheet: [
      {
        path: '/:Id',
        component: './src/templates/googleSheet.vue'
      }
    ]
  }
}
  


