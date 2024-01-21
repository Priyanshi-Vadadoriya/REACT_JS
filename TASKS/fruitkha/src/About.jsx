import React from 'react'
import { Link } from 'react-router-dom'
import Slider2 from './Slider2'
import Slider3 from './Slider3'

function About() {
  return (
    <div>

		{/* breadcrumb-section  */}
		<div class="breadcrumb-section breadcrumb-bg">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 text-center">
						<div class="breadcrumb-text">
							<p>We sale fresh fruits</p>
							<h1>About Us</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	 	{/* end breadcrumb section  */}

	 	{/* featured section  */}
		<div class="feature-bg">
			<div class="container">
				<div class="row">
					<div class="col-lg-7">
						<div class="featured-text">
							<h2 class="pb-3 fw-bold text-start fs-1">Why <span class="orange-text">Fruitkha</span></h2>
							<div class="row text-start">
								<div class="col-lg-6 col-md-6 mb-4 mb-md-5">
									<div class="list-box d-flex">
										<div class="list-icon">
											<i class="fas fa-shipping-fast"></i>
										</div>
										<div class="content">
											<h3 className='fw-bold'>Home Delivery</h3>
											<p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 mb-5 mb-md-5">
									<div class="list-box d-flex">
										<div class="list-icon">
											<i class="fas fa-money-bill-alt"></i>
										</div>
										<div class="content">
											<h3 className='fw-bold'>Best Price</h3>
											<p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 mb-5 mb-md-5">
									<div class="list-box d-flex">
										<div class="list-icon">
											<i class="fas fa-briefcase"></i>
										</div>
										<div class="content">
											<h3 className='fw-bold'>Custom Box</h3>
											<p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="list-box d-flex">
										<div class="list-icon">
											<i class="fas fa-sync-alt"></i>
										</div>
										<div class="content">
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
		<section class="shop-banner">
    		<div class="container text-start">
        		<h3 className='fw-bold'>December sale is on! <br/> with big <span class="orange-text">Discount...</span></h3>
            	<div class="sale-percent"><span>Sale! <br/> Upto</span>50% <span>off</span></div>
            	<Link to='/shop'><a href="#" class="cart-btn btn-lg">Shop Now</a></Link>
        	</div>
    	</section>
	 	{/* end shop banner  */}

	 	{/* team section  */}
		<div class="mt-150">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 text-center">
						<div class="section-title">
							<h3 className='fw-bold'>Our <span class="orange-text">Team</span></h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-md-6">
						<div class="single-team-item">
							<div class="team-bg team-bg-1"></div>
							<h4>Jimmy Doe <span>Farmer</span></h4>
							<ul class="social-link-team">
								<li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
								<li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
								<li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="single-team-item">
							<div class="team-bg team-bg-2"></div>
							<h4>Marry Doe <span>Farmer</span></h4>
							<ul class="social-link-team">
								<li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
								<li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
								<li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
						<div class="single-team-item">
							<div class="team-bg team-bg-3"></div>
							<h4>Simon Joe <span>Farmer</span></h4>
							<ul class="social-link-team">
								<li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
								<li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
								<li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
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

    </div>
  )
}

export default About
