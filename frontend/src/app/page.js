"use client";
import Image from "next/image";
import { fakegroups, fakeusers } from "../utils/dummydata";
import GroupList from "../components/grouplist";
import NavBar from "../components/navbar";
import WeekCalendar from "../components/calendar";
import { useState, useEffect, useRef } from "react";
import Table from "../components/table";
import InputBoxes from "@/components/inputboxes";
import AddEventPopup from "@/components/addEvent";
//import TestColumn from "@/components/testColumns";

const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function Home() {
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(nextWeek);
  const [startHour, setStartHour] = useState(900);
  const [startHourAmPm, setStartHourAmPm] = useState('AM');
  const [endHourAmPm, setEndHourAmPm] = useState('PM');

  const [endHour, setEndHour] = useState(1700);
  const [dayLabels, setDayLabels] = useState([]);
  const [hours, setHours] = useState([]);
  const [table, setTable] = useState([]);
  const [group, setGroup] = useState();
  const [loading, setLoading] = useState();

  const [firstRender, setFirstRender] = useState(true);


  function handleStartDateChange(event) {
    setLoading(true);
    setStartDate(new Date(event.target.value))
    // this.setState({ startDate: new Date(event.target.value) });
  }

  function handleEndDateChange(event) {
    setLoading(true);
    setEndDate(new Date(event.target.value))
    // this.setState({ endDate: new Date(event.target.value) });
  }

  function handleStartHourChange(event) {
    setLoading(true);
    if (startHourAmPm === 'AM') {
      setStartHour(parseInt(event.target.value, 10) * 100)
    } else {
      setStartHour((parseInt(event.target.value, 10) + 12) * 100)
    }
    // setStartHour(parseInt(event.target.value, 10))
    // this.setState({ startHour: parseInt(event.target.value, 10) });
  }

  function handleEndHourChange(event) {
    setLoading(true);
    if (endHourAmPm === 'AM') {
      setEndHour(parseInt(event.target.value, 10) * 100)
    } else {
      setEndHour((parseInt(event.target.value, 10) + 12) * 100)
    }
    // setEndHour(parseInt(event.target.value, 10))
    // this.setState({ endHour: parseInt(event.target.value, 10) });
  }

  function handleGroupChange(groupID) {
    setGroup(groupID);
    setLoading(true);
  }

  useEffect(() => {
    // console.warn('start date', startDate)
    // console.warn('start date type', typeof(startDate))
    // console.warn('start date string', startDate.toString())
    // console.warn('end date string', endDate.toString())
    // setLoading(true);
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
  }, [startDate, endDate]);

  useEffect(() => {
    // setLoading(true);
    let currentHour = startHour
    let hoursCopy = []
    while (currentHour <= endHour) {
      hoursCopy.push(currentHour);
      hoursCopy.push(currentHour + 25);
      hoursCopy.push(currentHour + 50);
      hoursCopy.push(currentHour + 75);
      currentHour += 100;
    }
    // hoursCopy.push(endHour)
    setHours(hoursCopy)
    console.warn('changing hours')
    console.log('hoursCopy', hoursCopy)
    // setHours(Array.from({ length: 24 }, (_, index) => index).slice(
    //   startHour,
    //   endHour + 1
    // ));
  }, [startHour, endHour]);

  // useEffect(() => {
  //   var myGrid = [...Array(hours.length)].map(e => Array(dayLabels.length));
  //   setTable(myGrid)
  // }, [hours, dayLabels])

  useEffect(() => {
    // setLoading(true);
    // get the users informations
    console.warn('group, hours, or daylabels change')
    if (group || group === 0) {
      console.log('pizza')
      // API call here  
      let allBusies = []
      fakegroups[group].users.map((userID) => (
        allBusies.push(fakeusers[userID].busy)
      ));
      console.log(allBusies);
      populateTable(allBusies);
    }
  }, [group, hours, dayLabels])

  useEffect(() => {
    console.log('changed start hour', startHour)
  }, [startHour])

  useEffect(() => {
    console.log('changed end hour', endHour)
  }, [endHour])

  useEffect(() => {
    if (firstRender) {
      console.log('first render', firstRender)
      setFirstRender(false)
      return;
    }
    if (startHourAmPm === 'AM') {
      // switched to AM
      console.log('switched to am')
      setStartHour(startHour - 1200)
    } else {
      // switched to PM
      console.log('switched to pm')
      setStartHour(startHour + 1200)
    }
  }, [startHourAmPm])

  useEffect(() => {
    if (firstRender) {
      console.log('first render', firstRender)
      setFirstRender(false)
      return;
    }
    if (endHourAmPm === 'AM') {
      // switched to AM
      console.log('switched to am')
      setStartHour(endHour - 1200)
    } else {
      // switched to PM
      console.log('switched to pm')
      setStartHour(endHour + 1200)
    }
  }, [endHourAmPm])

  function populateTable(allBusies) {
    // allBusies is an array of busy objs
    let tmpTable = [...Array(hours.length)].map(e => Array(dayLabels.length).fill(0));
    console.log('initial tmp table', tmpTable)
    // for each array of busy objs
    for (let i = 0; i < allBusies.length; i++) {
      // allBusies[i] // an array of busy objs
      allBusies[i].map((dateTimeObj, idx) => {
        const col = idx;
        //dateTimeObj.times // an array of time ranges
        dateTimeObj.times.map((range) => {
          // fix start
          if (range[0] % 100 === 15) {
            range[0] += 10; //25
          } else if (range[0] % 100 === 30) {
            range[0] += 20; // 50
          } else if (range[0] % 100 === 45) {
            range[0] += 30; // 75
          }
          // fix end
          if (range[1] % 100 === 15) {
            range[1] += 10; //25
          } else if (range[1] % 100 === 30) {
            range[1] += 20; // 50
          } else if (range[1] % 100 === 45) {
            range[1] += 30; // 75
          }
          // increment table buckets
          for (let j = range[0]; j < Math.min(range[1], endHour); j += 25) {
            if (j < startHour) {
              continue;
            }
            const row = (j - startHour) / 25
            // console.log('j', j)
            // console.log('startHour', startHour)
            // console.log('hours lenth', hours.length)
            // console.log('row', row)
            // console.log('tmptable length', tmpTable.length)
            // console.log('col', col)
            // console.log('num cols', dayLabels.length)
            // console.log('row tabe', tmpTable[row])
            // console.log('row col tabe', tmpTable[row][col])
            tmpTable[row][col] += 1
          }
        });
      });
    }
    console.warn('after changes', tmpTable);
    // update state
    setTable(tmpTable);
  }

  useEffect(() => {
    setLoading(false);
  }, [table]);

  return (
    <main
      data-theme="emerald"
      className="bg-base-200 w-screen min-h-screen h-max"
    >
      <NavBar />
      {/* <div class='mx-10'>
        
      </div> */}
      {/* <TestColumn/> */}
      <div class='grid grid-cols-4 gap-8 mt-5 mx-10'>
        <div class='col-span-1'>
          <GroupList groups={fakegroups} setGroup={handleGroupChange} />
          {/* <div class='border-white border-2 h-full'>fish</div> */}
        </div>
        <div class='col-span-2 pb-20'>
          {loading ? <div>Loading</div> : <Table dayLabels={dayLabels} hours={hours} table={table} />}
        </div>
        <div class="col-span-1">
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
            startHourAmPm={startHourAmPm}
            endHourAmPm={endHourAmPm}
            setStartHourAmPm={setStartHourAmPm}
            setEndHourAmPm={setEndHourAmPm}
          />
        </div>
      </div>
    </main>
  );
}
