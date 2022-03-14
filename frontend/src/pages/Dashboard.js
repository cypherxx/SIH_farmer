import React from "react";

//?importing Components--------->
import Base from "../components/Base";
import CreatePost from "../components/CreatePost";
function Dashboard() {
	return (
		<div>
			<Base>
				<CreatePost />
			</Base>
		</div>
	);
}

export default Dashboard;
