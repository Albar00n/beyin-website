import React from "react";
import BlogDetails from "../components/privacy/Privacy-details";
import Footer from "../components/Footer";
import Navbar from "../components/Navba/index";
import NavbarFullMenu from "../components/Navbar-full/navbar-full-menu/index";
import DarkTheme from "../components/layouts/Dark";
import Header from "../components/privacy/Privacy-header"
const Privacy = () => {
	const navbarRef = React.useRef(null);
	const logoRef = React.useRef(null);
	React.useEffect(() => {
		var navbar = navbarRef.current,
			logo = logoRef.current;
		if (window.pageYOffset > 300) {
			navbar.classList.add("nav-scroll");
		} else {
			navbar.classList.remove("nav-scroll");
		}
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 300) {
				navbar.classList.add("nav-scroll");
			} else {
				navbar.classList.remove("nav-scroll");
			}
		});
	}, [navbarRef]);
	return (
		<DarkTheme>
			<Navbar nr={navbarRef} lr={logoRef} />
			<NavbarFullMenu />
			<Header  />
			{/* <section className="page-header blg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7 col-md-9">
							<div className="cont text-center">
								<h2>PRIVACY POLICY</h2>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			<BlogDetails />
			<Footer />
		</DarkTheme>
	);
};

export default Privacy;
