/* eslint-disable @next/next/no-css-tags */
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
					<meta property="og:locale" content="ar_AR" />
					<meta name="robots" content="index,follow" />
					<meta name="google" content="sitelinkssearchbox" />

					<meta
						name="description"
						content="Augmented reality service providers
نبتكر ونطور المشاريع الرقمية | Digital innovators"
					/>
					<meta
						name="description"
						content="Beyin is a leading mobile app development company in Abu Dhabi. We specialize in cross platform app development, Augmented reality and virtual reality app development."
					/>
					<meta
						property="og:description"
						content="نقوم بجميع أنواع تطبيقات الهاتف المحمول مثل تطوير تطبيقات أندرويد و الآيفون في ابوظبي وتطبيقات الويب"
					></meta>
					<meta
						name="keywords"
						content="شركة تطوير تطبيقات الويب ،خدمات تطوير تطبيقات الويب ،شركة برمجة تطبيقات الويب "
					/>
					<meta
						name="keywords"
						content="تصميم تطبيقات أبو ظبي, تطوير تطبيق أبو ظبي, تطوير تطبيق جوال أبو ظبي, شركة تطوير تطبيق أبو ظبي, تطوير تطبيقات الجوال في أبو ظبي, شركة تصميم تطبيقات الامارات, تصميم ابلكيشن في أبو ظبي برنامج صنع تطبيقات الاندرويد, شركة تطوير تطبيقات الهاتف المحمول في أبو ظبي ، تطوير تطبيقات الهاتف المحمول في أبو ظبي ، شركة تطوير تطبيقات الهاتف المحمول في أبو ظبي ، مطورو التطبيقات في أبو ظبي ، شركة تطوير التطبيقات في أبو ظبي ، شركة مطوري تطبيقات الجوال في أبو ظبي ، تطوير تطبيقات الاندرويد أبو ظبي ، تطوير تطبيقات ايفون في أبو ظبي، تطوير تطبيقات الآيفون في أبو ظبي ، شركات تطوير تطبيقات الهاتف المحمول في أبو ظبي ، مطور أندرويد أبو ظبي ، خدمات تطوير تطبيقات الهاتف المحمول في أبو ظبي "
					/>

					<meta
						name="keywords"
						content="augmented reality technology,phone app,app development,mobile app development,mobile application development,mobile development,mobile app design,app developers,augmented realities,flutter development,react native app development native"
					/>
					<meta
						name="keywords"
						content="augmented reality mobile phone, mobile app ,developer augmented realitydevelopment,create augmented reality app,creating augmented reality"
					/>
					<meta data-rh="true" name="robots" content="index, follow" />
					<meta name="Linkedin:site" content="@beyin-tech" />
					<meta name="instagram:site" content="@beyin.me" />
					<meta name="author" content="" />
					<link rel="shortcut icon" href="/favicon.ico" />
					<meta data-rh="true" name="google" content="translate" />
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

