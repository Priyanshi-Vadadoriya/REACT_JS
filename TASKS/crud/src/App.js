import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EmpListing from './EmpListing';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
