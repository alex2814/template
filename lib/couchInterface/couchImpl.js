
var couchConnection = require('./couchConnection.js');

(function () {

	var CouchImpl = (function () {
		function CouchImpl() {
			this._connection = new couchConnection();
        }

        CouchImpl.prototype.setConnection = function (connection) {
			this._connection = connection;
		};

		CouchImpl.prototype.getConnection = function () {
			return this._connection;
		};

        CouchImpl.prototype.setPort = function (port) {
            this._connection.setPort(port);
        };

		CouchImpl.prototype.setHost = function (host) {
			this._connection.setHost(host);
		};

		CouchImpl.prototype.setDatabase = function (database) {
			this._connection.setDatabase(database);
		};

		CouchImpl.prototype.getDatabaseURL = function () {
			return this._connection.getConnectionString();
		};

        return CouchImpl;
    })(); // var CouchImpl = (function() {

    module.exports = CouchImpl;

}).call(this); // (function() {