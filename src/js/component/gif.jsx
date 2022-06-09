import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Gifs = (props) => {
	return (
		<div className="col-3">
			<div
				className="card m-3 p-1"
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
