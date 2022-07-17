import React from "react";
import Navbar from '../../components/Navba/index'
import NavbarFullMenu from "../../components/Navbar-full/navbar-full-menu/index"
import ShowcasesOneCenter from "../../components/Showcases-one-center";
import DarkTheme from "../../components/layouts/Dark";

const Showcase4Dark = () => {
	return (
		<DarkTheme>
			<Navbar  />
			<NavbarFullMenu />
			<ShowcasesOneCenter />
		</DarkTheme>
	);
};

export default Showcase4Dark;
