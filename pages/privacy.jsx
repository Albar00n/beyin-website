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
				<title> Beyin Technologies - Privacy Policy</title>
				<meta property="og:locale" content="ar_AR" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, user-scalable=0"
				/>
				<meta
					name="robots"
					content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
				/>
				<meta name="description" content="" />
				<meta property="og:description" content="" />
				<meta name="title" content="" />
				<meta property="og:title" content="" />
				<link
					rel="alternate"
					type="application/atom+xml"
					href=""
				/>
				<meta property="og:type" content="article" />
				<meta property="og:locale" content="ar_AR" />
				<meta name="keywords" content="" />
				<meta
					property="og:site_name"
					content="Mobile App Development, Web Design, Digital Marketing company in Kuwait"
				/>
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
