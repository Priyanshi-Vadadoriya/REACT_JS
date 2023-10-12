import React from 'react';
import '../Css/Home.css';


function Home() {

  return (
    <>

    <div className='header'> 
        <div className='header-parts'>
            <div className='header-part1'>

                <div className='booking'>Booking.com</div>

                <div className='state'>
                    <div className='inr'>INR</div>
                    <div className='logo'><img src='https://t-cf.bstatic.com/design-assets/assets/v3.96.0/images-flags/In@3x.png' /></div>
                    <div className='round'> <i class="fa-regular fa-circle-user"></i></div>
                    <div className='property'>List Your property</div>
                    <div className='btn btn1'>Register</div>
                    <div className='btn'>Sign-in</div>
                    <div className='header-logo '><i class="fa-regular fa-circle-user"></i></div>
                    <div className='header-logo header-logo1'><i class="fa-solid fa-bars"></i>  </div>
                </div>
            </div>


            <div className='header-part2'>
                <div className='logo-travelling logo-travelling1'><i class="fa-regular fa-circle-user"></i> stays</div>
                <div className='logo-travelling'><i class="fa-solid fa-plane-departure"></i> Flights</div>
                <div className='logo-travelling'><i class="fa-solid fa-earth-europe"></i>Hotel</div>
                <div className='logo-travelling  logo-travelling2'><i class="fa-solid fa-car"></i>Car rentals</div>


                <div className='logo-travelling logo-travelling-main logo-travelling3'>more<i class="fa-solid fa-chevron-down"></i>

                <div className='buttons'>
                    <div className='logo-travelling'><i class="fa-solid fa-car"></i>Car rentals</div>
                    <div className='logo-travelling'><i class="fa-solid fa-tower-observation "></i>Attraction</div>
                    <div className='logo-travelling'><i class="fa-solid fa-taxi"></i>Airport taxis</div>
                </div>
      
            </div>


            <div className='logo-travelling logo-travelling2'><i class="fa-solid fa-tower-observation "></i>Attraction</div>
            <div className='logo-travelling logo-travelling2'><i class="fa-solid fa-taxi"></i>Airport taxis</div>
            </div>
        </div>

        <div className='contant'>
        <div className='text'>
            <h1>Howzat for a perfect stay</h1>
            <p>Search hotels, homes and much more..</p>
            <button>Discover more</button>
        </div>


        <div className='inputs'>
            <div><input type='location' placeholder='Where are you going?'/></div>
            <div><input type='datetime-local'/></div>
            <div className='inp'><i class="fa-regular fa-circle-user"></i><a href='#'>2 adults . children . 1 room</a>
            </div>
            <button style={{background : "blue"}}>Serch</button>
        </div>

    </div> 
    </div>








    </>
  );
}

export default Home;

