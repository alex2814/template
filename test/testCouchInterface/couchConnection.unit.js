

var assert    = require("assert");
var couchConn = require('../../lib/couchInterface/couchConnection.js');

var host     = '';
var port     = 5984;
var database = '';
var prefix   = 'http://';

var expectedResult = prefix + host + ':' + port + '/' + database + '/';

describe('Test Couch Connection class', function () {

	var connection = new couchConn();

	describe('#test constructor', function () {
		it('Test the default constructor values via getConnectionString()', function () {
			assert.strictEqual(connection.getConnectionString(), expectedResult);
		});
	});

	describe('#test getPrefix() and setPrefix()', function () {
		it('Test the connection prefix property', function () {
			assert.strictEqual(connection.getPrefix(), prefix);
			prefix = 'https://';
			connection.setPrefix(prefix);
			assert.strictEqual(connection.getPrefix(), prefix);
		});
	});

	describe('#test setHost() and getHost()', function () {
		it('Test the connection host property', function () {
			assert.strictEqual(connection.getHost(), host);
			host = '127.0.0.1';
			connection.setHost(host);
			assert.strictEqual(connection.getHost(), host);
		});
	});

	describe('#test setPort() and getPort()', function () {
		it('Test the connection port property', function () {
			assert.strictEqual(connection.getPort(), port);
			port = 8888;
			connection.setPort(port);
			assert.strictEqual(connection.getPort(), port);
		});
	});

	describe('#test setDatabase() and getDatabase()', function () {
		it('Test the connection database property', function () {
			assert.strictEqual(connection.getDatabase(), database);
			database = 'testingDB';
			connection.setDatabase(database);
			assert.strictEqual(connection.getDatabase(), database);
		});
	});

	describe('#test getting the connection string after modifying connection properties', function () {
		it('Test getConnectionString()', function () {
			expectedResult = prefix + host + ':' + port + '/' + database + '/';
			assert.strictEqual(connection.getConnectionString(), expectedResult);
		});
	});

});