// Client ID and API key from the Developer Console
var CLIENT_ID = '59984866590-pduc6g4te31dc440auimjt5mpjsmakf5.apps.googleusercontent.com';
// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://script.googleapis.com/$discovery/rest?version=v1"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/calendar https://www.google.com/calendar/feeds';


function googleSignIn(cb) {
	handleClientLoad(function(){
		initClient(function(){
			signIn(function(){
				signIn(function(){
					cb();
				})
			})
		})
	})
}

/**
*  On load, called to load the auth2 library and API client library.
*/
function handleClientLoad(cb) {
    gapi.load('client:auth2', cb);
}

/**
*  Initializes the API client library and sets up sign-in state
*  listeners.
*/
function initClient(cb) {
    gapi.client.init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    }).then(cb);
}


function signIn(cb) {
    gapi.auth2.getAuthInstance().signIn().then(cb);
}