"use client";
import React from "react";

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
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
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
        <div className="mb-4 flex space-x-4">
          <div className="flex-1">
            <label className="block mb-1">Start Date:</label>
            <input
              type="date"
              value={startDate.toISOString().split("T")[0]}
              onChange={this.handleStartDateChange}
              className="border p-2 w-32"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1">End Date:</label>
            <input
              type="date"
              value={endDate.toISOString().split("T")[0]}
              onChange={this.handleEndDateChange}
              className="border p-2 w-32"
            />
          </div>
        </div>

        <div className="mb-4 flex space-x-4">
          <div className="flex-1">
            <label className="block mb-1">Start Hour:</label>
            <input
              type="number"
              value={startHour}
              min={0}
              max={23}
              onChange={this.handleStartHourChange}
              className="border p-2 w-16"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1">End Hour:</label>
            <input
              type="number"
              value={endHour}
              min={0}
              max={23}
              onChange={this.handleEndHourChange}
              className="border p-2 w-16"
            />
          </div>
        </div>

        <table className="w-full border">
          <thead>
            <tr>
              <th className="border p-2"></th>
              {dayLabels.map((label, index) => (
                <th key={index} className="border p-2">
                  {`${label.name} (${label.day})`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map((hour) => (
              <tr key={hour}>
                <td className="border p-2">{hour}:00</td>
                {dayLabels.map((_, index) => (
                  <td key={index} className="border p-2"></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default WeekCalendar;
