module.exports = {
  path: 'home',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('routes/home/home.component'))
    })
  }
}