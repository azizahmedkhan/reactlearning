const functions = require('firebase-functions');
const admin = require('firebase-admin')

//initilize app doesn't need config here in the server.
admin.initializeApp()

exports.onUserStatusChanges = require ('./triggers/onUserStatusChanged') 
exports.onCleverbotMessage = require('./triggers/onCleverbotMessage')
exports.helloWorld = require ('./routes/helloWorld') 
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions          .