///
/// \file couchInterface.js
///
/// \brief Contains the CouchInterface singleton interface class
///---------------------------------------------------------------------------------------------

var couch = require('./couchImpl.js');

(function () {
	var CouchInterface = (function ()
	{
		// private static member variables
		var _couchImpl = new couch(); // static couch implementation member variable
		var _instance  = null;        // static instance of the singleton CouchInterface class

		// private functions
		var getInstance = function () {
			if (!_instance) {
				_instance = createInstance();
			}
			return _instance;
		}; // var getInstance = function () {

		// function for the creation of the Singleton class instance
		var createInstance = function () {
			// public functions
			return {
				setHost : function (host) {
					_couchImpl.setHost(host);
				},
				setPort : function (port) {
					_couchImpl.setPort(port);
				},
				setDatabase : function (database) {
					_couchImpl.setDatabase(database);
				},
				getDatabaseURL : function () {
					return _couchImpl.getDatabaseURL();
				}
			}; // return {
		}; // var createInstance = function () {

		// Return the instance everytime this singleton is created or referenced
		return getInstance();

	})(); //var createInstance = function () {

	module.exports = CouchInterface;

}).call(this); // (function() {
