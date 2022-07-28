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
				<meta
					name="description"
					content="Augmented reality service providers
نبتكر ونطور المشاريع الرقمية | Digital innovators"
				/>
				<meta
					name="description"
					content="Beyin is a leading mobile app development company in Abu Dhabi. We specialize in cross platform app development, Augmented reality and virtual reality app development."
				/>
				<meta
					property="og:description"
					content="نقوم بجميع أنواع تطبيقات الهاتف المحمول مثل تطوير تطبيقات أندرويد و الآيفون في ابوظبي وتطبيقات الويب"
				></meta>
				<meta
					name="keywords"
					content="تصميم تطبيقات أبو ظبي, تطوير تطبيق أبو ظبي, تطوير تطبيق جوال أبو ظبي, شركة تطوير تطبيق أبو ظبي, تطوير تطبيقات الجوال في أبو ظبي, شركة تصميم تطبيقات الامارات, تصميم ابلكيشن في أبو ظبي برنامج صنع تطبيقات الاندرويد, شركة تطوير تطبيقات الهاتف المحمول في أبو ظبي ، تطوير تطبيقات الهاتف المحمول في أبو ظبي ، شركة تطوير تطبيقات الهاتف المحمول في أبو ظبي ، مطورو التطبيقات في أبو ظبي ، شركة تطوير التطبيقات في أبو ظبي ، شركة مطوري تطبيقات الجوال في أبو ظبي ، تطوير تطبيقات الاندرويد أبو ظبي ، تطوير تطبيقات ايفون في أبو ظبي، تطوير تطبيقات الآيفون في أبو ظبي ، شركات تطوير تطبيقات الهاتف المحمول في أبو ظبي ، مطور أندرويد أبو ظبي ، خدمات تطوير تطبيقات الهاتف المحمول في أبو ظبي "
				/>
				<meta
					name="keywords"
					content="شركة تطوير تطبيقات الويب ،خدمات تطوير تطبيقات الويب ،شركة برمجة تطبيقات الويب "
				/>
				<meta
					name="keywords"
					content="augmented reality technology,phone app,app development,mobile app development,mobile application development,mobile development,mobile app design,app developers,augmented realities,flutter development,react native app development native"
				/>
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
