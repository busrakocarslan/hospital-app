import "./App.css";
import AppointmentList from "./components/AppointmentList";
import Doctors from "./components/doctors/Doctors";

function App() {
  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{color:"cadetblue", fontSize:"2rem"}} >CLARUS HOSPİTAL</h1>
      <h3 style={{fontWeight:"lighter"}}>OUR DOCTORS</h3>
      <Doctors />
      <AppointmentList/>
    </div>
  );
}

export default App;
