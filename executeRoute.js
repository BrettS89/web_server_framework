const routes = require('./routeObj');

module.exports = (req, mainPath, routeName) => {
  const fullPath = routes[mainPath][`${req.method.toLowerCase()}.${routeName}`];
  
  if (!fullPath) {
    throw new Error('could not find path');
  }

  return fullPath(req);
};
