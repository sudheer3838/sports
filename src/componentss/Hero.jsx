import React from 'react'
import heroBannerImage from '../assets/images/hero--banner-image.png'
import FlipkartLogo from '../assets/images/flipkart--logo.jpeg'
import AmazonLogo from '../assets/images/amazon--logo.png'

const Hero = () => {
	return (
		<section className="row hero--section">
			<div className="row">
				<div className="col-md-6 hero--content">
					<h1>
						<span>The world at your feet,</span>
						<span>Designed with perfection.</span>
					</h1>
					<p>
						<span>- Good shoes take you to good places.</span>
						<span>- Simple made perfect.</span>
						<span>- The journey begins with the perfect pair.</span>
						<span>- Feel the earth beneath your feet.</span>
					</p>
					<div className="row with--action-btn">
						<div className="col-md-12">
							<button className="btn btn--update">Show Now</button>
							<button className="btn btn--category">Category</button>
						</div>
						<div className="col-md-12 mt-5">
							<p>Also Available on:</p>
							<div className="small--logo">
								<span className="shoping-web--logo">
									<img src={AmazonLogo} alt="Amazon Logo" />
								</span>
								<span className="shoping-web--logo">
									<img src={FlipkartLogo} alt="Flipkart Logo" />
								</span>
							</div>
						</div>
					</div>

				</div>
				<div className="col-md-6 hero--image">
					<img src={heroBannerImage} alt="Hero Banner Image" />
				</div>
			</div>
		</section>
	)
}

export default Hero
