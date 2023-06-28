import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Originalproduct from './components/Originalproduct';
import Selectparts from './components/Selectparts';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Originalproduct/>}/>
          <Route path='/selectparts' element={<Selectparts/>}/>
        </Routes>
    </div>
  );
}

export default App;
