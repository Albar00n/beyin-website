import React from "react";
import Head from "next/head";
import PrivacyDetails from "../components/privacy/Privacy-details";
import Footer from "../components/Footer";
import AllNavbar from "../components/allNavbar/AllNav";
import DarkTheme from "../components/layouts/Dark";
import Header from "../components/privacy/Privacy-header"
import Overlay from "../components/Terms and conditions/Overlay";

const Privacy = () => {
	return (
		<>
			<Head>
				<title></title>
			</Head>
			<DarkTheme>
				<AllNavbar />
				<Header />
				<Overlay />
				<PrivacyDetails />
				<Footer />
			</DarkTheme>
		</>
	);
};

export default Privacy;
