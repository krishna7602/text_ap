import "./App.css";
import About from "./components/About";
import Alerts from "./components/Alerts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

function App() {
  const [alert, setalert] = useState(null);

  const alerttoggle = (message, type) => {
    setalert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  const [mode, setmode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#041E42";
      alerttoggle("dark mode has been enabled", "sucess");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      alerttoggle("light mode has been enabled", "sucess");
    }
  };

  return (
    <>
      
      
        <Navbar
          title="TextApp"
          about="About"
          mode={mode}
          togglemode={togglemode}
        />

        <Alerts alert={alert} />
        <Home mode={mode} />
        <About mode={mode} />
        
        
    </>
  );
}

export default App;
