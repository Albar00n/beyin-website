import React from "react";
import Link from "next/link";
import Split from "../Split";

const Services2 = () => {
  return (
		<section className="services section-padding">
			<div className="container">
				<div className="container">
					<div className="sec-head custom-font">
						<h6 className="wow fadeIn" data-wow-delay=".5s">
							Our services
						</h6>
						<Split>
							<h1 className="wow words chars splitting" data-splitting>
								services
							</h1>
							<p
								className="wow words chars splitting"
								data-splitting
								style={{ width: "90%" }}
							>
								Looking for a web development partner that will help you take
								your business to the next level? Look no further than us! We
								provide a wide range of services and we are committed to helping
								our clients achieve their goals.
							</p>
						</Split>
						{/* <span className="tbg text-right">Portfolio</span> */}
					</div>
				</div>
				<div className="row rone">
					<div className="col-lg-3 wow fadeInUp" data-wow-delay=".4s">
						<div className="mas-item">
							<span className="icon pe-7s-monitor"></span>
							<h6>
								Web <br /> Developments
							</h6>
							<div className="text-right">
								<Link href="/about">
									<a className="more">
										<i className="fas fa-chevron-right"></i>
									</a>
								</Link>
							</div>
							<div className="bg-color"></div>
						</div>
					</div>
					<div
						className="col-lg-3 offset-lg-1 wow fadeInUp"
						data-wow-delay=".4s"
					>
						<div className="mas-item">
							<span className="icon pe-7s-camera"></span>
							<h6>
								Mobile App <br /> development
							</h6>
							<div className="text-right">
								<Link href="/about">
									<a className="more">
										<i className="fas fa-chevron-right"></i>
									</a>
								</Link>
							</div>
							<div className="bg-color"></div>
						</div>
					</div>
					<div
						className="col-lg-3 offset-lg-1 wow fadeInUp"
						data-wow-delay=".4s"
					>
						<div className="mas-item">
							<span className="icon pe-7s-phone"></span>
							<h6>
								virtual reality Augmented <br /> reality (AR/VR)
							</h6>
							<div className="text-right">
								<Link href="/about">
									<a className="more">
										<i className="fas fa-chevron-right"></i>
									</a>
								</Link>
							</div>
							<div className="bg-color"></div>
						</div>
					</div>
				</div>
				<div className="row rtwo">
					<div
						className="col-lg-3 offset-lg-1 wow fadeInUp"
						data-wow-delay=".4s"
					>
						<div className="mas-item">
							<span className="icon pe-7s-diskette"></span>
							<h6>
								UI/UX <br /> design
							</h6>
							<div className="text-right">
								<Link href="/about">
									<a className="more">
										<i className="fas fa-chevron-right"></i>
									</a>
								</Link>
							</div>
							<div className="bg-color"></div>
						</div>
					</div>
					<div
						className="col-lg-3 offset-lg-1 wow fadeInUp"
						data-wow-delay=".4s"
					>
						<div className="mas-item">
							<span className="icon pe-7s-help2"></span>
							<h6>3D Modeling</h6>
							<div className="text-right">
								<Link href="/about">
									<a className="more">
										<i className="fas fa-chevron-right"></i>
									</a>
								</Link>
							</div>
							<div className="bg-color"></div>
						</div>
					</div>
					<div
						className="col-lg-3 offset-lg-1 wow fadeInUp"
						data-wow-delay=".4s"
					>
						<div className="mas-item">
							<span className="icon pe-7s-arc"></span>
							<h6>SaaS Development</h6>
							<div className="text-right">
								<Link href="/about">
									<a className="more">
										<i className="fas fa-chevron-right"></i>
									</a>
								</Link>
							</div>
							<div className="bg-color"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services2;
