import React from "react";
import { fakeusers } from "../utils/dummydata";

const User = ({ user }) => {
  // console.log(user)
  return <p>{user.name}</p>;
};

const Group = ({ group, setGroup }) => {
  // console.log(fakeusers[0].id)
  // find users by id
  let usersInfo = [];
  group.users.map((user) =>
    // console.log(user)
    // console.log('fish')
    // console.log(fakeusers[user.id])
    usersInfo.push(fakeusers[user])
  );
  // console.log(usersInfo)
  return (
    <div
      key={group.id}
      className="collapse collapse-arrow bg-neutral hover:bg-neutral-focus text-white"
    >
      <input
        type="radio"
        name="my-accordion-2"
        onClick={() => setGroup(group.id)}
      />
      <div className="collapse-title text-xl font-medium">{group.name}</div>
      <div className="collapse-content">
        {usersInfo.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
      <button className="btn btn-neutral bg-gray-600">Add person</button>
    </div>
  );
};

const GroupList = ({ groups, setGroup }) => {
  return (
    <div class="space-y-4">
      {groups.map((group) => (
        <Group key={group.id} group={group} setGroup={setGroup} />
      ))}
      <button className="btn btn-block btn-neutral">Add group</button>
    </div>
  );
};

export default GroupList;
