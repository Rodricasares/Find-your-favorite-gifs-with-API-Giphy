import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Gifs = (props) => {
	return (
		<div className="row col-12  col-sm-3 p-4 justify-content-center">
			<div
				className="card m-2 p-1"
				style={{ width: "20em", height: "20em" }}>
				<img src={props.image} className="card-img-top" alt="..." />
			</div>
		</div>
	);
};

Gifs.prototype = {
	image: PropTypes.string,
};
export default Gifs;
