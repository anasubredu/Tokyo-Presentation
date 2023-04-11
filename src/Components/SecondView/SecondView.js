import "./SecondView.css";
import FirtsImage from "../../img/first-img.svg";
import SecondImage from "../../img/second-img.svg";
import ThirdImage from "../../img/third-img.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export default function SecondView() {
	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				overflow: "auto",
				backgroundColor: "#14171A",
			}}
		>
			<h1 className="sv-title">BEST DESTINATION</h1>

			<div className="img-container">
				<img src={FirtsImage}></img>

				<img src={SecondImage}></img>

				<img src={ThirdImage}></img>
			</div>

			<div className="presentation">
				<p className="paragraph">
					Welcome to Tokyo, the vibrant capital city of Japan! Tokyo is a modern
					metropolis that seamlessly blends the old and the new, offering a
					unique cultural experience to visitors from around the world.{" "}
				</p>

				<p className="paragraph">
					Tokyo is a city of contrasts, where towering skyscrapers stand next to
					ancient temples and gardens. With a population of over 13 million
					people, Tokyo is one of the world's largest and most dynamic cities,
					offering something for everyone, whether you're interested in art,
					food, culture, or technology.{" "}
				</p>

				<p className="paragraph">
					{" "}
					One of the most striking features of Tokyo is its incredible skyline,
					which is dominated by the iconic Tokyo Tower and the Tokyo Skytree.
					These towering structures offer breathtaking views of the city, and
					are must-see attractions for any visitor to Tokyo.{" "}
				</p>

				<p className="paragraph">
					Another highlight of Tokyo is its food scene, which is renowned for
					its incredible variety and quality. From world-class sushi to
					mouth-watering ramen, Tokyo is a paradise for food lovers. Be sure to
					try some of the city's famous street food, such as yakitori, takoyaki,
					and okonomiyaki.{" "}
				</p>
			</div>
		</div>
	);
}
