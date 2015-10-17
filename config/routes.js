/**
 * Routes
 *
 * Use this file to add any module specific routes to the main Sails
 * route object.
 */


module.exports = {


  /*

  '/': {
    view: 'user/signup'
  },
  '/': 'opstool-account/PluginController.inbox',
  '/': {
    controller: 'opstool-account/PluginController',
    action: 'inbox'
  },
  'post /signup': 'opstool-account/PluginController.signup',
  'get /*(^.*)' : 'opstool-account/PluginController.profile'

  */
    
    'get /account/transaction' : 'opstool-account/AccountController.transaction',
    'get /account/period' : 'opstool-account/AccountController.period'


};

