import Banner from "../../img/tokyo-background.jpg";
import "./FirstView.css";
import Facebook from "../../img/facebook.png";
import Instagram from "../../img/instagram.png";
import Youtube from "../../img/youtube.png";
import Twitter from "../../img/twitter.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export default function FirstView() {
	useEffect(() => {
		//Registering a plugin with the GSAP core ensures that the two work seamlessly together and also prevents tree shaking issues in build tools/bundlers. You only need to register a plugin once before using it, like:
		gsap.registerPlugin(ScrollTrigger);
		//The most common type of animation is a to() tween because it allows you to define the destination values (and most people think in terms of animating to certain values):
		gsap.to("progress", {
			value: 100,
			scrollTrigger: {
				//Soften the link between the animation and the the scrollbar so that takes a certain amount of time to "catch up"
				scrub: 0.5,
			},
		});
	}, []);

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

				{/* The <progress> tag is being used here to represent the progress of the user's scroll on the page. The max attribute is set to 100, indicating that the progress bar will reach 100% when the animation is complete. The value attribute is initially set to 0 and will be updated by the animation to reflect the user's progress. */}
				<progress max="100" value="0"></progress>
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

					<img className="icon" src={Twitter} alt="twitter_icon"></img>
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
						0 <span style={{ fontSize: "50px" }}>5</span>
					</h1>
				</div>
			</div>
		</div>
	);
}
