import React, { useState } from "react";
import "./doctors.css";
import AddModal from "../AddModal";

function DoctorCard({ doctor, openModal }) {
  return (
    <div className="anaDiv" onClick={openModal}>
      <div className="imgCon">
        <img src={doctor.img} alt={doctor.name} />
        <div className="info">
          <p>{doctor.name}</p>
          <p>{doctor.dep}</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
