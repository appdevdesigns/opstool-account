/**
 * AccountController
 *
 * @description :: Server-side logic for managing Accounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var AD = require('ad-utils');


module.exports = {
	
    transaction:function(req,res) {
        

        var url = 'http://localhost:'+sails.config.port+'/opstool-account-stewardwise/account/transaction';
        var method  = 'GET';

        var config = MobileManager.config('opstool-account');
        url = config.url || url;
        method = config.method || method;

        AD.log('<green>account: url:</green>'+url);

        AD.sal.http({
            url:url,
            method:method
        })
        .fail(function(err){
            res.serverError(err);
        })
        .then(function(data){
            res.send(data);
        })
    },
    period:function(req, res) {
        
        var url = 'http://localhost:'+sails.config.port+'/opstool-account-stewardwise/account/period';
        var method  = 'GET';

        var config = MobileManager.config('opstool-account');
        url = config.url || url;
        method = config.method || method;

        AD.log('<green>account: url:</green>'+url);

        AD.sal.http({
            url:url,
            method:method
        })
        .fail(function(err){
            res.serverError(err);
        })
        .then(function(data){
            res.send(data);
        })
    }
};

