
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/Textform";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import AboutUs from "./Components/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    } ,1500)
    

  }
  
  

  const toogle = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("dark mode has enabled","success");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      showAlert("light mode has enabled","success");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
     
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={mode} toogle={toogle}></Navbar>
        <div style={{height:'50px'}}><Alert alert={alert}></Alert></div>
        
        <div className="container">
        <Routes>
          
          <Route path="/" element={<TextForm title="enter text" mode={mode} alert={alert} showAlert={showAlert}/>}/>
          <Route path="/aboutus" element={<AboutUs mode={mode}/>}/>
        
        
      </Routes>
        </div>
        
      </Router>
      
      
    </>
  );
}

export default App;
