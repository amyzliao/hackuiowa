"use client";
import React from "react";

const Table = ({ dayLabels, hours }) => {
  return (
    <table className="w-full border-black">
      <thead>
        <tr>
          <th className="border border-black p-2"></th>
          {dayLabels.map((label, index) => (
            <th key={index} className="border border-black p-2">
              {`${label.name} (${label.day})`}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {hours.map((hour) => (
          <tr key={hour}>
            <td className="border border-black p-2">{hour}:00</td>
            {dayLabels.map((_, index) => (
              <td key={index} className="border border-black p-2"></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
