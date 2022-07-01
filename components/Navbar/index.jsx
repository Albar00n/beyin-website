/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";

import appData from "../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,
//   handleSearch,
} from "../../common/navbar";


const Navbar = ({ lr, nr, theme }) => {
  React.useEffect(() => {
    // handleSearch();
  }, []);
  return (
		<nav
			ref={nr}
			className={`navbar navbar-expand-lg change ${
				theme === "themeL" ? "light" : ""
			}`}
		>
			<div className="container">
				{/* <Link href="/">
					<a className="logo">
						{theme ? (
							theme === "themeL" ? (
								<img ref={lr} alt="logo" />
							) : (
								<img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
							)
						) : (
							<img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
						)}
					</a>
				</Link> */}

				{/* <button
					className="navbar-toggler"
					type="button"
					onClick={handleMobileDropdown}
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="icon-bar">
						<i className="fas fa-bars"></i>
					</span>
				</button> */}

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<Link href="/">
										<a className="nav-link">Home</a>
									</Link>
								</li>

								<li className="nav-item">
									<Link href="/projects/projects">
										<a className="nav-link">Our projects</a>
									</Link>
								</li>
								<li className="nav-item ">
									<Link href="/about">
										<a className="nav-link">About Us</a>
									</Link>
								</li>
								<li className="nav-item dropdown">
									<Link href="/contact">
										<a className="nav-link">Start a Project</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link href="/new/news">
										<a className="nav-link">News</a>
									</Link>
								</li>
							</ul>

						{/* <div className="col-lg-3 col-md-4 infor">
							<div className="cont-info">
								<div className="item">
									<h6>Phone :</h6>
									<p>+03 762-2367-723</p>
								</div>
								<div className="item">
									<h6>Address :</h6>
									<p>
										541 Melville Ave, Palo Alto, CA 94301, ask@ohio.colabr.io
									</p>
								</div>
								<div className="item">
									<h6>Email :</h6>
									<p>
										<a href="#0">Avo_website@gmail.com</a>
									</p>
								</div>
							</div>
						</div> */}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
