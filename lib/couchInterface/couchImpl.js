

(function () {

	var CouchImpl = (function () {

		function CouchImpl() {
			this._host     = '';
			this._port     = 5984;
			this._database = '';
        }

        CouchImpl.prototype.setPort = function (port) {
            this._port = port;
        };

		CouchImpl.prototype.setHost = function (host) {
			this._host = host;
		};

		CouchImpl.prototype.setDatabase = function (database) {
			this._database = database;
		};

		CouchImpl.prototype.getDatabaseURL = function () {
			var url = 'http://' + this._host + ':' + this._port + '/' + this._database + '/';
			return url;
		};

        return CouchImpl;
    })(); // var CouchImpl = (function() {

    module.exports = CouchImpl;

}).call(this); // (function() {