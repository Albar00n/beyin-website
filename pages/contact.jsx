import React from "react";
import Head from "next/head";
import ContactHeader from "../components/Contact-header";
import ContactWithMap from "../components/Contact-with-map";
import AllNavbar from "../components/allNavbar/AllNav";
import DarkTheme from "../components/layouts/Dark";

const Contact = () => {
	const fixedHeader = React.useRef(null);
	const MainContent = React.useRef(null);


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
		<>
			<Head>
				<title></title>
				<meta property="og:locale" content="ar_AR" />
				<link rel="shortcut icon" href="/images/favicon.ico" />
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
				<ContactHeader sliderRef={fixedHeader} />
				<div className="main-content" ref={MainContent}>
					<ContactWithMap />
				</div>
			</DarkTheme>
		</>
	);
};

export default Contact;
