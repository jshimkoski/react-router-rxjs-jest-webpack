export default {
  childRoutes: [{

    path: "/",

    indexRoute: { onEnter: (nextState, replace) => replace('home') },

    getComponent(nextState, cb) {
      require.ensure([], function (require) {
        cb(null, require('./components/root').default);
      });
    },

    childRoutes: [
      require('./routes/home'),
      require('./routes/about')
    ]

  }]
};