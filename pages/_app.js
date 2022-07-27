/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import React from "react";
import Head from "next/head";
import Link from 'next/link'
import Script from "next/script";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
// import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
// import "../public/css/dark.css";
export const config = {
	unstable_runtimeJS: false,
};

function MyApp({ Component, pageProps }) {

	return (
		<div>
			<Head>
				<title> Beyin Technologies</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Cursor />
			<LoadingScreen />
			<ScrollToTop />
			{/* <ThemeProvider> */}
			<Component {...pageProps} />
			{/* </ThemeProvider> */}

			<Script id="wow" src="/js/wow.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				id="splitting"
				src="/js/splitting.min.js"
			></Script>
			<Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
			<Script
				id="isotope"
				strategy="beforeInteractive"
				src="/js/isotope.pkgd.min.js"
			></Script>
			<Script id="initWow" strategy="lazyOnload">{`new WOW().init();`}</Script>
		</div>
	);
}

export default MyApp;
