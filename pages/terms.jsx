import React from "react";
import Head from "next/head";
import TermsDetails from "../components/Terms and conditions/Terms-details";
import Footer from "../components/Footer";
import AllNavbar from "../components/allNavbar/AllNav";
import DarkTheme from "../components/layouts/Dark";
import Overlay from '../components/Terms and conditions/Overlay'
import Header from "../components/Terms and conditions/Terms-header";
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
				<TermsDetails />
				<Footer />
			</DarkTheme>
		</>
	);
};

export default Privacy;
