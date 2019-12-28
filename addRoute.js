const routes = require('./routeObj');

module.exports = (route, obj) => {
  if (typeof route !== 'string')
    throw new Error('route must be string');

  routes[route] = {};

  for (let r in obj) {
    routes[route][r] = obj[r];
  }
};
