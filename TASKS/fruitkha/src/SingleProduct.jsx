import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Slider3 from './Slider3'

function SingleProduct() {
  return (
    <div>

		{/* breadcrumb-section  */}
		<div class="breadcrumb-section breadcrumb-bg">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 text-center">
						<div class="breadcrumb-text">
							<p>See more Details</p>
							<h1>Single Product</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* end breadcrumb section  */}
      

		{/* single product  */}
		<div class="single-product mt-150 mb-150 text-start">
			<div class="container">
				<div class="row">
					<div class="col-md-5">
						<div class="single-product-img">
							<img src="assets/img/products/product-img-5.jpg" alt=""/>
						</div>
					</div>
					<div class="col-md-7">
						<div class="single-product-content">
							<h3>Green apples have polyphenols</h3>
							<p class="single-product-pricing"><span className='my-4'>Per Kg</span> $50</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint dignissimos, rem commodi cum voluptatem quae reprehenderit repudiandae ea tempora incidunt ipsa, quisquam animi perferendis eos eum modi! Tempora, earum.</p>
							<div class="single-product-form">
								<form action="">
									<input type="number" placeholder="0"/>
								</form>
								<Link to='/cart'><a href="#" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a></Link>
								<p><strong>Categories: </strong>Fruits, Organic</p>
							</div>
							<h4 className='mb-3'>Share:</h4>
							<ul class="product-share">
								<li><a href=""><i class="fab fa-facebook-f"></i></a></li>
								<li><a href=""><i class="fab fa-twitter"></i></a></li>
								<li><a href=""><i class="fab fa-google-plus-g"></i></a></li>
								<li><a href=""><i class="fab fa-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* end single product  */}


		{/* more products  */}
		<div class="more-products mb-150">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 text-center">
						<div class="section-title">	
							<h3 className='fw-bold'><span class="orange-text">Related</span> Products</h3>
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
					<div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3 text-center">
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
		{/* end more products */}

		{/* logo carousel  */}
		<Slider3/>
		{/* end logo carousel  */}

    </div>
  )
}

export default SingleProduct
