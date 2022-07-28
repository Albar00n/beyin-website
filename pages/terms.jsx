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
				<title> Beyin Technologies - Terms & Condition </title>
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
				<meta name="title" content="Terms & Condition Beyin Technologies" />

				<link rel="alternate" type="application/atom+xml" href="" />
				<meta property="og:type" content="article" />
				<meta
					name="keywords"
					content="شركة تطوير تطبيقات الويب ،خدمات تطوير تطبيقات الويب ،شركة برمجة تطبيقات الويب "
				/>
				<meta
					name="keywords"
					content="augmented reality technology,phone app,app development,mobile app development,mobile application development,mobile development,mobile app design,app developers,augmented realities,flutter development,react native app development native"
				/>
				<meta
					name="keywords"
					content="augmented reality mobile phone, mobile app ,developer augmented realitydevelopment,create augmented reality app,creating augmented reality"
				/>
				<meta
					property="og:site_name"
					content="Mobile App Development, Web Design, Digital Marketing company in Abu Dhabi"
				/>
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
