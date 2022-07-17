import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
		<section className="intro-section section-padding pb-0">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-4">
						<div className="htit sm-mb30">
							<h4>The best augmented reality developer for your needs</h4>
						</div>
					</div>
					<div className="col-lg-8 offset-lg-1 col-md-8">
						<div className="text">
							<Split>
								<p className="wow txt words chars splitting" data-splitting>
									Looking to develop augmented reality apps? You have come to the
									right place! We have the experience and expertise to help you
									bring your vision to life. We are dedicated to creating
									innovative and exciting apps that will engage and delight your
									users. Contact us today to get started!
								</p>
							</Split>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutIntro;
