"use client";
import Image from "next/image";
import { fakegroups, fakeusers } from "../utils/dummydata";
import GroupList from "../components/grouplist";
import NavBar from "../components/navbar";
import WeekCalendar from "../components/calendar";
import { useState, useEffect } from "react";
import Table from "../components/table";
import InputBoxes from "@/components/inputboxes";

const daysOfWeek = [
  "SUN",
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
];

export default function Home() {
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(nextWeek);
  const [startHour, setStartHour] = useState(9);
  const [endHour, setEndHour] = useState(17);
  const [dayLabels, setDayLabels] = useState([]);
  const [hours, setHours] = useState([]);

  function handleStartDateChange (event) {
    setStartDate(new Date(event.target.value))
    // this.setState({ startDate: new Date(event.target.value) });
  };

  function handleEndDateChange (event) {
    setEndDate(new Date(event.target.value))
    // this.setState({ endDate: new Date(event.target.value) });
  };

  function handleStartHourChange (event) {
    setStartHour(parseInt(event.target.value, 10))
    // this.setState({ startHour: parseInt(event.target.value, 10) });
  };

  function handleEndHourChange (event) {
    setEndHour(parseInt(event.target.value, 10))
    // this.setState({ endHour: parseInt(event.target.value, 10) });
  };

  useEffect(() => {
    const dayLabelsCopy = []
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dayLabelsCopy.push({
        day: currentDate.getDate(),
        name: daysOfWeek[currentDate.getDay()],
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setDayLabels(dayLabelsCopy);
    
    let currentHour = startHour
    let hoursCopy = []
    while (currentHour <= endHour) {
      hoursCopy.push(currentHour)
      hoursCopy.push(currentHour + 0.25)
      hoursCopy.push(currentHour + 0.5)
      hoursCopy.push(currentHour + 0.75)
      currentHour += 1
    }
    // hoursCopy.push(endHour)
    setHours(hoursCopy)
    console.log('hoursCopy', hoursCopy)
    // setHours(Array.from({ length: 24 }, (_, index) => index).slice(
    //   startHour,
    //   endHour + 1
    // ));
  }, [startDate, endDate, startHour, endHour]);

  return (
    <main data-theme='emerald' className='bg-base-200 w-screen min-h-screen h-max'>
      <NavBar />
      {/* <div class='mx-10'>
        
      </div> */}
      <div class='grid grid-cols-4 gap-10 mt-5 mx-10'>
        <div class='col-span-1'>
          <GroupList groups={fakegroups} />
          {/* <div class='border-white border-2 h-full'>fish</div> */}
        </div>
        <div class='col-span-2 pb-20'>
          {/* <div class='border-white border-2 h-screen'>fish</div> */}
          <Table dayLabels={dayLabels} hours={hours} />
        </div>
        <div class='col-span-1'>
          {/* <WeekCalendar /> */}
          <InputBoxes
            startDate={startDate}
            endDate={endDate}
            startHour={startHour}
            endHour={endHour}
            handleStartDateChange={handleStartDateChange}
            handleEndDateChange={handleEndDateChange}
            handleStartHourChange={handleStartHourChange}
            handleEndHourChange={handleEndHourChange}
          />
        </div>
      </div>
    </main>
  );
}
