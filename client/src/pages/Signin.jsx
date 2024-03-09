import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	signInStart,
	signInSuccess,
	signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

function Signin() {
	const [formData, setFormData] = useState({});
	const { loading, error: errorMessage } = useSelector((state) => state.user);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!formData.email || !formData.password) {
			return dispatch(signInFailure("Please fill out all fields!"));
		}

		try {
			dispatch(signInStart());

			const res = await fetch("api/auth/signin", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			const data = await res.json();

			if (data.success === false) {
				dispatch(signInFailure(data.message));
			}

			if (res.ok) {
				dispatch(signInSuccess(data));
				navigate("/");
			}
		} catch (error) {
			dispatch(signInFailure(error.message));
		}
	};

	return (
		<div className="text-center h-screen mt-36">
			<div className="border-2 border-black p-2 rounded inline-block">
				<h1 className="text-2xl text-left mb-2">Sign In</h1>

				<form className=" flex gap-2 flex-col" onSubmit={handleSubmit}>
					<div>
						<input
							type="email"
							name="email"
							id="email"
							className="border-2 p-1 rounded"
							placeholder="Email"
							onChange={handleChange}
						/>
					</div>
					<div>
						<input
							type="password"
							name="password"
							id="password"
							className="border-2 p-1 rounded"
							placeholder="Password"
							onChange={handleChange}
						/>
					</div>

					<button
						className="py-1 border-2 border-black  bg-black text-white rounded"
						type="submit"
						disabled={loading}
					>
						Submit
					</button>

					<OAuth />

					<Link to="/signup" className="underline text-blue-600">
						Sign Up
					</Link>
				</form>
			</div>
			{errorMessage && <div className="text-red-500">{errorMessage}</div>}
		</div>
	);
}

export default Signin;
