import React from "react";

const PrivacyHeader = () => {
  return (
		<header
			className="pages-header bg-img valign parallaxie"
			style={{ backgroundImage: "url(/img/slid/headerPrivacy.png)" }}
			data-overlay-dark="5"
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="cont text-center">
							<h1>PRIVACY POLICY</h1>
							<div className="path">
								<a href="#0">Home</a>
								<span>/</span>
								<a href="#0" className="active">
									About Us
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default PrivacyHeader;