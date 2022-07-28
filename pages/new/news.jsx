import React from "react";
import Head from "next/head";
import DarkTheme from "../../components/layouts/Dark";
import AllNavbar from "../../components/allNavbar/AllNav";
import BlogStanderd from "../../components/Blog-standerd";
import Footer from "../../components/Footer";

const BlogDark = () => {

	return (
		<>
			<Head>
				<title> Beyin Technologies - Blog </title>
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
				<meta name="title" content="Blog" />

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
				<section className="page-header">
					<div className="container">
						<div className="row">
							<div className="col-lg-7 col-md-9">
								<div className="cont">
									<h1 className="extra-title mb-10">Our Blog.</h1>
									<p>
										All the most current news and events of our creative team.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<BlogStanderd />
				<Footer />
			</DarkTheme>
		</>
	);
};

export default BlogDark;
