import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<BrowserRouter>
			<Header />

			<main>
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />

					<Route element={<PrivateRoute />}>
						<Route path="/dashboard" element={<Dashboard />} />
					</Route>
				</Routes>
			</main>

			<Footer />
		</BrowserRouter>
	);
}

export default App;
