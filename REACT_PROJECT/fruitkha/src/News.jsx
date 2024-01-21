import React from 'react';
import { Link } from 'react-router-dom';
import Slider3 from './Slider3';
import Header from './Header'
import Footer from './Footer'

function News() {
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
							<p>Organic Information</p>
							<h1>News Article</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* end breadcrumb section  */}


		{/* latest news  */}
		<div className="latest-news mt-150 mb-150 text-start">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="single-latest-news">
							<a href="single-news.html"><div className="latest-news-bg news-bg-1"></div></a>
							<div className="news-text-box">
								<h3><a href="single-news.html">You will vainly look for fruit on it in autumn.</a></h3>
								<p className="blog-meta">
									<span className="author"><i className="fas fa-user"></i> Admin</span>
									<span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
								</p>
								<p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
								<Link to='/single-news' className="read-more-btn">read more <i className="fas fa-angle-right"></i></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-latest-news">
							<a href="single-news.html"><div className="latest-news-bg news-bg-2"></div></a>
							<div className="news-text-box">
								<h3><a href="single-news.html">A man's worth has its season, like tomato.</a></h3>
								<p className="blog-meta">
									<span className="author"><i className="fas fa-user"></i> Admin</span>
									<span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
								</p>
								<p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
								<Link to='/single-news' className="read-more-btn">read more <i className="fas fa-angle-right"></i></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-latest-news">
							<a href="single-news.html"><div className="latest-news-bg news-bg-3"></div></a>
							<div className="news-text-box">
								<h3><a href="single-news.html">Good thoughts bear good fresh juicy fruit.</a></h3>
								<p className="blog-meta">
									<span className="author"><i className="fas fa-user"></i> Admin</span>
									<span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
								</p>
								<p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
								<Link to='/single-news' className="read-more-btn">read more <i className="fas fa-angle-right"></i></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-latest-news">
							<a href="single-news.html"><div className="latest-news-bg news-bg-4"></div></a>
							<div className="news-text-box">
								<h3><a href="single-news.html">Fall in love with the fresh orange</a></h3>
								<p className="blog-meta">
									<span className="author"><i className="fas fa-user"></i> Admin</span>
									<span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
								</p>
								<p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
								<Link to='/single-news' className="read-more-btn">read more <i className="fas fa-angle-right"></i></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-latest-news">
							<a href="single-news.html"><div className="latest-news-bg news-bg-5"></div></a>
							<div className="news-text-box">
								<h3><a href="single-news.html">Why the berries always look delecious</a></h3>
								<p className="blog-meta">
									<span className="author"><i className="fas fa-user"></i> Admin</span>
									<span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
								</p>
								<p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
								<Link to='/single-news' className="read-more-btn">read more <i className="fas fa-angle-right"></i></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-latest-news">
							<a href="single-news.html"><div className="latest-news-bg news-bg-6"></div></a>
							<div className="news-text-box">
								<h3><a href="single-news.html">Love for fruits are genuine of John Doe</a></h3>
								<p className="blog-meta">
									<span className="author"><i className="fas fa-user"></i> Admin</span>
									<span className="date"><i className="fas fa-calendar"></i> 27 December, 2018</span>
								</p>
								<p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
								<Link to='/single-news' className="read-more-btn">read more <i className="fas fa-angle-right"></i></Link>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="container">
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
			</div>
		</div>
		{/* end latest news  */}


		{/* logo carousel  */}
		<Slider3/>
		{/* end logo carousel  */}

        {/* footer start */}
        <Footer/>
        {/* footer end */}
		
    </div>
  );
}

export default News;
