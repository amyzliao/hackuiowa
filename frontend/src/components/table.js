"use client";
import React from "react";

const Table = ({ dayLabels, hours }) => {
  return (
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
            <td className="pb-3 pr-2 text-right text-xs">{hour}:00</td>
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
