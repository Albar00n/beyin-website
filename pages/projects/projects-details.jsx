import React from "react";
import Head from "next/head";
import DarkTheme from "../../components/layouts/Dark";
import AllNavbar from "../../components/allNavbar/AllNav";
import ProjectDetails2Header from "../../components/Project-details2-header";
import ProjectDetails2Introduction from "../../components/Project-details2-introduction";
import ProjectDetails2Images from "../../components/Project-details2-images";
import ProjectDetailsDescription from "../../components/Project-details-description";
import ProjectDetailsVideo from "../../components/Project-details-video";
import NextProject from "../../components/Next-project";
import SmallFooter from "../../components/Footer";

const ProjectDetails2Dark = () => {

	return (
		<>
			<Head>
				<title> Beyin Technologies - Details Prohects </title>
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
				<meta name="title" content="Details Prohects" />

				<link rel="alternate" type="application/atom+xml" href="" />
				<meta property="og:type" content="article" />
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
				<ProjectDetails2Header />
				<ProjectDetails2Introduction />
				<ProjectDetails2Images />
				<ProjectDetailsDescription />
				<ProjectDetailsVideo
					videoBackground="/img/portfolio/project2/bg.jpg"
					videoType="vimeo"
					videoId={127203262}
				/>
				<NextProject
					projectImage="/img/portfolio/project1/bg.jpg"
					projectTitle="Natural plus modern."
				/>
				<SmallFooter />
			</DarkTheme>
		</>
	);
};

export default ProjectDetails2Dark;
