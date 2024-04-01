import React, { useState } from "react";
import { appointmentData } from "../helper/data";
import "../App.css";
import AddModal from "./AddModal"

function AppointmentList({date, name}) {
  const [showApp, setShowApp] = useState(appointmentData);
  const [showConst,setShowConst]=useState(appointmentData);
  const [newapp,setnewApp]=useState({
   
  });

  const handleClose = (id) => {
    setShowApp(showApp.filter((app) => app.id !== id));
  };

  const handleConst=(id)=>{
    //e.target ile bak
   const deneme=(showConst.map((app)=>
    app.id===id ?{...app, consulted:!app.consulted}:app))
    setShowConst(deneme)
    console.log(deneme);

   


   

  }
  return (
    <div>
      {showApp.map((app) =>        
          <div className="appCon" key={app.id} onDoubleClick={()=>handleConst(app.id)}>
            <p>{app.patient || name}</p> <p>{app.day.toLocaleDateString() || date}</p>
            <p>{app.doctor}</p>
            <p style={{ cursor: "pointer" }} onClick={()=>handleClose(app.id)}>✖️</p>
            <div className="abs">
              {app.consulted && 
                <p>CONSULTED</p>
              }
            </div>
          </div>
      )}
         {!(showApp.length) && (
          <div>
            <h2 style={{ color: "#E9335B" }}>AppointmentList</h2>
            <div className="appimg">
              <img src="img/appointment.jpg" alt="" width="750px" />
            </div>
          </div>
        )}        
      </div>
  );
         }

export default AppointmentList;
