import "./App.css";
import FirstView from "./Components/FirstView/firstView";
import SecondView from "./Components/SecondView/SecondView";

function App() {
	return (
		<div
			style={{
				overflow: "hidden",
				overflowX: "hidden",
			}}
		>
			<FirstView />

			<SecondView />
		</div>
	);
}

export default App;
