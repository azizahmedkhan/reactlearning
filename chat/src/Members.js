import React from 'react';
import useCollection from './useCollection'
function Members({channelId}) {

  const members = useCollection('users')
  console.log(members)
  return (
    <div className="Members">
      <div>
        <div className="Member">
          <div className="MemberStatus offline" />
          Aziz
        </div>
        <div className="Member">
          <div className="MemberStatus online" />
          cleverbot
        </div>
      </div>
    </div>
  );
}

export default Members;
