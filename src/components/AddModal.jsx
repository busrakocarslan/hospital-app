import React from "react";
import { appointmentData } from "../helper/data";
import { useState } from "react";
import "../components/doctors/doctors.css";


// import Modal from "./Modal";

function AddModal({ doctor, closeModal,selectedDoctor }) {
  const [name,setName]=useState("")
  const [date,setDate]=useState("")
 

  const handleName=(e)=>{
    setName(e.target.value)
  }

  const handleDate=(e)=>{
    setDate(e.target.value)
  }


  const handleSubmit=(e)=>{
    e.preventDefault()
    setDate("")
    setName("")
    closeModal()
    console.log(`${name} ${date} `);
  }


  const handleClose=()=>{
    closeModal()
  }
  console.log(setName);
  return (
    <div className="modalBackground">
      <div className="modalContent">
        <div className="head">
          <h2>Appointment for {doctor.name}</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Patient Name</label>
          <br />
          <input placeholder="Enter Name" type="text" id="name" value={name} required  onChange={handleName}/>
          <br />
          <label htmlFor="date">Tarih:</label>
          <br />
          <input className="date" type="datetime-local" id="date" value={date}required onChange={handleDate} />
          <br />
          <div className="buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={handleClose}>
            Close
          </button></div>
        </form>
      </div>
    </div>
  );
}

export default AddModal;
