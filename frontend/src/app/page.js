import Image from "next/image";
import { fakegroups, fakeusers } from "../utils/dummydata";
import GroupList from "../components/grouplist";
import NavBar from "../components/navbar";
import WeekCalendar from "../components/calendar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <NavBar />
      <WeekCalendar />
      <h1>When To Schmeet</h1>
      <div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
      <GroupList />
      <div class="w-3/4 border-2 border-solid border-white">
        <h4>Groups:</h4>

        {fakegroups.map((group) => (
          <h6 key={group.id}>
            {group.id} {group.name} {group.users}
          </h6>
        ))}
      </div>

      <div class="w-3/4 border-2 border-solid border-white">
        <h5>Users:</h5>

        {fakeusers.map((user) => (
          <h6 key={user.id}>
            {user.id} {user.name} {user.email}
          </h6>
        ))}
      </div>
    </main>
  );
}
