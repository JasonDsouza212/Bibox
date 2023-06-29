import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Originalproduct from './components/Originalproduct';
import Selectparts from './components/Selectparts';
import { useSelector } from "react-redux";
import Build from './components/Build';
import Finalprod from './components/Finalprod';
import React, { useState, createContext } from 'react';
import Notfound from './components/Notfound';

export const PartContext = createContext();

function App() {
  const [finalprods, setFinalprods] = useState([]);
  const cartItems = useSelector((state) => state.cart.partsList);
  console.log("these are cart items" + JSON.stringify(cartItems));
  
  return (
    <>
      <div className='mobile'>THIS APP ONLY WORKS ON DESKTOP</div>
      <PartContext.Provider value={{ finalprods, setFinalprods }}>
        <div className="App">
        <Routes>
          <Route path="/" element={<Originalproduct />} />
          <Route path="/selectparts" element={<Selectparts />} />
          <Route path="/build" element={<Build />} />
          {finalprods.length !== 0 && (
            <Route path="/final" element={<Finalprod />} />
          )}
          <Route path="*" element={<Notfound />} />
        </Routes>

        </div>
      </PartContext.Provider>
    </>
  );
}

export default App;
