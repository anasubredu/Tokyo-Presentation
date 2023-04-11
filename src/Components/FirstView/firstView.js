import Banner from "../../img/tokyo-background.jpg";
import "./FirstView.css";
import Facebook from "../../img/facebook.png";
import Instagram from "../../img/instagram.png";
import Youtube from "../../img/youtube.png";

export default function FirstView() {
	return (
		<div
			style={{
				backgroundImage: `url(${Banner})`,
				width: "100vw",
				height: "100vh",
				overflow: "hidden",
			}}
		>
			<div className="navbar">
				<h1>TOKYO ODYSSEY</h1>

				<div className="nav-buttons">
					<div>
						<a className="nav-btn" href="">
							ABOUT
						</a>
					</div>

					<div>
						<a className="nav-btn" href="">
							BLOG
						</a>
					</div>

					<div>
						<a className="nav-btn" href="">
							Sign In
						</a>
					</div>
				</div>
			</div>

			<div className="content-container">
				<h2 className="discover">DISCOVER</h2>

				<h1 className="page-title">TOKYO</h1>
			</div>

			<div className="bottom-part">
				{/* <div className="social-media"></div> */}

				<div className="icons-container">
					<a className="icon">
						<img src={Facebook} alt="facebook_icon"></img>
					</a>

					<img className="icon" src={Instagram} alt="instagram_icon"></img>

					<img className="icon" src={Youtube} alt="youtube_icon"></img>
				</div>

				<div className="scroll-container">
					<h3 className="scroll">SCROLL</h3>
					<div className="line"></div>
				</div>

				<div className="page-count">
					<h1 className="from-pg">
						0 <span style={{ fontSize: "80px" }}>1</span>
					</h1>
					<div className="horizontal-line"></div>
					<h1 className="to-pg">
						0 <span style={{ fontSize: "50px" }}>2</span>
					</h1>
				</div>
			</div>
		</div>
	);
}
