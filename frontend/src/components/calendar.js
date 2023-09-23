"use client";
import React from "react";
import InputBoxes from "./inputboxes";
import Table from "./table";

class WeekCalendar extends React.Component {
  constructor(props) {
    super(props);
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    this.state = {
      startDate: today,
      endDate: nextWeek,
      startHour: 0,
      endHour: 23,
    };
  }

  handleStartDateChange = (event) => {
    this.setState({ startDate: new Date(event.target.value) });
  };

  handleEndDateChange = (event) => {
    this.setState({ endDate: new Date(event.target.value) });
  };

  handleStartHourChange = (event) => {
    this.setState({ startHour: parseInt(event.target.value, 10) });
  };

  handleEndHourChange = (event) => {
    this.setState({ endHour: parseInt(event.target.value, 10) });
  };

  render() {
    const { startDate, endDate, startHour, endHour } = this.state;

    const daysOfWeek = [
      "SUN",
      "MON",
      "TUE",
      "WED",
      "THU",
      "FRI",
      "SAT",
    ];

    const dayLabels = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      dayLabels.push({
        day: currentDate.getDate(),
        name: daysOfWeek[currentDate.getDay()],
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const hours = Array.from({ length: 24 }, (_, index) => index).slice(
      startHour,
      endHour + 1
    );

    return (
      <div className="p-10">
        <InputBoxes
          startDate={startDate}
          endDate={endDate}
          startHour={startHour}
          endHour={endHour}
          handleStartDateChange={this.handleStartDateChange}
          handleEndDateChange={this.handleEndDateChange}
          handleStartHourChange={this.handleStartHourChange}
          handleEndHourChange={this.handleEndHourChange}
        />

        <Table dayLabels={dayLabels} hours={hours} />
      </div>
    );
  }
}

export default WeekCalendar;
