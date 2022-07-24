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
