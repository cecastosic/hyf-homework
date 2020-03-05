import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./../App";
import SearchEmployee from "./SearchEmployee";
import EmployeeSearchTable from "./EmployeeShiftsTable";
import firebaseInst from "./../helpers/firebase";

export default function Shifts() {
  const { userUid, userType } = useContext(UserContext);

  const price = 100;
  const [shiftsList, setShiftsList] = useState([]);
  const [employeeName, setEmployeeName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [message, setMessage] = useState("");
  const [searchName, setSearchName] = useState("");

  let filteredShiftsList = shiftsList;
  if (searchName) {
    filteredShiftsList = shiftsList.filter(shift =>
      shift.employeeName.toLowerCase().includes(searchName)
    );
  }

  const date = new Date().toLocaleDateString();
  let totalHours = 0;
  if (startTime && endTime) {
    const hours = parseInt(endTime.slice(0, 2) - startTime.slice(0, 2));
    const minutes = parseInt(endTime.slice(2, 4) - startTime.slice(2, 4));
    if (minutes !== 0) totalHours = hours + 1;
    else totalHours = hours;
  }

  const handleSubmit = async event => {
    event.preventDefault();
    if (employeeName && startTime && endTime) {
      const token = await firebaseInst.getAuth().currentUser.getIdToken();
      const header = {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      };
      fetch("http://localhost:5000/api/shifts", {
        method: "POST",
        headers: header,
        body: JSON.stringify({
          employeeName,
          date,
          startTime,
          endTime,
          totalHours
        })
      })
        .then(res => res.json())
        .then(res => setMessage(res.message))
        .catch(error => setMessage(error));
    }
    fetchShifts();
  };

  const fetchShifts = async () => {
    const token = await firebaseInst.getAuth().currentUser.getIdToken();
    const header = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    };
    const shifts = await fetch("http://localhost:5000/api/shifts", {
      method: "GET",
      headers: header
    })
      .then(data => data.json())
      .catch(error => console.log(error));

    setShiftsList(shifts);
  };

  useEffect(() => {
    if (userUid) fetchShifts(userUid);
  }, [userUid]);

  useEffect(() => {
    setTimeout(() => {
      if (message) setMessage("");
    }, 5000);
  }, [message]);

  return (
    <section className="shifts">
      <div>
        {/* As a employee i would like to submit my shift. The shift should include
        Employee name, Start time, End time */}
        {userUid && userType === "employee" && (
          <form>
            <h2>Add shift</h2>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={employeeName}
              onChange={event => setEmployeeName(event.target.value)}
            />
            <p>
              <span>Start time</span>
              <span>End time</span>
            </p>
            <label htmlFor="start-time">Start time</label>
            <input
              className="time"
              type="time"
              name="start-time"
              max={`${new Date().getHours() - 1}:00`}
              value={startTime}
              onChange={event => setStartTime(event.target.value)}
            />
            <label htmlFor="end-time">End time</label>
            <input
              className="time"
              type="time"
              name="end-time"
              max={`${new Date().getHours()}:00`}
              value={endTime}
              onChange={event => setEndTime(event.target.value)}
            />
            <button onClick={event => handleSubmit(event)}>Submit</button>
          </form>
        )}
        {message && <p className="message">{message}</p>}
        {userUid && userType === "employer" && (
          <SearchEmployee shifts={{ setSearchName }} />
        )}
        {userUid && filteredShiftsList && filteredShiftsList.length > 0 && (
          <EmployeeSearchTable
            shifts={{ shiftsList: filteredShiftsList, price, userUid }}
          />
        )}
      </div>
    </section>
  );
}
