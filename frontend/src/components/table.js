"use client";
import React from "react";

const Table = ({ dayLabels, hours }) => {
  const numCols = dayLabels.length + 1
  const numRows = (hours.length - 1) * 4

  return (
    // <div class='grid grid-cols-{numCols}' >
    //   {dayLabels.map((dayLabel, idx) => (
    //     <div key={idx} class='grid grid-rows-{numRows}'>
    //       {hours.map((hour, idx) => (
    //         <div key={idx}>{hour}</div>
    //       ))}
    //     </div>
    //   ))}
    // </div>
    <table className="w-full text-sm">
      <thead>
        <tr>
          <th></th>
          {dayLabels.map((label, index) => (
            <th key={index}>
              {`${label.name} (${label.day})`}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {hours.map((hour) => (
          <tr key={hour} class='h-1'>
            {hour % 1 === 0
              ? hour <= 12
                ? <td className="pr-2 text-right text-xxs">{hour} AM</td>
                : <td className="pr-2 text-right text-xxs">{hour-12} PM</td>
              : <td className="pr-2 text-right text-xxs">.</td>}
            {dayLabels.map((_, index) => (
              <td key={index} className="border-2 rounded-sm border-base-300"></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
