import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/slice/feedSlice";

const Feed = () => {
	const dispatch = useDispatch();
	const feedData = useSelector((store) => store.feed);
	const getFeed = async () => {
		if (feedData) {
			return null;
		}
		try {
			const requestOptions = {
				method: "GET",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
			};
			const response = await fetch(
				"http://localhost:7777/api/users/feed",
				requestOptions,
			);
			const data = await response.json();
			dispatch(addFeed(data?.data));
		} catch (error) {
			console.error("Error fetching feed:", error);
		}
	};

	useEffect(() => {
		getFeed();
	}, []);
	return (
		<div>
			{feedData && feedData.length > 0 && (
				<div className="feed-container">
					{feedData.map((item) => (
						<div key={item._id}>{item?.firstName}</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Feed;
