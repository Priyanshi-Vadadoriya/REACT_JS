import React, { useEffect, useState } from 'react'
import Slider3 from './Slider3'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Shop() {

	const [product,setProduct] = useState("");

	useEffect(()=>{
		fetch("http://localhost:8080/fruits")
		.then((res)=>{return res.json()})
		.then((data)=>{setProduct(data)})
		.catch((err)=>{console.log(err.message)})
	})


  return (
    <div>

        {/* header start */}
        <Header/>
        {/* header end */}


		{/* breadcrumb-section */}
		<div className="breadcrumb-section breadcrumb-bg">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 text-center">
						<div className="breadcrumb-text">
							<p>Fresh and Organic</p>
							<h1>Shop</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* end breadcrumb section  */}


		{/* products */}
		<div className="product-section mt-150 mb-150">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="product-filters">
							<ul>
								<li className="active" data-filter="*">All</li>
								<li data-filter=".strawberry">Strawberry</li>
								<li data-filter=".berry">Berry</li>
								<li data-filter=".lemon">Lemon</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="row product-lists">
					{
						product && product.map((item,i)=>(
							<div key={i} className="col-lg-4 col-md-6 text-center strawberry">
							<div className="single-product-item">
								<div className="product-image image">
								<Link to={`/single-product/${item.id}`}><img src={item.image} alt={item.name}/></Link>
								</div>
								<h3>{item.name}</h3>
								<p className="product-price"><span>Per Kg</span>&#8377; {item.price} </p>
								<Link to='/cart' className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
							</div>
						</div>
						))
					}
					
				</div>

				<div className="row">
					<div className="col-lg-12 text-center">
						<div className="pagination-wrap">
							<ul>
								<li><Link to='/'>Prev</Link></li>
								<li><Link to='/'>1</Link></li>
								<li><Link to='/' className="active">2</Link></li>
								<li><Link to='/'>3</Link></li>
								<li><Link to='/'>Next</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* end products  */}


		{/* logo carousel  */}
		<Slider3/>
		{/* end logo carousel  */}

        {/* footer start */}
        <Footer/>
        {/* footer end */}

    </div>
  )
}

export default Shop
