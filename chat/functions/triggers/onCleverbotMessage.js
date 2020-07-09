//require('isomorphic-fetch')
const functions = require("firebase-functions")
const admin = require("firebase-admin")
const { firestore } = require("firebase-admin")
const { Match } = require('@reach/router')

const db = admin.firestore()
const bot = {
    displayName : "cleverbot",
    photoUrl : "https://i.imgur.com/ydOMC2c.png",
    uid : "cleverbot",
    status: {
     lastChanged : new Date(),
     state : 'online'
    },
    channels : {
        general:true
    }
}

db.collection('users')
.doc(bot.uid)
.set(bot, {merge: true})

//clever bot setup
const KEY = '...'
let cs = ""

function sendMessageToBot(message) {
    const url = 
    `https://www.cleverbot.com/getreply?key=${
        KEY}&input=${encodeUriComponent(message)}&cs=${cs}`
        //return fetch(url)
        return message
        //.then(res => res.json())
        //.then(json => {
        //    cs = json.cs
        //    return json.output
        //})
        
}

function sleep() {
    return new Promise(resolve => {
        setTimeout((resolve) => Math.random*10000)
    })
}

module.exports = functions.firestore 
                 .document("channels/general/messages/{messageId}")
                 .onCreate((doc, contect) => {
                     const message = doc.data()
                     if(!message.text.startsWith("@cleverbot")){
                         return
                     }
                 //Cleverbot
                 return sleep().then(() => {
                     sendMessageToBot(
                     message.text.replace(/^@cleverbot / , '')
                     ).then(botResponse => {
                    return db
                    .collection("channels/general/messages")
                    .add({
                        text: botResponse,
                        user: db.collection('users').doc('cleverbot'),
                        createdAt: new Date()
                        })
                     })
                   })
                 })