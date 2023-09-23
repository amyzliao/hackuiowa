import Image from "next/image";
import { fakegroups, fakeusers } from "../utils/dummydata";
import GroupList from "../components/grouplist";
import NavBar from "../components/navbar";
import WeekCalendar from "../components/calendar";
export default function Home() {
  return (
    <main data-theme='emerald' className='bg-base-200'>
      <NavBar />
      {/* <div class='mx-10'>
        
      </div> */}
      <div class='grid grid-cols-4 gap-10 mt-5 mx-10'>
        <div class='col-span-1'>
          <GroupList groups={fakegroups} />
          {/* <div class='border-white border-2 h-full'>fish</div> */}
        </div>
        <div class='col-span-2'>
          {/* <div class='border-white border-2 h-screen'>fish</div> */}
          <WeekCalendar />
        </div>
        <div class='col-span-1'>
          <div class='border-black border-2 h-screen'>fish</div>
          {/* <WeekCalendar /> */}

        </div>
      </div>
    </main>
  );
}
