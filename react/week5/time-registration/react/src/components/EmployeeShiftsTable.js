import React from "react";

function EmployeeShiftsTable({ shifts }) {
  return (
    <section className="shift-list">
      <h2>Shifts</h2>
      <ul>
        <li>
          <span>Name</span>
          <span>Date</span>
          <span>Start time</span>
          <span>End time</span>
          <span>Total number of hours</span>
          <span>Price per hour</span>
          <span>Total price</span>
        </li>
        {shifts.shiftsList.map((shift, id) => {
          return (
            <li key={id}>
              <span>{shift.employeeName}</span>
              <span>{shift.date}</span>
              <span>{shift.startTime}</span>
              <span>{shift.endTime}</span>
              <span>{shift.totalHours}</span>
              <span>{shifts.price} dkk </span>
              <span>{shifts.price * shift.totalHours} dkk</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default EmployeeShiftsTable;
