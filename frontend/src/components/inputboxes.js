"use client";
import React from "react";

class InputBoxes extends React.Component {
  render() {
    const {
      startDate,
      endDate,
      startHour,
      endHour,
      handleStartDateChange,
      handleEndDateChange,
      handleStartHourChange,
      handleEndHourChange,
    } = this.props;

    return (
      <div className="flex flex-col gap-5">
        <div className="flex-1">
          <label className="block mb-1">Start Date:</label>
          <input
            type="date"
            value={startDate.toISOString().split("T")[0]}
            onChange={handleStartDateChange}
            className="input input-bordered w-auto max-w-xs"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1">End Date:</label>
          <input
            type="date"
            value={endDate.toISOString().split("T")[0]}
            onChange={handleEndDateChange}
            className="input input-bordered w-auto max-w-xs"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1">Start Hour:</label>
          <input
            type="number"
            value={startHour}
            min={0}
            max={23}
            onChange={handleStartHourChange}
            className="input input-bordered w-auto max-w-xs"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1">End Hour:</label>
          <input
            type="number"
            value={endHour}
            min={0}
            max={23}
            onChange={handleEndHourChange}
            className="input input-bordered w-auto max-w-xs"
          />
        </div>
      </div>
    );
  }
}

export default InputBoxes;
