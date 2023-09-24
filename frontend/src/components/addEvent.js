"use client";

import React from "react";

class AddEventPopup extends React.Component {
  render() {
    const { eventDate, eventTime, eventName } = this.props;
    const formattedEventDate = eventDate
      ? eventDate.toISOString().split("T")[0]
      : "";

    return (
      <details className="collapse collapse-arrow bg-slate-700 text-xs text-white flex flex-col mt-5">
        <summary className="collapse-title">Add event</summary>

        <div className="flex flex-col mb-4 px-4">
          <label className="block mb-1 text-xs ">Event Date:</label>
          <input
            type="date"
            value={formattedEventDate}
            className="input input-sm text-sm input-bordered w-auto max-w-xs text-black"
          />
        </div>

        <div className="flex flex-col mb-4 px-4 ">
          <label className="block mb-1 text-xs">Event Time:</label>
          <input
            type="time"
            value={eventTime || ""}
            className="input input-sm input-bordered w-auto max-w-xs text-black"
          />
        </div>

        <div className="flex flex-col mb-4 px-4">
          <label className="block mb-1 text-xs">Event Name:</label>
          <input
            type="text"
            value={eventName || ""}
            className="input input-sm input-bordered w-auto max-w-xs text-black"
          />
        </div>
        <button className="btn btn-neutral bg-gray-600">Add event</button>

        {/* <button className="btn btn-primary btn-sm self-center py-2 px-4">
          Submit
        </button> */}
      </details>
    );
  }
}

export default AddEventPopup;
