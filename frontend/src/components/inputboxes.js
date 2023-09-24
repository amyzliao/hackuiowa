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
      startHourAmPm,
      endHourAmPm,
      setStartHourAmPm,
      setEndHourAmPm
    } = this.props;

    const displayStartTime = startHour <= 1200 ? startHour/100 : (startHour-1200)/100
    const displayEndTime = endHour <= 1200 ? endHour/100 : (endHour-1200)/100

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
            value={displayStartTime}
            min={0}
            max={23}
            onChange={handleStartHourChange}
            className="input input-bordered max-w-xs"
          />
          {startHourAmPm === 'AM'
            ? <div className="join pl-5">
              <input
                className="join-item btn bg-primary"
                type="radio"
                name="options"
                aria-label="AM"
                onClick={() => setStartHourAmPm('AM')}
              />
              <input
                className="join-item btn bg-white"
                type="radio"
                name="options"
                aria-label="PM"
                onClick={() => setStartHourAmPm('PM')}
              />
            </div>
            : <div className="join pl-5">
              <input
                className="join-item btn bg-white"
                type="radio"
                name="options"
                aria-label="AM"
                onClick={() => setStartHourAmPm('AM')}
              />
              <input
                className="join-item btn bg-primary"
                type="radio"
                name="options"
                aria-label="PM"
                onClick={() => setStartHourAmPm('PM')}
              />
            </div>
          }

        </div>
        <div className="flex-1">
          <label className="block mb-1">End Hour:</label>
          <input
            type="number"
            value={displayEndTime}
            min={0}
            max={23}
            onChange={handleEndHourChange}
            className="input input-bordered w-auto max-w-xs"
          />
          {endHourAmPm === 'AM'
            ? <div className="join pl-5">
              <input
                className="join-item btn bg-primary"
                type="radio"
                name="options"
                aria-label="AM"
                onClick={() => setEndHourAmPm('AM')}
              />
              <input
                className="join-item btn bg-white"
                type="radio"
                name="options"
                aria-label="PM"
                onClick={() => setEndHourAmPm('PM')}
              />
            </div>
            : <div className="join pl-5">
              <input
                className="join-item btn bg-white"
                type="radio"
                name="options"
                aria-label="AM"
                onClick={() => setEndHourAmPm('AM')}
              />
              <input
                className="join-item btn bg-primary"
                type="radio"
                name="options"
                aria-label="PM"
                onClick={() => setEndHourAmPm('PM')}
              />
            </div>
          }

        </div>
        <button className="btn btn-neutral">Add event</button>
      </div>
    );
  }
}

export default InputBoxes;
