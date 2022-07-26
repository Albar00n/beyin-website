import React from "react";
import Link from "next/link";
import Split from "../Split";

const BlcSec = () => {
  return (
		<section className="blc-sec section-padding pb-0">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="intro md-mb30">
							<div className="sub-title">
								<h6>Know Us Better</h6>
								<span></span>
								<span></span>
								<span></span>
							</div>
							<Split>
								<h1
									style={{ fontSize: "45px" }}
									className="extra-title wow words chars splitting"
									data-splitting
								>
									Do you have a digital idea <br /> you want to bring to Life?
								</h1>
							</Split>
						</div>
					</div>
					<div className="col-lg-5 valign">
						<div className="full-width">
							<Split>
								<p className="wow txt words chars splitting" data-splitting>
									Beyin is the best choice for developing augmented reality apps
									and advanced mobile applications. We have a team of
									experienced developers who are experts in the latest
									technology trends. We can create custom apps that are tailored
									to your specific needs and requirements. Contact us today to
									<Link href="/contact">
										<a style={{ textDecoration: "underline",margin:'0px 3px' }}>get started!</a>
									</Link>
								</p>
							</Split>
							<Split>
								<Link href="/about">
									<a
										className="simple-btn custom-font mt-20 wow words chars splitting"
										data-splitting
									>
										<span>Know More</span>
									</a>
								</Link>
							</Split>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlcSec;
