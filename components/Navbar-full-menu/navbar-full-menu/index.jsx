import React from "react";
import Split from "../../Split";
import Link from "next/link";
import appData from "../../data/app.json";
import handleFullScreenNavbar from "../../../common/handleFullScreenNavbar";

const NavbarFullMenu = ({ theme, lr }) => {
	React.useEffect(() => {
		handleFullScreenNavbar();
	}, []);
	return (
		<>
			<div
				id="navi"
				className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
			>
				<div className="container-fluid">
					<div>
						<Link href="/">
							<a>
								{theme ? (
									theme === "light" ? (
										<img src={`${appData.darkLogo}`} alt="logo" />
									) : (
										<img src={`${appData.lightLogo}`} alt="logo" />
									)
								) : (
									<img src={`${appData.lightLogo}`} alt="logo" />
								)}
							</a>
						</Link>
					</div>
					<div className="menu-icon">
						<span className="icon">
							<i></i>
							<i></i>
						</span>
						<Split>
							<span className="text" data-splitting>
								<span className="menu-text">Menu</span>
							</span>
						</Split>
					</div>
				</div>

				{/*  */}

				<div>
					<div>
						<ul className="navbar-nav ml-auto conno">
							<li className="nav-item no">
								<Link href="/">
									<a className="nav-link">Home</a>
								</Link>
							</li>

							<li className="nav-item no">
								<Link href="/projects/projects/">
									<a className="nav-link">Our projects</a>
								</Link>
							</li>
							<li className="nav-item  no">
								<Link href="/about">
									<a className="nav-link">About Us</a>
								</Link>
							</li>
							<li className="nav-item dropdown no">
								<Link href="/contact">
									<a className="nav-link">Start a Project</a>
								</Link>
							</li>
							<li className="nav-item no">
								<Link href="/new/news">
									<a className="nav-link">News</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/*  */}
			</div>
			{/*  */}

			{/*  */}

			<div className="hamenu">
				<div className="container">
					<div className="row">
						<div className="col-lg-9 col-md-8">
							<div className="menu-links">
								<ul className="main-menu">
									<li>
										<div className="o-hidden">
											<Link href="/">
												<a className="sub-link">
													<span className="nm">01.</span>Home
												</a>
											</Link>
										</div>
									</li>
									<li>
										<div className="o-hidden">
											<Link href="/about">
												<a className="sub-link">
													<span className="nm">02.</span>About Us
												</a>
											</Link>
										</div>
									</li>
									<li>
										<div className="o-hidden">
											<Link href="/works/works-dark">
												<a className="sub-link">
													<span className="nm">03.</span>Projects
												</a>
											</Link>
										</div>
									</li>
									<li>
										<div className="o-hidden">
											<Link href="/works/works-dark">
												<a className="sub-link">
													<span className="nm">04.</span>Contact
												</a>
											</Link>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
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
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarFullMenu;

// <Link href="/projects/projects/">
