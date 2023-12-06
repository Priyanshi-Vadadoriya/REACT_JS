import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Emplisting from './Emplisting';
import 'bootstrap/dist/css/bootstrap.min.css';
import Empcreate from './Empcreate';
import EmpView from './EmpView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Emplisting/>}></Route>
        <Route path='/create' element={<Empcreate/>}></Route>
        <Route path='/employee/view/:empId' element={<EmpView/>}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}


export default App;
