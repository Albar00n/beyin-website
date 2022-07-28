import React from "react";
import Head from "next/head";
import BlogDetails from "../../components/Blog-details";
import Footer from "../../components/Footer";
import AllNavbar from "../../components/allNavbar/AllNav";
import DarkTheme from "../../components/layouts/Dark";

const BlogDetailsDark = () => {

	return (
		<>
			<Head>
				<title> Beyin Technologies - Details Blog </title>
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
				<meta name="title" content="Details Blog" />

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
				<section className="page-header blg">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-7 col-md-9">
								<div className="cont text-center">
									<h2>Build a Beautiful Blog With Ease</h2>
								</div>
							</div>
						</div>
					</div>
				</section>
				<BlogDetails />
				<Footer />
			</DarkTheme>
		</>
	);
};

export default BlogDetailsDark;
