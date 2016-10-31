module.exports = {
  path: "home",
  getComponent(nextState, cb) {
    require.ensure([], function (require) {
      cb(null, require('./components/home').default);
    });
  }
};