import React, { useEffect } from 'react';
import useCollection from './useCollection'
import { db } from './firebase';
function Members({channelId}) {

  // const members = useCollection('users', 'displayName',
  // [`channels.${channelId}`,"==", true])
// above sorting need index which doesn't really for our schema at this stage.
// we do the sorting on client side instead.
const members = useCollection('users', undefined,
   [`channels.${channelId}`,"==", true])

  //we can use where clause in firebase quiries as follow
  // useEffect( () => {
  //   db.collection("users")
  //   .where(`channels.${channelId}`,"==", true )
  //   .onSnapshot(snapshot => {
  //     snapshot.forEach(doc => {
  //       console.log(doc.data())
  //     });
  //   })
  // }
  // ) 


  return (
    <div className="Members">
      <div>
        {members.sort(sortByName).map((member) => (
          <div key={member.id} className="Member">
          <div className="MemberStatus online" />
          {member.displayName}
        </div>
        ))}
      </div>
    </div>
  );
}

function sortByName(a, b) {
  return a.displayName > b.displayName
    ? 1
    : a.displayName < b.displayName
    ? -1
    : 0
}

export default Members;
