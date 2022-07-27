import React from "react";
import Head from "next/head";
import AboutHeader from "../components/About-header";
import AboutIntro from "../components/About-intro";
import CallToAction from "../components/Call-to-action";
import Clients1 from "../components/Clients1";
import AllNavbar from "../components/allNavbar/AllNav";
import Footer from "../components/Footer";
import MinimalArea from "../components/Minimal-area";
import Services4 from "../components/Services4";
import Team1 from "../components/Team1";
import VideoWithTestimonials from "../components/Video-with-testimonials";
import DarkTheme from "../components/layouts/Dark";

const AboutDark = () => {

	return (
		<>
			<Head>
				<title> Beyin Technologies - About </title>
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
					href="https://feeds.feedburner.com/blogspot/amDG"
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
				<AboutHeader />
				<AboutIntro />
				<Services4 withPadding withOutTitle />
				<VideoWithTestimonials />
				{/* <SkillsCircle subBG theme="dark" /> */}
				<Team1 />
				<MinimalArea />
				<Clients1 theme="dark" />
				<CallToAction subBG />
				<Footer />
			</DarkTheme>
		</>
	);
};

export default AboutDark;
