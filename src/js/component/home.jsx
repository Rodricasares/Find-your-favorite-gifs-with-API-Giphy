import React from "react";
import Gifs from "./gif.jsx";
import List from "./list.jsx";
import "../../styles/home.css";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<List />
		</div>
	);
};

export default Home;
