import React from "react";
import PrivacyDetails from "../components/privacy/Privacy-details";
import Footer from "../components/Footer";
import AllNavbar from "../components/allNavbar/AllNav";
import DarkTheme from "../components/layouts/Dark";
import Header from "../components/privacy/Privacy-header"
import Overlay from "../components/Terms and conditions/Overlay";

const Privacy = () => {
	return (
		<DarkTheme>
			<AllNavbar  />
			<Header />
			<Overlay  />
			<PrivacyDetails />
			<Footer />
		</DarkTheme>
	);
};

export default Privacy;
