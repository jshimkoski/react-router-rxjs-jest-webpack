module.exports = {
  path: "home",
  getComponent(nextState, cb) {
    require.ensure([], function (require) {
      cb(null, require('routes/home/home.component').default);
    });
  }
};