import React from "react";
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
		<DarkTheme>
			<AllNavbar  />
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
	);
};

export default AboutDark;
