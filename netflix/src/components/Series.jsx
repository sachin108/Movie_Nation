import React from "react";
import values from "../utils/values";
import "./Series.css";

function Series({ data }) {
	const dummy_poster =
		"";
	return (
		<div className="tv" id={data.id}>
			<a href={"/tv/" + data.id} >
				<img
					src={
						data.poster_path == null
							? dummy_poster
							: values.poster_baseUrl + data.poster_path
					}
					title={data.name}
				/>
			</a>
		</div>
	);
}

export default Series;
