import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/signin' element={<Signin/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
</Routes>
</BrowserRouter>
    
</>
  );
}

export default App;
