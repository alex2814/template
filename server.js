var flatiron = require('flatiron'),
    path = require('path'),
    server = flatiron.app;

server.config.file({ file: path.join(__dirname, 'config', 'config.json') });

server.use(flatiron.plugins.http);

server.router.get('/', function () {
    this.res.json({ 'hello': 'world' })
});

server.start(3000);