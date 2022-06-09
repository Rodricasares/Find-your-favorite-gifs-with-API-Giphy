import React, { useEffect, useState } from "react";
import Gifs from "./gif.jsx";

const List = () => {
	const [gifs, setGifs] = useState([]);
	const [search, setSearch] = useState("futbol");
	const [show, setShow] = useState(false);
	useEffect(() => {
		const BASE_URL = "https://api.giphy.com/v1/gifs/";
		const API_KEY = "90T9BmYVguh5k3VURDeT0hx0vRrgIiLK&q";
		//const search = "coches";
		const url = `${BASE_URL}search?api_key=${API_KEY}=${search}&limit=12&offset=0&rating=g&lang=en`;

		fetch(url)
			.then((resp) => resp.json())
			.then((resp) => {
				setGifs(resp.data);
			});
	}, [show]);

	return (
		<div className="row justify-content-center mb-5">
			<h1 className="text-center mt-5 text-warning border-2">
				Find your favorite gifs!!!
				<span className="badge bg-info"></span>
			</h1>

			<h2 className="text-center mb-4 text-warning border-2">
				<span className="badge bg-info">with API Giphy</span>
			</h2>

			<div className="col-4">
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Search"
						aria-label="Search"
						aria-describedby="button-addon2"
						onChange={(event) => {
							setSearch(event.target.value);
						}}
					/>
					<button
						className="btn btn-outline-warning"
						type="button"
						id="button-addon2"
						onClick={() => {
							setShow(!show);
						}}>
						Search
					</button>
				</div>
			</div>
			<div className="row justify-content-center">
				{gifs
					? gifs.map((value, index) => {
							return (
								<Gifs
									image={value.images.downsized_large.url}
									key={index}
								/>
							);
					  })
					: "Loading the Gifs ..."}
			</div>
		</div>
	);
};
export default List;
