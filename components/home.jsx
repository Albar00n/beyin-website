import React from "react";
import BlcSec from "./Blc-sec";
import Clients1 from "./Clients1";
import AllNavbar from "../components/allNavbar/AllNav"
import Footer from "./Footer";
import AboutIntro from "./About-intro/index"
import IntroWithSlider2 from "./Intro-with-slider2";
import PortfolioCustomColumn from "./Portfolio-custom-column";
import Services2 from "./Services2";
// import { useTheme } from "next-themes";
// import styles from "../styles/Home.module.css";



const Home = () => {
	//   const { theme, setTheme } = useTheme();

  return (
		<>

			<AllNavbar />
			<IntroWithSlider2 />
			<BlcSec />
			<Services2 />
			<AboutIntro />

			<PortfolioCustomColumn column={3} filterPosition="center" />
			<Clients1  subBG />
			{/* <CallToAction /> */}

			<Footer />
		</>
	);
};

export default Home;
