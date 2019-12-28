const http = require('http');
const routes = require('./routeObj');
const setRoutes = require('./addRoute');
const userRoutes = require('./userRoutes');
const executeRoute = require('./executeRoute');

// set routes
setRoutes('user', userRoutes);

http.createServer((req, res) => {
  let path = req.url.split('/');
  let status = 200;
  let data = {};
  if (!routes[path[1]]) {
    status = 404;
  }
  path.shift();
  const mainPath = path.shift();
  path.join('/');

  try {
    data = executeRoute(req, mainPath, path);
  } catch(e) {
    status = 500;
  }

  res.writeHead(status, {
    'Content-Type': 'application/json',
  });

  const json = JSON.stringify(data);
  res.end(json);

}).listen(4000, '127.0.0.1');
