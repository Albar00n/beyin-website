import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
		};
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="keywords"
						content="HTML5 Template Avo onepage themeforest"
					/>
					<meta
						name="description"
						content="Avo - Onepage Multi-Purpose HTML5 Template"
					/>
					<meta name="author" content="" />
					<link rel="shortcut icon" href="/favicon.ico" />
					{/* Google Fonts */}
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap"
						rel="stylesheet"
					/>

					<link rel="stylesheet" href="/css/dark.css" />
				</Head>

				<body>
					{/* <script
						dangerouslySetInnerHTML={{
							__html: themeInitializerScript,
						}}
					></script> */}
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
