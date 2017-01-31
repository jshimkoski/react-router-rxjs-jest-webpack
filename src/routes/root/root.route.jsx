export default {
  childRoutes: [{

    path: "/",

    indexRoute: { onEnter: (nextState, replace) => replace('home') },

    getComponent(nextState, cb) {
      require.ensure([], function (require) {
        cb(null, require('./root.component').default);
      });
    },

    childRoutes: [
      require('./routes/home/home.route'),
      require('./routes/about/about.route')
    ]

  }]
};