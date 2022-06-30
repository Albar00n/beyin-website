import React from "react";

import Head from "next/head";

const DarkTheme = ({ children }) => {
	return (
		<>
			<Head>{/* <link rel="stylesheet" href="/css/dark.css" /> */}</Head>
			{children}
		</>
	);
};

export default DarkTheme;
