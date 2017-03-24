/**
 * Module dependencies
 */
var app = require('./config/app');
var router = require('./server/post.server.routes');



//register Router
app.use('/api',router);


app.set('port', process.env.PORT || 5000);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
