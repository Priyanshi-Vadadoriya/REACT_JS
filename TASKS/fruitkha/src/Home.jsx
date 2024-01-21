import React from 'react'
import { Link } from 'react-router-dom'
import Slider1 from './Slider1'
import Slider2 from './Slider2'
import Slider3 from './Slider3'

function Home() {
  return (
    <div>
	    {/* hero area */}
        <Slider1/>
        {/* end hero area */}


        {/* features list section*/}
        <div class="list-section pt-80 pb-80">
            <div class="container">

                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div class="list-box d-flex justify-content-center align-items-center">
                            <div class="list-icon">
                                <i class="fas fa-shipping-fast"></i>
                            </div>
                            <div class="content">
                                <h3 className='fw-bold'>Free Shipping</h3>
                                <p>When order over $75</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div class="list-box d-flex justify-content-center align-items-center">
                            <div class="list-icon">
                                <i class="fas fa-phone-volume"></i>
                            </div>
                            <div class="content">
                                <h3 className='fw-bold'>24/7 Support</h3>
                                <p>Get support all day &nbsp; &nbsp; </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="list-box d-flex justify-content-center align-items-center">
                            <div class="list-icon">
                                <i class="fas fa-sync"></i>
                            </div>
                            <div class="content">
                                <h3 className='fw-bold' >Refund</h3>
                                <p>Get refund  3 days! &nbsp;&nbsp; &nbsp;  </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
	    {/* end features list section */}


        {/* product section*/}
        <div class="product-section mt-150 mb-150">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2 text-center">
                        <div class="section-title">
                            <h3 className='fw-bold'><span class="orange-text">Our</span> Products</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6 text-center">
                        <div class="single-product-item">
                            <div class="product-image">
                                <Link to='/single-product'><a href="#"><img src="assets/img/products/product-img-1.jpg" alt=""/></a></Link>
                            </div>
                            <h3>Strawberry</h3>
                            <p class="product-price"><span>Per Kg</span> 85$ </p>
                            <Link to='/cart'><a href="#" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a></Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 text-center">
                        <div class="single-product-item">
                            <div class="product-image">
                                <Link to='/single-product'><a href="#"><img src="assets/img/products/product-img-2.jpg" alt=""/></a></Link>
                            </div>
                            <h3>Berry</h3>
                            <p class="product-price"><span>Per Kg</span> 70$ </p>
                            <Link to='/cart'><a href="#" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a></Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
                        <div class="single-product-item">
                            <div class="product-image">
                                <Link to='/single-product'><a href="#"><img src="assets/img/products/product-img-3.jpg" alt=""/></a></Link>
                            </div>
                            <h3>Lemon</h3>
                            <p class="product-price"><span>Per Kg</span> 35$ </p>
                            <Link to='/cart'><a href="#" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* end product section */}


        {/* cart banner section */}
        <section class="cart-banner pt-100 pb-100">
            <div class="container">
                <div class="row clearfix">

                    <div class="image-column col-lg-6">
                        <div class="image">
                            <div class="price-box">
                                <div class="inner-price">
                                    <span class="price">
                                        <strong>30%</strong> <br/> off per kg
                                    </span>
                                </div>
                            </div>
                            <img src="assets/img/a.jpg" alt=""/>
                        </div>
                    </div>

                    <div class="content-column col-lg-6 text-start">
                        <h3 className='fw-bold'><span class="orange-text">Deal</span> of the month</h3>
                        <h4>Hikan Strwaberry</h4>
                        <div class="text">Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant</div>

                        <div class="time-counter">
                            <div class="time-countdown clearfix" data-countdown="2020/2/01">
                                <div class="counter-column me-1">
                                    <div class="inner"><span class="count">00</span>Days</div>
                                </div>
                                <div class="counter-column me-1">
                                    <div class="inner"><span class="count">00</span>Hours</div>
                                </div>
                                <div class="counter-column me-1">
                                    <div class="inner"><span class="count">00</span>Mins</div>
                                </div>
                                <div class="counter-column">
                                    <div class="inner"><span class="count">00</span>Secs</div>
                                </div>
                            </div>
                        </div>
                        <Link to='/cart'><a href="#" class="cart-btn mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a></Link>
                    </div>
                </div>
            </div>
        </section>
        {/* end cart banner section */}


        {/* testimonail-section */}
        <Slider2/>
    	{/* end testimonail-section */}


        {/* advertisement section */}
        <div class="abt-section mb-150">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="abt-bg">
                            <a href="https://www.youtube.com/watch?v=-pkYgtk6gr8" class="video-play-btn popup-youtube"><i class="fas fa-play"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 text-start">
                        <div class="abt-text">
                            <p class="top-sub">Since Year 1999</p>
                            <h2 className='fw-bold'>We are <span class="orange-text">Fruitkha</span></h2>
                            <p>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.</p>
                            <Link to='/about'><a href="#" class="boxed-btn mt-4">know more</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* end advertisement section */}


        {/* shop banner */}
        <section class="shop-banner text-start" >
            <div class="container">
                <h3 className='fw-bold'>December sale is on! <br/> with big <span class="orange-text">Discount...</span></h3>
                <div class="sale-percent"><span>Sale! <br/> Upto</span>50% <span>off</span></div>
                <Link to='/shop'><a href="#" class="cart-btn btn-lg">Shop Now</a></Link>
            </div>
        </section>
        {/* end shop banner */}


        {/* latest news */}
        <div class="latest-news pt-150 pb-150">
            <div class="container">

                <div class="row">
                    <div class="col-lg-8 offset-lg-2 text-center">
                        <div class="section-title">
                            <h3 className='fw-bold'><span class="orange-text">Our</span> News</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                        </div>
                    </div>
                </div>

                <div class="row text-start">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-latest-news">
                            <Link to='/single-news'><a href="#">
                                <div class="latest-news-bg news-bg-1"></div>
                            </a></Link>
                            <div class="news-text-box">
                                <h3><a href="#">You will vainly look for fruit on it in autumn.</a></h3>
                                <p class="blog-meta">
                                    <span class="author"><i class="fas fa-user"></i> Admin</span>
                                    <span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
                                </p>
                                <p class="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                                <Link to='/single-news'><a href="#" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-latest-news">
                            <Link to='/single-news'><a href="#">
                                <div class="latest-news-bg news-bg-2"></div>
                            </a></Link>
                            <div class="news-text-box">
                                <h3><a href="#">A man's worth has its season, like tomato.</a></h3>
                                <p class="blog-meta">
                                    <span class="author"><i class="fas fa-user"></i> Admin</span>
                                    <span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
                                </p>
                                <p class="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                                <Link to='/single-news'><a href="#" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div class="single-latest-news">
                            <Link to='/single-news'><a href="#">
                                <div class="latest-news-bg news-bg-3"></div>
                            </a></Link>
                            <div class="news-text-box">
                                <h3><a href="#">Good thoughts bear good fresh juicy fruit.</a></h3>
                                <p class="blog-meta">
                                    <span class="author"><i class="fas fa-user"></i> Admin</span>
                                    <span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
                                </p>
                                <p class="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                                <Link to='/single-news'><a href="#" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <Link to='/news'><a href="#" class="boxed-btn">More News</a></Link>
                    </div>
                </div>
            </div>
        </div>
        {/* end latest news */}
       

        {/* logo carousel */}
        <Slider3/>
        {/* end logo carousel */}

    </div>  
  )
}

export default Home;

