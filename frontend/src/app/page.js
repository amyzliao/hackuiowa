"use client";
import Image from "next/image";
import { fakegroups, fakeusers } from "../utils/dummydata";
import GroupList from "../components/grouplist";
import NavBar from "../components/navbar";
import WeekCalendar from "../components/calendar";
import { useState, useEffect } from "react";
import Table from "../components/table";
import InputBoxes from "@/components/inputboxes";
import TestColumn from "@/components/testColumns";

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
  const [startHour, setStartHour] = useState(900);
  const [endHour, setEndHour] = useState(1700);
  const [dayLabels, setDayLabels] = useState([]);
  const [hours, setHours] = useState([]);
  const [table, setTable] = useState([]);
  const [group, setGroup] = useState();

  function handleStartDateChange(event) {
    setStartDate(new Date(event.target.value))
    // this.setState({ startDate: new Date(event.target.value) });
  };

  function handleEndDateChange(event) {
    setEndDate(new Date(event.target.value))
    // this.setState({ endDate: new Date(event.target.value) });
  };

  function handleStartHourChange(event) {
    setStartHour(parseInt(event.target.value, 10))
    // this.setState({ startHour: parseInt(event.target.value, 10) });
  };

  function handleEndHourChange(event) {
    setEndHour(parseInt(event.target.value, 10))
    // this.setState({ endHour: parseInt(event.target.value, 10) });
  };

  useEffect(() => {
    // console.warn('start date', startDate)
    // console.warn('start date type', typeof(startDate))
    // console.warn('start date string', startDate.toString())
    // console.warn('end date string', endDate.toString())

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
      hoursCopy.push(currentHour + 25)
      hoursCopy.push(currentHour + 50)
      hoursCopy.push(currentHour + 75)
      currentHour += 100
    }
    // hoursCopy.push(endHour)
    setHours(hoursCopy)
    console.log('hoursCopy', hoursCopy)
    // setHours(Array.from({ length: 24 }, (_, index) => index).slice(
    //   startHour,
    //   endHour + 1
    // ));
  }, [startDate, endDate, startHour, endHour]);

  // useEffect(() => {
  //   var myGrid = [...Array(hours.length)].map(e => Array(dayLabels.length));
  //   setTable(myGrid)
  // }, [hours, dayLabels])

  useEffect(() => {    
    // get the users informations
    console.log('group', group)
    if (group || group === 0) {
      // API call here  
      let allBusies = []
      fakegroups[group].users.map((userID) => (
        allBusies.push(fakeusers[userID].busy)
      ))
      console.log(allBusies)
      populateTable(allBusies);
    }
  }, [group])

  function populateTable(allBusies) {
    // allBusies is an array of busy objs
    let tmpTable = [...Array(hours.length)].map(e => Array(dayLabels.length).fill(0));
    console.log('initial tmp table', tmpTable)
    // console.log('attay 0', Array(5).fill(0))
    // let tmpTable = [...Array(hours.length)].map(e => Array(dayLabels.length)); // array of cols
    // for each array of busy objs
    for (let i = 0; i < allBusies.length; i++) {
      // allBusies[i] // an array of busy objs
      allBusies[i].map((dateTimeObj, idx) => {
        const col = idx
        //dateTimeObj.times // an array of time ranges
        dateTimeObj.times.map((range) => {
          // fix start
          if (range[0] % 100 === 15) {
            range[0] += 10 //25
          } else if (range[0] % 100 === 30) {
            range[0] += 20 // 50
          } else if (range[0] % 100 === 45) {
            range[0] += 30 // 75
          }
          // fix end
          if (range[1] % 100 === 15) {
            range[1] += 10  //25
          } else if (range[1] % 100 === 30) {
            range[1] += 20 // 50
          } else if (range[1] % 100 === 45) {
            range[1] += 30  // 75
          }
          // increment table buckets
          for (let j = range[0]; j < Math.min(range[1], endHour); j += 25) {
            if (j < startHour) {
              continue;
            }
            // console.log('j', j)
            // console.log('startHour', startHour)
            const row = (j - startHour) / 25
            // console.log('group', group)
            // console.log('row', row)
            // console.log('tmptable length', tmpTable.length)
            tmpTable[row][col] += 1
          }
        })
      })
    }
    console.log('after changes', tmpTable);
    // update state
    setTable(tmpTable);
  };

  return (
    <main data-theme='emerald' className='bg-base-200 w-screen min-h-screen h-max'>
      <NavBar />
      {/* <div class='mx-10'>
        
      </div> */}
      {/* <TestColumn/> */}
      <div class='grid grid-cols-4 gap-8 mt-5 mx-10'>
        <div class='col-span-1'>
          <GroupList groups={fakegroups} setGroup={setGroup} />
          {/* <div class='border-white border-2 h-full'>fish</div> */}
        </div>
        <div class='col-span-2 pb-20'>
          {/* <div class='border-white border-2 h-screen'>fish</div> */}
          <Table dayLabels={dayLabels} hours={hours} table={table} />
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
