import React, { useState } from "react";
import ButtonAppBar from "./controllers/appbar";
import Page1 from "./controllers/page1";
import "./App.css";
import Next from "./controllers/next";
import Prev from "./controllers/prev";
import Question1 from "./controllers/question1";
import Question2 from "./controllers/question2";
import Question3 from "./controllers/question3";
import Question4 from "./controllers/question4";
import Question5 from "./controllers/question5";

let arr = [
	<Page1 />,
	<Question1 />,
	<Question2 />,
	<Question3 />,
	<Question4 />,
	<Question5 />,
];

function App() {
	let [quesNo, SetQuesNo] = useState(0);

	return (
		<div>
			<ButtonAppBar />
			<div className="main">
				<div className="wrapper">
					{arr[quesNo]}
					<div className="navi">
						<Next quesNo={quesNo} SetQuesNo={SetQuesNo} />
						<Prev quesNo={quesNo} SetQuesNo={SetQuesNo} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
