import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./../App";
import firebaseInst from "./../helpers/firebase";

export default function Shifts() {
  const { userUid, userType } = useContext(UserContext);

  const price = 100;
  const [shiftsList, setShiftsList] = useState([]);
  const [employeeName, setEmployeeName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  //const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

  //if (!userId && userUid.trim() !== "") setUserId(userUid);

  const handleSubmit = async event => {
    event.preventDefault();
    if (employeeName && startTime && endTime) {
      const token = await firebaseInst.getAuth().currentUser.getIdToken();
      const header = {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      };
      fetch("http://localhost:5000/shifts", {
        method: "POST",
        headers: header,
        body: JSON.stringify({
          employeeName,
          startTime,
          endTime
        })
      })
        .then(res => res.json())
        .then(res => setMessage(res.message))
        .catch(error => setMessage(error));
    }
  };

  const fetchShifts = async userId => {
    const token = await firebaseInst.getAuth().currentUser.getIdToken();
    const header = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    };
    const shifts = await fetch("http://localhost:5000/shifts", {
      method: "GET",
      headers: header
    })
      .then(data => data.json())
      .catch(error => console.log(error));

    console.log(shifts, userId);
    setShiftsList(shifts);
  };

  useEffect(() => {
    if (userUid) fetchShifts(userUid);
  }, [userUid]);
  return (
    <div class="shifts">
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
          <p><span>Start time</span><span>End time</span></p>
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
      {message && <p class="message">{message}</p>}
      {userUid && shiftsList && shiftsList.length > 0 && (
        <div className="shift-list">
          <h2>Shifts</h2>
          <ul>
            <li>
              <span>Name</span>
              <span>Start time</span>
              <span>End time</span>
              <span>Total number of hours</span>
              <span>Price per hour</span>
            </li>
            {shiftsList.map((shift, id) => {
              return (
                <li key={id}>
                  <span>{shift.employeeName}</span>
                  <span>{shift.startTime}</span>
                  <span>{shift.endTime}</span>
                  <span>
                    {parseInt(shift.endTime) - parseInt(shift.startTime)}
                  </span>
                  <span>{price} dkk </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
