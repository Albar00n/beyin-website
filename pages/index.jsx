import Head from "next/head";
import Beyin from "../components/home";
// import { useTheme } from "next-themes";
// import styles from "../styles/Home.module.css";


export default function Home() {
	//   const { theme, setTheme } = useTheme();

	return (
		<>
			<Head>
				<title> Beyin Technologies - Home </title>
				<meta property="og:locale" content="ar_AR" />
				<link rel="shortcut icon" href="/images/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, user-scalable=0"
				/>
				<meta
					name="description"
					content="Augmented reality service providers
نبتكر ونطور المشاريع الرقمية | Digital innovators"
				/>
				<meta
					name="robots"
					content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
				/>

				<meta property="og:description" content="" />
				<meta name="title" content="" />
				<meta property="og:title" content="" />
				<link rel="alternate" type="application/atom+xml" href="" />
				<meta property="og:type" content="article" />
				<meta property="og:locale" content="ar_AR" />
				<meta name="keywords" content="" />
				<meta
					property="og:site_name"
					content="Mobile App Development, Web Design, Digital Marketing company in Kuwait"
				/>
			</Head>
			{/* <div className={styles.theme}>
				<button className={styles.light} onClick={() => setTheme("light")}>
					Light
				</button>
				<button className={styles.dark} onClick={() => setTheme("dark")}>
					Dark
				</button>
			</div> */}
			<Beyin />
		</>
	);
}
