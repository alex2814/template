
var assert = require("assert");

var host     = '';
var port     = 5984;
var database = '';
var prefix   = 'http://';

var expectedResult = prefix + host + ':' + port + '/' + database + '/';

describe('Test Couch Singleton Interface', function () {

	var couchIf = require('../../lib/couchInterface/couchInterface.js');

	describe('#test constructor', function () {
		it('Test if the constructor initializes the member variables correctly', function () {
			assert.strictEqual(couchIf.getDatabaseURL(), expectedResult);
		});
	});
	describe('#test setHost()', function () {
		it('Test setting the host of the couch interface', function () {
			host = 'localhost';
			couchIf.setHost(host);
			expectedResult = prefix + host + ':' + port + '/' + database + '/';
			assert.strictEqual(couchIf.getDatabaseURL(), expectedResult);
		});
	});
	describe('#test setPort()', function () {
		it('Test setting the port of the couch interface', function () {
			port = 8888;
			couchIf.setPort(port);
			expectedResult = prefix + host + ':' + port + '/' + database + '/';
			assert.strictEqual(couchIf.getDatabaseURL(), expectedResult);
		});
	});
	describe('#test setDatabase()', function () {
		it('Test setting the database of the couch interface', function () {
			database = 'testDB';
			expectedResult = prefix + host + ':' + port + '/' + database + '/';
			couchIf.setDatabase(database);
			assert.strictEqual(couchIf.getDatabaseURL(), expectedResult);
		});
	});
}); // describe('Test Couch Singleton Interface', function () {

describe('Test Couch Interface is Singleton', function () {

	var couchIfB = require('../../lib/couchInterface/couchInterface.js');

	describe('#test getDatabaseURL()', function () {
		it('Test getting the database of the couch interface', function () {
			assert.strictEqual(couchIfB.getDatabaseURL(), expectedResult);
		});
	});
});
