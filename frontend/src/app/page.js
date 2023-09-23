import Image from 'next/image'
import { fakegroups, fakeusers } from '../utils/dummydata'
import GroupList from '../components/grouplist'

export default function Home() {
  return (
    <main data-theme='emerald'>
      <h1>When To Schmeet</h1>
      <div class='grid grid-cols-4 gap-10 mt-20 mx-10'>
        <div class='col-span-1'>
          <GroupList groups={fakegroups} />
          {/* <div class='border-white border-2 h-full'>fish</div> */}
        </div>
        <div class='col-span-3'>
          <div class='border-white border-2 h-screen'>fish</div>
        </div>
      </div>

    </main>
  )
}
