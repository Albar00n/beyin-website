import React from "react";
import Head from "next/head";
import AllNavbar from "../../components/allNavbar/AllNav";
import ShowcasesOneCenter from "../../components/Showcases-one-center";
import DarkTheme from "../../components/layouts/Dark";

const Showcase4Dark = () => {
	return (
		<>
			<Head>
				<title></title>
			</Head>
			<DarkTheme>
				<AllNavbar />
				<ShowcasesOneCenter />
			</DarkTheme>
		</>
	);
};

export default Showcase4Dark;
