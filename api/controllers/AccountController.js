/**
 * AccountController
 *
 * @description :: Server-side logic for managing Accounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var AD = require('ad-utils');


module.exports = {
	
    transaction:function(req, res) {
        
        AD.sal.http({
            url:'http://localhost:1337/opstool-account-stewardwise/account/transaction',
            method:'GET'
        })
        .fail(function(err){
            res.serverError(err);
        })
        .then(function(data){
            res.send(data);
        })
    },
    period:function(req, res) {
        
        AD.sal.http({
            url:'http://localhost:1337/opstool-account-stewardwise/account/period',
            method:'GET'
        })
        .fail(function(err){
            res.serverError(err);
        })
        .then(function(data){
            res.send(data);
        })
    }
};

