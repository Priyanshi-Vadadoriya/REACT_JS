import React from 'react';
import { Link } from 'react-router-dom';
import Slider3 from './Slider3';

function News() {
  return (
    <div>

		{/* breadcrumb-section  */}
		<div class="breadcrumb-section breadcrumb-bg">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 text-center">
						<div class="breadcrumb-text">
							<p>Organic Information</p>
							<h1>News Article</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* end breadcrumb section  */}


		{/* latest news  */}
		<div class="latest-news mt-150 mb-150 text-start">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 col-md-6">
						<div class="single-latest-news">
							<a href="single-news.html"><div class="latest-news-bg news-bg-1"></div></a>
							<div class="news-text-box">
								<h3><a href="single-news.html">You will vainly look for fruit on it in autumn.</a></h3>
								<p class="blog-meta">
									<span class="author"><i class="fas fa-user"></i> Admin</span>
									<span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
								</p>
								<p class="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
								<Link to='/single-news'><a href="#" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="single-latest-news">
							<a href="single-news.html"><div class="latest-news-bg news-bg-2"></div></a>
							<div class="news-text-box">
								<h3><a href="single-news.html">A man's worth has its season, like tomato.</a></h3>
								<p class="blog-meta">
									<span class="author"><i class="fas fa-user"></i> Admin</span>
									<span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
								</p>
								<p class="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
								<Link to='/single-news'><a href="#" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="single-latest-news">
							<a href="single-news.html"><div class="latest-news-bg news-bg-3"></div></a>
							<div class="news-text-box">
								<h3><a href="single-news.html">Good thoughts bear good fresh juicy fruit.</a></h3>
								<p class="blog-meta">
									<span class="author"><i class="fas fa-user"></i> Admin</span>
									<span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
								</p>
								<p class="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
								<Link to='/single-news'><a href="#" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="single-latest-news">
							<a href="single-news.html"><div class="latest-news-bg news-bg-4"></div></a>
							<div class="news-text-box">
								<h3><a href="single-news.html">Fall in love with the fresh orange</a></h3>
								<p class="blog-meta">
									<span class="author"><i class="fas fa-user"></i> Admin</span>
									<span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
								</p>
								<p class="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
								<Link to='/single-news'><a href="#" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="single-latest-news">
							<a href="single-news.html"><div class="latest-news-bg news-bg-5"></div></a>
							<div class="news-text-box">
								<h3><a href="single-news.html">Why the berries always look delecious</a></h3>
								<p class="blog-meta">
									<span class="author"><i class="fas fa-user"></i> Admin</span>
									<span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
								</p>
								<p class="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
								<Link to='/single-news'><a href="#" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="single-latest-news">
							<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
							<div class="news-text-box">
								<h3><a href="single-news.html">Love for fruits are genuine of John Doe</a></h3>
								<p class="blog-meta">
									<span class="author"><i class="fas fa-user"></i> Admin</span>
									<span class="date"><i class="fas fa-calendar"></i> 27 December, 2018</span>
								</p>
								<p class="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
								<Link to='/single-news'><a href="#" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="container">
						<div class="row">
							<div class="col-lg-12 text-center">
								<div class="pagination-wrap">
									<ul>
										<li><a href="#">Prev</a></li>
										<li><a href="#">1</a></li>
										<li><a class="active" href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">Next</a></li>
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

    </div>
  );
}

export default News;
