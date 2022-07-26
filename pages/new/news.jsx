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
