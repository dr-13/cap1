/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'fsnd666.auth0.com', // the auth0 domain prefix
    audience: 'coffeeshop', // the audience set for the auth0 app
    clientId: 'lv4BrBeNB8J7vhXJL4KO1410knrZrv8j', // the client id generated for the auth0 app
    callbackURL: 'https://127.0.0.1:8100', // the base url of the running ionic application. 
  }
};
