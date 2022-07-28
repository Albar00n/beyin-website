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
				<link rel="shortcut icon" href="/favicon.ico" />
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

				<link rel="alternate" type="application/atom+xml" href="" />
				<meta property="og:type" content="article" />
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
				<meta
					property="og:site_name"
					content="Mobile App Development, Web Design, Digital Marketing company in Abu Dhabi"
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
