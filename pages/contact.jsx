import React from "react";
import ContactHeader from "../components/Contact-header";
import ContactWithMap from "../components/Contact-with-map";
import Navbar from "../components/Navbar-full-menu/navbar-full-menu/index";
import DarkTheme from "../components/layouts/Dark";

const Contact = () => {
	const fixedHeader = React.useRef(null);
	const MainContent = React.useRef(null);
	// const navbarRef = React.useRef(null);
	React.useEffect(() => {
		setInterval(() => {
			if (fixedHeader.current) {
				var slidHeight = fixedHeader.current.offsetHeight;
			}
			if (MainContent.current) {
				MainContent.current.style.marginTop = slidHeight + "px";
			}
		}, 1000);

	}, []);
	return (
		<DarkTheme>
			{/* <Navbar /> */}
			<ContactHeader sliderRef={fixedHeader} />
			<div className="main-content" ref={MainContent}>
				<ContactWithMap />
			</div>
		</DarkTheme>
	);
};

export default Contact;
