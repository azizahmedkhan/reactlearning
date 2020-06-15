import React, {useEffect} from 'react';
import Members from './Members';
import ChannelInfo from './ChannelInfo';
import Messages from './Messages';
import ChatInputBox from './ChatInputBox';
import {db} from './firebase'
 
function Channel({user, channelId}) {
  //[] ca be used to computed property 
  // like const channel= {channel[ channelId ] =true}
  // is equal to const channel = [channelId] = true (somethign like that) 
  useEffect(() => {
    db.doc(`users/${user.uid}`).update({
      //below is the firebase api to update deep document value.
      [`channels.${channelId}`] : true
      //channels: {
        //below we want to say channel's channelId
        //[] are used for computer property
        //if we are in and object we can used it's properties in square bracket.
        //[`channels.${channelId}`] : true
       // [channelId] : true

      //}
    })
  }, [user.uid, channelId])
  //above think what variables are in useEffects scope, 
  //put them in the arrray of second argument of useEffect
  //db can't changes above. it is fix
  return (
    <div className="Channel">
      <div className="ChannelMain">
        <ChannelInfo channelId={channelId} />
        <Messages channelId={channelId} />
        <ChatInputBox channelId={channelId} user={user} />
      </div>
      <Members  channelId={channelId} />
    </div>
  );
}

export default Channel;
