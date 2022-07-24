/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import portfolio1Data from "../data/sections/portfolio1.json";

const PortfolioCustomColumn = ({
	column,
	filterPosition,
	hideFilter,
	hideSectionTitle,
	theme,
}) => {
	const [pageLoaded, setPageLoaded] = React.useState(false);
	React.useEffect(() => {
		setPageLoaded(true);
		if (pageLoaded) {
			setTimeout(() => {
				initIsotope();
			}, 1000);
		}
	}, [pageLoaded]);
	return (
		<section className="portfolio section-padding pb-70">
			{!hideSectionTitle && (
				<div className="container">
					<div className="sec-head custom-font">
						<h6 className="wow fadeIn" data-wow-delay=".5s">
							Our Portfolio
						</h6>
						<Split>
							<h1 className="wow words chars splitting" data-splitting>
								Portfolio
							</h1>
							<p style={{width:'90%'}}>
								We are a company that stands for quality and excellence. We take
								pride in our work and always aim to deliver the best results for
								our clients. With us, you can be sure that your getting the
								best possible value for your investment.
							</p>
						</Split>
						<span className="tbg text-right">Portfolio</span>
					</div>
				</div>
			)}

			<div className={`${column === 3 ? "container-fluid" : "container"}`}>
				<div className="row">
					{!hideFilter && (
						<div
							className={`filtering ${
								filterPosition === "center"
									? "text-center"
									: filterPosition === "left"
									? "text-left"
									: "text-right"
							} col-12`}
						>
							<div className="filter">
								<span data-filter="*" className="active">
									All
								</span>
								<span data-filter=".brand">Branding</span>
								<span data-filter=".web">Mobile App</span>
								<span data-filter=".graphic">Creative</span>
							</div>
						</div>
					)}
					<div className="gallery full-width">
						{portfolio1Data.map((item, index) => (
							<div
								key={item.id}
								className={`${
									column === 3
										? "col-lg-4 col-md-6"
										: column === 2
										? "col-md-6"
										: "col-12"
								} items ${item.filterCategory} wow fadeInUp ${
									item.id === 3 && column == 3
										? "lg-mr"
										: item.id === 1 && column == 1
										? "lg-mr"
										: ""
								}`}
								data-wow-delay=".4s"
							>
								<div className="item-img">
									<Link href="/project-details2/project-details2-dark">
										<a className="imago wow">
											<img src={item.image} alt="image" />
											<div className="item-img-overlay"></div>
										</a>
									</Link>
								</div>
								<div className="cont">
									<h6>{item.title}</h6>
									<span>
										{item.tags.map((tag, index) => (
											<React.Fragment key={index * 3}>
												<Link href="/works4/works4-dark">{tag}</Link>
												{index == item.tags.length - 1 ? "" : ","}
											</React.Fragment>
										))}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div>
				<div
					className="container"
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Link href="/projects/projects/">
						<a
							className={`btn-curve ${
								theme == "light" ? "btn-blc" : "btn-lit"
							} wow fadeInUp`}
							data-wow-delay=".5s"
						>
							<span>Show more</span>
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default PortfolioCustomColumn;
