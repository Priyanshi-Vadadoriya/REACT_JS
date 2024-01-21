import React, { Suspense, createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './Loader';

const Home = React.lazy(() => import('./Home'));
const CheckOut = React.lazy(() => import('./CheckOut'));
const SingleNews = React.lazy(() => import('./SingleNews'));
const SingleProduct = React.lazy(() => import('./SingleProduct'));
const About = React.lazy(() => import('./About'));
const News = React.lazy(() => import('./News'));
const Shop = React.lazy(() => import('./Shop'));
const Contact = React.lazy(() => import('./Contact'));
const Cart = React.lazy(() => import('./Cart'));
const Search = React.lazy(() => import('./Search'));
const Signup = React.lazy(() => import('./Signup'));
const Signin = React.lazy(() => import('./Signin'));
const Logout = React.lazy(() => import('./Logout'));


export const control = createContext();
export const user = createContext();


function App() {

  const [isLoggedIn,setLoggedIn] = useState(false)
  const [LoginUser,setLoginUser] = useState("Guest")


  return (  
    <div className="App">
      <control.Provider value={{isLoggedIn,setLoggedIn}}>
        <user.Provider value={{LoginUser,setLoginUser}}>

      <BrowserRouter>
        <Suspense fallback={<Loader/>}>
          
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/check-out" element={<CheckOut />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/single-news" element={<SingleNews/>} />
              <Route path="/single-product/:productId" element={<SingleProduct/>} />
              <Route path="/search" element={<Search/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/signin" element={<Signin/>} />
              <Route path="/logout" element={<Logout/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      </user.Provider>
      </control.Provider>

    </div>
  );                    
}

export default App;






