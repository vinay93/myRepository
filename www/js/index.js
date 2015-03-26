var app = {
// Application Constructor
initialize: function() {
this.bindEvents();
},
// 'load', 'deviceready', 'offline', and 'online'.
bindEvents: function() {
document.addEventListener('deviceready', this.onDeviceReady, false);
},
// deviceready Event Handler
onDeviceReady: function() {
app.receivedEvent('deviceready');
},

receivedEvent: function(id) {
var parentElement = document.getElementById(id);
var listeningElement = parentElement.querySelector('.listening');
var receivedElement = parentElement.querySelector('.received');
listeningElement.setAttribute('style', 'display:none;');
receivedElement.setAttribute('style', 'display:block;');
console.log('Received Event: ' + id);
},


takePicture: function() {
navigator.camera.getPicture( function( imageURI ) {
alert( imageURI );
},
function( message ) {
alert( message );
},
{
quality: 50,
destinationType: Camera.DestinationType.FILE_URI
});
}
};
