import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider3 from './Slider3'
import Header from './Header'
import Footer from './Footer'

function SingleProduct() {
	const [product,setProduct] = useState("");
	const { productId } = useParams();
	console.log(product)

	useEffect(()=>{
		fetch(`http://localhost:7000/fruits/${productId}`)
		.then((res)=>{return res.json()})
		.then((data)=>{setProduct(data)})
		.catch((err)=>{console.log(err.message)})
	})

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
							<p>See more Details</p>
							<h1>Single Product</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* end breadcrumb section  */}
      

		{/* single product  */}
		<div className="single-product mt-150 mb-150 text-start">
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<div className="single-product-img">
							<img src={product.image} alt=""/>
						</div>
					</div>
					<div className="col-md-7">
						<div className="single-product-content">
							<h3>{product.name}</h3>
							<p className="single-product-pricing"><span className='my-4'>Per Kg</span> 	&#8377;{product.price}</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint dignissimos, rem commodi cum voluptatem quae reprehenderit repudiandae ea tempora incidunt ipsa, quisquam animi perferendis eos eum modi! Tempora, earum.</p>
							<div className="single-product-form">
								<Link to='/cart' className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
								<p><strong>Categories: </strong>Fruits, Organic</p>
							</div>
							<h4 className='mb-3'>Share:</h4>
							<ul className="product-share">
								<li><Link to='/'><i className="fab fa-facebook-f"></i></Link></li>
								<li><Link to='/'><i className="fab fa-twitter"></i></Link></li>
								<li><Link to='/'><i className="fab fa-google-plus-g"></i></Link></li>
								<li><Link to='/'><i className="fab fa-linkedin"></i></Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* end single product  */}


		{/* more products  */}
		<div className="more-products mb-150">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 text-center">
						<div className="section-title">	
							<h3 className='fw-bold'><span className="orange-text">Related</span> Products</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 text-center">
						<div className="single-product-item">
							<div className="product-image">
								<Link to='/single-product'><img src="assets/img/products/product-img-1.jpg" alt=""/></Link>
							</div>
							<h3>Strawberry</h3>
							<p className="product-price"><span>Per Kg</span> 85$ </p>
							<Link to='/cart' className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 text-center">
						<div className="single-product-item">
							<div className="product-image">
								<Link to='/single-product'><img src="assets/img/products/product-img-2.jpg" alt=""/></Link>
							</div>
							<h3>Berry</h3>
							<p className="product-price"><span>Per Kg</span> 70$ </p>
							<Link to='/cart' className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3 text-center">
						<div className="single-product-item">
							<div className="product-image">
								<Link to='/single-product'><img src="assets/img/products/product-img-3.jpg" alt=""/></Link>
							</div>
							<h3>Lemon</h3>
							<p className="product-price"><span>Per Kg</span> 35$ </p>
							<Link to='/cart' className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* end more products */}

		{/* logo carousel  */}
		<Slider3/>
		{/* end logo carousel  */}

        {/* footer start */}
        <Footer/>
        {/* footer end */}

    </div>
  )
}

export default SingleProduct
