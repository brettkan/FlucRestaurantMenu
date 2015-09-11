module.exports = function(app, express, server, io){

  app.use('/', express.static(__dirname + '/../../client/dist'));

};
