const userRoutes = {
  'post.signup': (req) => {
    console.log('user signed up');
  },
  'post.login': (req) => {
    console.log('user logged in');
    return { status: 'success' };
  },
  'get.data': req => {
    console.log('user data retrieved');
    return { status: 'success' };
  },
};

module.exports = userRoutes;
