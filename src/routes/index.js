module.exports = function (app) {
  app.use('/api/userProfile', require('./UserProfile'))
  
}
