import React from 'react'
import { Link } from 'react-router-dom'
import Slider1 from './Slider1'
import Slider2 from './Slider2'
import Slider3 from './Slider3'
import Header from './Header'
import Footer from './Footer'

function Home() {
   
  return (
    <div>
        {/* header start */}
        <Header/>
        {/* header end */}


	    {/* hero area */}
        <Slider1/>
        {/* end hero area */}
   
    
        {/* features list section*/}
        <div className="list-section pt-80 pb-80">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="list-box d-flex justify-content-center align-items-center">
                            <div className="list-icon">
                                <i className="fas fa-shipping-fast"></i>
                            </div>
                            <div className="content">
                                <h3 className='fw-bold'>Free Shipping</h3>
                                <p>When order over $75</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="list-box d-flex justify-content-center align-items-center">
                            <div className="list-icon">
                                <i className="fas fa-phone-volume"></i>
                            </div>
                            <div className="content">
                                <h3 className='fw-bold'>24/7 Support</h3>
                                <p>Get support all day &nbsp; &nbsp; </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="list-box d-flex justify-content-center align-items-center">
                            <div className="list-icon">
                                <i className="fas fa-sync"></i>
                            </div>
                            <div className="content">
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
        <div className="product-section mt-150 mb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">
                            <h3 className='fw-bold'><span className="orange-text">Our</span> Products</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 text-center wrapper">
                        <div className="single-product-item">
                            <div className="product-image">
                                <Link to='/single-product'><img src="assets/img/products/product-img-1.jpg" alt=""/></Link>
                            </div>
                            <h3>Strawberry</h3>
                            <p className="product-price"><span>Per Kg</span> 85$ </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center wrapper">
                        <div className="single-product-item">
                            <div className="product-image">
                                <Link to='/single-product'><img src="assets/img/products/product-img-2.jpg" alt=""/></Link>
                            </div>
                            <h3>Berry</h3>
                            <p className="product-price"><span>Per Kg</span> 70$ </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center wrapper">
                        <div className="single-product-item">
                            <div className="product-image">
                                <Link to='/single-product'><img src="assets/img/products/product-img-3.jpg" alt=""/></Link>
                            </div>
                            <h3>Sweet Lime</h3>
                            <p className="product-price"><span>Per Kg</span> 35$ </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* end product section */}


        {/* cart banner section */}
        <section className="cart-banner pt-100 pb-100">
            <div className="container">
                <div className="row clearfix">

                    <div className="image-column col-lg-6">
                        <div className="image">
                            <div className="price-box">
                                <div className="inner-price">
                                    <span className="price">
                                        <strong>30%</strong> <br/> off per kg
                                    </span>
                                </div>
                            </div>
                            <img src="assets/img/a.jpg" alt=""/>
                        </div>
                    </div>

                    <div className="content-column col-lg-6 text-start">
                        <h3 className='fw-bold'><span className="orange-text">Deal</span> of the month</h3>
                        <h4>Hikan Strwaberry</h4>
                        <div className="text">Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant</div>

                        <div className="time-counter">
                            <div className="time-countdown clearfix" data-countdown="2020/2/01">
                                <div className="counter-column me-1">
                                    <div className="inner"><span className="count">00</span>Days</div>
                                </div>
                                <div className="counter-column me-1">
                                    <div className="inner"><span className="count">00</span>Hours</div>
                                </div>
                                <div className="counter-column me-1">
                                    <div className="inner"><span className="count">00</span>Mins</div>
                                </div>
                                <div className="counter-column">
                                    <div className="inner"><span className="count">00</span>Secs</div>
                                </div>
                            </div>
                        </div>
                        <Link to='/cart' className="cart-btn mt-3"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
                    </div>
                </div>
            </div>
        </section>
        {/* end cart banner section */}


        {/* testimonail-section */}
        <Slider2/>
    	{/* end testimonail-section */}


        {/* advertisement section */}
        <div className="abt-section mb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="abt-bg">
                            <Link to="https://www.youtube.com/watch?v=-pkYgtk6gr8" className="video-play-btn popup-youtube"><i className="fas fa-play"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 text-start">
                        <div className="abt-text">
                            <p className="top-sub">Since Year 1999</p>
                            <h2 className='fw-bold'>We are <span className="orange-text">Fruitkha</span></h2>
                            <p>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.</p>
                            <Link to='/about' className="boxed-btn mt-4">know more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* end advertisement section */}


        {/* shop banner */}
        <section className="shop-banner text-start" >
            <div className="container">
                <h3 className='fw-bold'>December sale is on! <br/> with big <span className="orange-text">Discount...</span></h3>
                <div className="sale-percent"><span>Sale! <br/> Upto</span>50% <span>off</span></div>
                <Link to='/shop' className="cart-btn btn-lg">Shop Now</Link>
            </div>
        </section>
        {/* end shop banner */}


        {/* latest news */}
        <div className="latest-news pt-150 pb-150">
            <div className="container">

                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">
                            <h3 className='fw-bold'><span className="orange-text">Our</span> News</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                        </div>
                    </div>
                </div>

                <div className="row text-start">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-latest-news">
                            <Link to='/single-news'>
                                <div className="latest-news-bg news-bg-1"></div>
                            </Link>
                            <div className="news-text-box">
                                <h3><a href="#">You will vainly look for fruit on it in autumn.</a></h3>
                                <p className="blog-meta">
                                    <span className="author"><i className="fas fa-user"></i> Admin</span>
                                    <span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
                                </p>
                                <p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                                <Link to='/single-news' className="read-more-btn">read more <i className="fas fa-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-latest-news">
                            <Link to='/single-news'>
                                <div className="latest-news-bg news-bg-2"></div>
                            </Link>
                            <div className="news-text-box">
                                <h3><a href="#">A man's worth has its season, like tomato.</a></h3>
                                <p className="blog-meta">
                                    <span className="author"><i className="fas fa-user"></i> Admin</span>
                                    <span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
                                </p>
                                <p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                                <Link to='/single-news' className="read-more-btn">read more <i className="fas fa-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div className="single-latest-news">
                            <Link to='/single-news'>
                                <div className="latest-news-bg news-bg-3"></div>
                            </Link>
                            <div className="news-text-box">
                                <h3><a href="#">Good thoughts bear good fresh juicy fruit.</a></h3>
                                <p className="blog-meta">
                                    <span className="author"><i className="fas fa-user"></i> Admin</span>
                                    <span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
                                </p>
                                <p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                                <Link to='/single-news' className="read-more-btn">read more <i className="fas fa-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <Link to='/news' className="boxed-btn">More News</Link>
                    </div>
                </div>
            </div>
        </div>
        {/* end latest news */}
       

        {/* logo carousel */}
        <Slider3/>
        {/* end logo carousel */}

        {/* footer start */}
        <Footer/>
        {/* footer end */}

    </div>  
  )
}

export default Home;

