import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [scroll, setScroll] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    backgroundColor: scroll > 1 ? '#051922' : 'transparent',
    transition: 'background-color 0.3s ease-in-out',
  };

  return (
    <div>
      {/* header  */}
      <div class="top-header-area header" style={headerStyle} >
        <div class="container">
          <div class="row">
            <div className="col-md-3">
              {/* logo  */}
              <div class="site-logo">
                <a href="#">
                <img src="assets/img/logo.png" alt=""/>
                </a>
              </div>
              {/* logo */}
            </div>

            <div className="col-md-6">
              {/* menu start  */}
              <nav class="main-menu">
                <ul className='menu'>
                  <li class="current-list-item"><Link to='/'><a href="#">Home</a></Link>
                  </li>
                  
                  <li><Link to='/about'><a href="#">About</a></Link></li>
                  
                  
                  <li><Link to='/news'><a href="#">News</a></Link>

                    <ul class="sub-menu">
                      <li><Link to='/news'><a href="#">News</a></Link></li>
                      <li><Link to='/single-news'><a href="#">Single News</a></Link></li>
                    </ul>

                  </li>

                  <li><Link to='/contact'><a href="#">Contact</a></Link></li>

                  <li><Link to='/shop'><a href="#">Shop</a></Link>

                    <ul class="sub-menu">
                      <li><Link to='/shop'><a href="#">Shop</a></Link></li>
                      <li><Link to='/check-out'><a href="#">Check Out</a></Link></li>
                      <li><Link to='/single-product'><a href="#">Single Product</a></Link></li>
                      <li><Link to='/cart'><a href="#">Cart</a></Link></li>
                    </ul>

                  </li>
                  <li>
                  </li>

                </ul>
              </nav>
              {/* menu end */}
            </div>

            <div className="col-md-3 text-end ">
              <div class="header-icons mt-4">
                
                <Link to='/search' className='cart-icon me-2'><i class="fas fas fa-search"></i></Link>
                <Link to='/cart' className='cart-icon me-2'><i class="fas fa-shopping-cart"></i><span className='cart-count'>0</span></Link>
                <a className='heart-icon me-2' href="#"><i class="fa-regular fa-heart"></i><span className='wishlist'>0</span></a>
                <Link to='/signin' className='login-icon me-2' href="#"><i class="fa-solid fa-user"></i></Link>
              <Link to='/signup' className='sign-up-icon me-2' href="#"><i class="fa-solid fa-user-plus"></i></Link>
              
                <div className='bar'>
                  <a href="#" className='bar-icon'><i class="fas fa-search fs-5"></i></a>
                  <a className='bar-icon text-light fs-3 p-0 px-2 ms-3 ' href="#"><i class="fa-solid fa-bars"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end header  */}
      
    </div>
  )
}

export default Header


