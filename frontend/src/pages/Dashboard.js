import React from "react";

//?importing Components--------->
import Base from "../components/Base";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
function Dashboard() {
	return (
		<div>
			<Base>
				<CreatePost />
				<Post />
				<Post />
				<Post />
			</Base>
		</div>
	);
}

export default Dashboard;
