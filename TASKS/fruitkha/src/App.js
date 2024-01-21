import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import Routing from './Routing';

function App() {
  return (  
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routing/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

