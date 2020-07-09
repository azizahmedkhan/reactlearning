const functions = require('firebase-functions');


module.exports = functions.https.onRequest((request, response) =>{
    console.log("Hello Aziz here")
    if(Math.random > .25) {
        console.error('Blew up')
    } else if(Math.random > .25) {
        throw new Error.error('Error Threw')
    } else {
        console.log('hey')
    }

    response.send("Hello world wth errors and stuff")
}) 

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions          .