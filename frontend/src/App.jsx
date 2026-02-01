import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
	return (
		<>
			<BrowserRouter basename="/">
				<Routes>
					<Route path="/" element={<Body />}>
						<Route path="/login" element={<div>Login Page</div>} />
						<Route path="/about" element={<div>About Page</div>} />
						<Route path="/profile" element={<div>Profile Page</div>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
