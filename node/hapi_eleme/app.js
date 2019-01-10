const Hapi = require('hapi');
const server = new Hapi.Server();
const pluginHapiSwagger = require('./plugins/hapi-swagge')
const hello = require('./routes/hello-hapi')
const shops = require('./routes/shops')
require('env2')('./.env');
// 把.env配置放到process里面 并且env需要在config前面，这样在config里面才能引用
const config =require('./config/index')
server.connection({
  ...config
});

const init = async () => {
  await server.register(pluginHapiSwagger, function(err){
    if(err){
      throw err;
    }
  })
  server.route([
    ...hello,
    ...shops
  ]);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

init();
