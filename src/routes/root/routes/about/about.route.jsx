module.exports = {
  path: "about",
  getComponent(nextState, cb) {
    require.ensure([], function (require) {
      cb(null, require('./about.component').default);
    });
  }
};