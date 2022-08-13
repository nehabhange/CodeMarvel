// import "./App.css";
import SignUpForm from "./components/SignUp";
import Contact from "./components/SignUp/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserType } from "./Pages";
import About from "./components/Stepper/About";
import Stage from "./components/Stepper/Stage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/user-type" element={<UserType />} />
				<Route exact path="/sign-up" element={<SignUpForm />} />
				<Route exact path="/contact" element={<Contact />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/stage" element={<Stage />} />
			</Routes>
		</div>
	);
}

export default App;
