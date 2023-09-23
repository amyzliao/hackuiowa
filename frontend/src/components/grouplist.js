import React from "react";
import { fakeusers } from '../utils/dummydata'

const User = ({ user }) => {
    // console.log(user)
    return (
        <p>{user.name}</p>
    )
}

const Group = ({ group }) => {
    // console.log(fakeusers[0].id)
    // find users by id
    let usersInfo = []
    group.users.map((user) => (
        // console.log(user)
        // console.log('fish')
        // console.log(fakeusers[user.id])
        usersInfo.push(fakeusers[user])
    ))
    // console.log(usersInfo)
    return (
        <div className="collapse collapse-arrow bg-neutral text-white">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
                {group.name}
            </div>
            <div className="collapse-content">
                {usersInfo.map((user) => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        </div>
    )
}

const GroupList = ({ groups }) => {
    return (
        <div class='space-y-4'>
            {groups.map((group) => (
                <Group key={group.id} group={group} />
            ))}
        </div>
    )
}

export default GroupList