const functions = require('firebase-functions');
const admin = require('firebase-admin')


const db= admin.firestore()

module.exports  = functions.database
                                .ref(`status/{userId}`)
                                .onUpdate((change, context) => {
                                    const eventStatus = change.after.val()
                                    const userDoc = db.doc(`users/{context.params.userId}`)
                                    //user can be online to Offline aswell
                                    //change is change to real time database
                                    return change.after.ref.once("value").then(snapshot => {
                                        const status= snapshot.val()
                                        if(status.lastChanged > eventStatus.lastChanged) {
                                            // if our current value is more recent than don't do any thing.
                                            return
                                        }
                                    })
                                    eventStatus.lastChanged =  new Date(eventStatus.lastChanged)
                                    userDoc.update({status:eventStatus})
                                })

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions          .