import React, { useState , useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InitialScreen from "../components/InitialScreen/InitialScreen";
import FinalScreen from "../components/FinalScreen/FinalScreen";

const AppRoutes = () => {
  const [weight, setWeight]= useState('')
  const [height, setHeight]= useState('')
  const [warning, setWarning]= useState('')
  const [IMC, setIMC]=useState(0)



  useEffect(() => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedIMC = weight / (heightInMeters * heightInMeters);
      setIMC(calculatedIMC.toFixed(2));
    }
  }, [weight, height]);

  useEffect(()=>{
    if(IMC <= 18.50 ){
      setWarning("abaixo do peso ideal.")
    }else if(IMC <= 24.99){
      setWarning("no peso ideal.")
    }else if(IMC <= 29.99){
      setWarning("com sobrepeso.")
    }else if(IMC <= 34.99){
      setWarning("obesidade 1° grau.")
    }else if(IMC <= 39.99){
      setWarning("obesidade 2° grau.")
    }else{
      setWarning("obesidade 3° grau.")
    }
  },[IMC])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialScreen weight={weight} height={height} setHeight={setHeight} setWeight={setWeight}/>} />
        <Route path="/result" element={<FinalScreen IMC={IMC} warning={warning} />}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;