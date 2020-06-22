import React from 'react'
import {db} from './firebase'
import useCollection from './useCollection'

function ChatInputBox({channelId ,user}) {
  return (
    <form 
      onSubmit={event => {
        event.preventDefault()
      const value = event.target.elements[0].value
      db
      .collection('channels')
      .doc(channelId)
      .collection('messages')
      .add({
        user: db.collection('users').doc(user.uid),
        text: value,
        createdAt: new Date(),
      })
      event.target.reset()
    }} className="ChatInputBox">
      <input name="message" className="ChatInput" placeholder="Message #general" />
    </form>
  );
}

export default ChatInputBox;
