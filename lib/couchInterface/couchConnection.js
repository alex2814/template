

(function () {

	var CouchConnection  = (function () {

		function CouchConnection() {
			this._prefix   = 'http://';
			this._host     = '';
			this._port     = 5984;
			this._database = '';
		}

		CouchConnection.prototype.setPrefix = function (prefix) {
			this._prefix = prefix;
		};

		CouchConnection.prototype.getPrefix = function () {
			return this._prefix;
		};

		CouchConnection.prototype.setHost = function (host) {
			this._host = host;
		};

		CouchConnection.prototype.getHost = function () {
			return this._host;
		};

		CouchConnection.prototype.setPort = function (port) {
			this._port = port;
		};

		CouchConnection.prototype.getPort = function () {
			return this._port;
		};

		CouchConnection.prototype.setDatabase = function (database) {
			this._database = database;
		};

		CouchConnection.prototype.getDatabase = function () {
			return this._database;
		};

		CouchConnection.prototype.getConnectionString = function () {
			return this._prefix + this._host + ':' + this._port + '/' + this._database + '/';
		};

		return CouchConnection;
	})(); // var CouchConnection  = (function () {

	module.exports = CouchConnection;

}).call(this); // (function() {