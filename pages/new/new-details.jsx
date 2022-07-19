import React from "react";
import BlogDetails from "../../components/Blog-details";
import Footer from "../../components/Footer";
import AllNavbar from "../../components/allNavbar/AllNav";
import Navbar from "../../components/Navba/index";
import NavbarFullMenu from "../../components/Navbar-full/navbar-full-menu/index";
import DarkTheme from "../../components/layouts/Dark";

const BlogDetailsDark = () => {

	return (
		<DarkTheme>
			<AllNavbar  />
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
	);
};

export default BlogDetailsDark;
