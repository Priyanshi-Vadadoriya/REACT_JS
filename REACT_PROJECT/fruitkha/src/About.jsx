import React from 'react'
import { Link } from 'react-router-dom'
import Slider2 from './Slider2'
import Slider3 from './Slider3'
import Header from './Header'
import Footer from './Footer'

function About() {
  return (
    <div>
        {/* header start */}
        <Header/>
        {/* header end */}

		{/* breadcrumb-section  */}
		<div className="breadcrumb-section breadcrumb-bg">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 text-center">
						<div className="breadcrumb-text">
							<p>We sale fresh fruits</p>
							<h1>About Us</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	 	{/* end breadcrumb section  */}

	 	{/* featured section  */}
		<div className="feature-bg">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="featured-text">
							<h2 className="pb-3 fw-bold text-start fs-1">Why <span className="orange-text">Fruitkha</span></h2>
							<div className="row text-start">
								<div className="col-lg-6 col-md-6 mb-4 mb-md-5">
									<div className="list-box d-flex">
										<div className="list-icon">
											<i className="fas fa-shipping-fast"></i>
										</div>
										<div className="content">
											<h3 className='fw-bold'>Home Delivery</h3>
											<p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 mb-5 mb-md-5">
									<div className="list-box d-flex">
										<div className="list-icon">
											<i className="fas fa-money-bill-alt"></i>
										</div>
										<div className="content">
											<h3 className='fw-bold'>Best Price</h3>
											<p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 mb-5 mb-md-5">
									<div className="list-box d-flex">
										<div className="list-icon">
											<i className="fas fa-briefcase"></i>
										</div>
										<div className="content">
											<h3 className='fw-bold'>Custom Box</h3>
											<p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6">
									<div className="list-box d-flex">
										<div className="list-icon">
											<i className="fas fa-sync-alt"></i>
										</div>
										<div className="content">
											<h3 className='fw-bold'>Quick Refund</h3>
											<p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	 	{/* end featured section  */}

	 	{/* shop banner  */}
		<section className="shop-banner">
    		<div className="container text-start">
        		<h3 className='fw-bold'>December sale is on! <br/> with big <span className="orange-text">Discount...</span></h3>
            	<div className="sale-percent"><span>Sale! <br/> Upto</span>50% <span>off</span></div>
            	<Link to='/shop' className="cart-btn btn-lg">Shop Now</Link>
        	</div>
    	</section>
	 	{/* end shop banner  */}

	 	{/* team section  */}
		<div className="mt-150">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 text-center">
						<div className="section-title">
							<h3 className='fw-bold'>Our <span className="orange-text">Team</span></h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="single-team-item">
							<div className="team-bg team-bg-1"></div>
							<h4>Jimmy Doe <span>Farmer</span></h4>
							<ul className="social-link-team">
								<li><Link to='/'><i className="fab fa-facebook-f"></i></Link></li>
								<li><Link to='/'><i className="fab fa-twitter"></i></Link></li>
								<li><Link to='/'><i className="fab fa-instagram"></i></Link></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-team-item">
							<div className="team-bg team-bg-2"></div>
							<h4>Marry Doe <span>Farmer</span></h4>
							<ul className="social-link-team">
							<li><Link to='/'><i className="fab fa-facebook-f"></i></Link></li>
								<li><Link to='/'><i className="fab fa-twitter"></i></Link></li>
								<li><Link to='/'><i className="fab fa-instagram"></i></Link></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
						<div className="single-team-item">
							<div className="team-bg team-bg-3"></div>
							<h4>Simon Joe <span>Farmer</span></h4>
							<ul className="social-link-team">
							<li><Link to='/'><i className="fab fa-facebook-f"></i></Link></li>
								<li><Link to='/'><i className="fab fa-twitter"></i></Link></li>
								<li><Link to='/'><i className="fab fa-instagram"></i></Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	 	{/* end team section  */}

	 	{/* testimonail-section  */}
    	<Slider2/>
	 	{/* end testimonail-section  */}

	 	{/* logo carousel  */}
		<Slider3/>
	 	{/* end logo carousel  */}

        {/* footer start */}
        <Footer/>
        {/* footer end */}
		
    </div>
  )
}

export default About
