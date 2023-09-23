import Image from 'next/image'
import { fakegroups, fakeusers } from '../utils/dummydata'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>When To Schmeet</h1>
      <div class='w-3/4 border-2 border-solid border-white'>
        <h4>Groups:</h4>

        {fakegroups.map((group) => (
          <h6 key={group.id}>{group.id} {group.name} {group.users}</h6>
        ))}
      </div>

      <div class='w-3/4 border-2 border-solid border-white'>
        <h5 key={group.id}>Users:</h5>

        {fakeusers.map((user) => (
          <h6>{user.id} {user.name} {user.email}</h6>
        ))}
      </div>

    </main>
  )
}
