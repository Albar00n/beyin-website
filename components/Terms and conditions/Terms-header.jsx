import React from "react";
import Link from 'next/link'
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
							<h1>TERMS & CONDITIONS</h1>
							<div className="path">
								<Link href="/">
									<a>Home</a>
								</Link>
								<span>/</span>
								<Link href="/about">
									<a href="#0" className="active">
										About Us
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default PrivacyHeader;