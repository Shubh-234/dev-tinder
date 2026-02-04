import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store/store";
import Body from "./components/Body";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Provider } from "react-redux";
import Profile from "./components/Profile";

function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter basename="/">
					<Routes>
						<Route path="/" element={<Body />}>
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/about" element={<div>About Page</div>} />
						</Route>
					</Routes>
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
