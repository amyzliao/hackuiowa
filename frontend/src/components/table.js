"use client";
import React from "react";

const Table = ({ dayLabels, hours, table }) => {
  // empty table initially
  if (table.length === 0) {
    return (
      
      <table className="w-full text-sm">
        {/* row of days of the week and dates */}
        <thead>
          <tr>
            <th class='w-16'></th>
            {dayLabels.map((label, index) => (
              <th key={index}>
                {`${label.name} (${label.day})`}
              </th>
            ))}
          </tr>
        </thead>
        {/* other rows */}
        <tbody>
          {hours.map((hour, idx) => {
            // const row = idx
            return (
              <tr key={hour} class='h-1'>
                {/* first col: times */}
                {hour % 100 === 0
                  ? hour <= 1200
                    ? <td className="pr-2 text-right text-xxs w-max">{hour / 100} AM</td>
                    : <td className="pr-2 text-right text-xxs w-max">{hour / 100 - 12} PM</td>
                  : <td className="pr-2 text-right text-xxs">.</td>}
                {/* other cols: for displaying business */}
                {dayLabels.map((_, jdx) => {
                  // const col = jdx
                  // const darkness = table[row][col] * 100
                  return (
                    <td key={jdx} className="border border-black"></td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    );
  } else {
    return (
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th class='w-16'></th>
            {dayLabels.map((label, index) => (
              <th key={index}>
                {`${label.name} (${label.day})`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, idx) => {
            const row = idx
            return (
              <tr key={hour} class='h-1'>
                {hour % 100 === 0
                  ? hour <= 1200
                    ? <td className="pr-2 text-right text-xxs w-max">{hour / 100} AM</td>
                    : <td className="pr-2 text-right text-xxs w-max">{hour / 100 - 12} PM</td>
                  : <td className="pr-2 text-right text-xxs">.</td>}
                {dayLabels.map((_, jdx) => {
                  const col = jdx
                  // console.log('table', table[row][col])
                  const darkness = table[row][col]*2 / 10
                  // console.log('darkness', darkness)
                  // console.log('type', typeof(darkness))
                  return (
                    <td key={jdx} className='border border-black bg-blue-900' style={{ opacity: darkness }} ></td>
                    // <td key={jdx} className="border border-black" style={{ backgroundColor: `rgba(30, 58, 138, ${darkness})` }}></td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    );
  }
};

export default Table;
