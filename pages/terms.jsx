import React from "react";
import TermsDetails from "../components/Terms and conditions/Terms-details";
import Footer from "../components/Footer";
import Navbar from "../components/Navba/index";
import NavbarFullMenu from "../components/Navbar-full/navbar-full-menu/index";
import DarkTheme from "../components/layouts/Dark";
import Header from "../components/Terms and conditions/Terms-header";
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
			<Header />
			<TermsDetails />
			<Footer />
		</DarkTheme>
	);
};

export default Privacy;
