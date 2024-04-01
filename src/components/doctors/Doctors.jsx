import React from "react";
import { doctorData } from "../../helper/data";
import DoctorCard from "./DoctorCard";
import "./doctors.css"
import AddModal from "../AddModal";
import { useState } from "react";

function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(selectedDoctor)
  };
  return (
    <div>
      {isModalOpen && <AddModal doctor={selectedDoctor} closeModal={closeModal}/>}
    <div className="gridCon">
      {doctorData.map((doctor) => (
        <DoctorCard doctor={doctor} key={doctor.id} openModal={()=>openModal(doctor)} />
      ))}
    </div>
    </div>
  );
}

export default Doctors;
