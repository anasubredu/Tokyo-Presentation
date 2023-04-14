import "./SecondView.css";
import FirtsImage from "../../img/first-img.svg";
import SecondImage from "../../img/second-img.svg";
import ThirdImage from "../../img/third-img.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef, useEffect, useMemo, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SecondView() {
	const targetContainer = useRef(null);

	const isContainerInViewPort = useIsInViewport(targetContainer);

	useLayoutEffect(() => {
		let myContext;

		if (isContainerInViewPort) {
			myContext = gsap.context((self) => {
				const leftImg = self.selector(".first");
				const rightImg = self.selector(".last");

				gsap.fromTo(
					leftImg,
					{
						x: -200,
						scrollTrigger: {
							trigger: leftImg,
							start: "top 80%",
							toggleActions: "restart none none none",
						},
					},
					{
						x: 200,
						duration: 1,
					}
				);

				gsap.fromTo(
					rightImg,
					{
						x: 200,
						scrollTrigger: {
							trigger: rightImg,
							start: "top 80%",
							toggleActions: "restart none none none",
						},
					},
					{
						x: -200,
						duration: 1,
					}
				);
			}, targetContainer); // <- Scope!
		}

		return () => {
			if (myContext) {
				myContext.revert(); // <- Cleanup!
			}
		};
	}, [isContainerInViewPort]);

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

			<div className="img-container" ref={targetContainer}>
				<img className="first" src={FirtsImage} alt="tokyo_img"></img>

				<img src={SecondImage} alt="tokyo_img"></img>

				<img className="last" src={ThirdImage} alt="tokyo_img"></img>
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

export function useIsInViewport(ref) {
	// variabila interna de state pe care o intoarcem in return
	const [isIntersecting, setIsIntersecting] = useState(false);

	// creem in obiect de tip IntersectionObserver si setam state-ul variabilei interne 'isIntersecting' in true atunci cand un element se intersecteaza cu viewport-ul
	const observer = useMemo(
		() =>
			new IntersectionObserver(([entry]) =>
				setIsIntersecting(entry.isIntersecting)
			),
		[]
	);

	// useEffect ruleaza dupa pictare/randare, atunci cand unul dintre elementele din array-ul de dependinte se schimba '[ref, observer]'

	useEffect(() => {
		// pasam ref-ul primit ca parametru sa fie observat de obiectul nostru Observer
		observer.observe(ref.current);

		// Cleanup -- Functia de mai jos se exectuta inainte sa fie pictat iar componenta.
		// Se numeste functie de cleanup unde deconectam observerul nostru sa nu mai urmareasca elementul de ref
		return () => {
			observer.disconnect();
		};
	}, [ref, observer]);

	return isIntersecting;
}
