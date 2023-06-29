import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Originalproduct from './components/Originalproduct';
import Selectparts from './components/Selectparts';
import { useSelector } from "react-redux";
import Build from './components/Build';
function App() {
  const cartItems= useSelector((state)=> state.cart.partsList)
  console.log("these are cart items"+JSON.stringify(cartItems))
  return (
        <>
        <div className='mobile'>THIS APP ONLY WORKS PN DESKTOP</div>
        <div className="App">
            <Routes>
              <Route path='/' element={<Originalproduct/>}/>
              <Route path='/selectparts' element={<Selectparts/>}/>
              <Route path='/build' element={<Build/>}/>
            </Routes>
        </div>
        </>
  );
}

export default App;
