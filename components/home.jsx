import React from "react";
import BlcSec from "./Blc-sec";
import CallToAction from "./Call-to-action";
import Clients1 from "./Clients1";
import Footer from "./Footer";
import IntroWithSlider2 from "./Intro-with-slider2";
import Navbar from "./Navbar";
import PortfolioCustomColumn from "./Portfolio-custom-column";
import Services2 from "./Services2";
import SkillsCircle from "./Skills-circle";
// import VideoWithTestimonials from "../components/Video-with-testimonials";
import DarkTheme from "./layouts/Dark";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu"


const Homepage2 = () => {



  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 400) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 400) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme >
      <NavbarFullMenu  />
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider2 />
      <BlcSec />
      <Services2 />
      {/* <VideoWithTestimonials /> */}
      {/* <SkillsCircle theme="dark" subBG /> */}
      <PortfolioCustomColumn column={3} filterPosition="center" />
      <Clients1 theme="dark" subBG />
      <CallToAction />

      <Footer />
    </DarkTheme>
  );
};

export default Homepage2;
