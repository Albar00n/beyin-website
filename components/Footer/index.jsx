/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from 'next/link'
import { Formik, Form, Field } from "formik";
import appData from "../data/app.json";

const Footer = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
		<footer className="footer-half sub-bg section-padding pb-0">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="cont">
							<div className="logo">
								<a href="#0">
									<img src={`${appData.lightLogo}`} alt="Logo Beyin" />
								</a>
							</div>
							<div className="con-info custom-font">
								<ul>
									<li>
										<Link href="mailto:support@beyin.me">
											<a>
												<span>Email : </span> Support@beyin.me
											</a>
										</Link>
									</li>
									<li>
										<span>Address : </span> FD - GF, Accelerator Building,
										Masdar City, Abu Dhabi - United Arab Emirates
									</li>
									<li>
										<span>Phone : </span> +971 52 588 6620
									</li>
								</ul>
							</div>
							<div className="social-icon">
								<h6 className="custom-font stit simple-btn">Follow Us</h6>
								<div className="social">
									<a href="#0" className="icon">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a href="#0" className="icon">
										<i className="fab fa-twitter"></i>
									</a>
									<a href="#0" className="icon">
										<i className="fab fa-pinterest"></i>
									</a>
									<a href="#0" className="icon">
										<i className="fab fa-behance"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 offset-lg-2 d-flex ">
						<div className="cont">
							<div className="logo">
								<h1 style={{ fontSize: "30px" }}>The support</h1>
							</div>
							<ul style={{ listStyle: "none" }}>
								<li style={{ fontSize: "20px" }}>
									<Link href="/">
										<a>Home</a>
									</Link>
								</li>

								<li style={{ fontSize: "20px" }}>
									<Link href="/contact">
										<a>Contact us</a>
									</Link>
								</li>

								<li style={{ fontSize: "20px" }}>
									<Link href="/terms">
										<a>Technical support</a>
									</Link>
								</li>
								<li style={{ fontSize: "20px" }}>
									<Link href="/contact">
										<a>Help</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3  d-flex ">
						<div className="cont">
							<div className="logo">
								<h1 style={{ fontSize: "33px" }}>company</h1>
							</div>

							<ul style={{ listStyle: "none" }}>
								<li style={{ fontSize: "20px" }}>
									<Link href="/projects/projects/">
										<a>Projects</a>
									</Link>
								</li>

								<li style={{ fontSize: "20px" }}>
									<Link href="/privacy">
										<a>Privacy policy</a>
									</Link>
								</li>

								<li style={{ fontSize: "20px" }}>
									<Link href="/terms">
										<a>Terms and conditions</a>
									</Link>
								</li>
								<li style={{ fontSize: "20px" }}>
									<Link href="/about">
										<a> About us</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="copyrights text-center">
					<p>
						?? Beyin Digital Technology Limited - 2022. The trademarks, logos,
						designs, services and the content appearing herein, is exclusively
						owned by Beyin Digital Technology Limited, and/or its licensors, and
						are protected. Any unauthorized use or reproduction or distribution,
						shall attract suitable action under applicable law.
						{/* <a href="#0">ThemesCamp</a>. */}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
