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
		<div className="h-screen flex justify-center items-center flex-col">
			<div className="px-10 py-8 rounded-xl bg-[#222831] text-white">
				<div className="mb-6">
					<h1 className="text-4xl font-medium text-center mb-2">
						Sign In
					</h1>
					<p className="text-xl text-gray-500 text-center">
						Hey, Enter the details to get sign in to <br /> your
						account.
					</p>
				</div>

				<form className="flex flex-col gap-8" onSubmit={handleSubmit}>
					<div className="flex flex-col gap-3">
						<div>
							<input
								type="email"
								name="email"
								id="email"
								className="auth-input"
								placeholder="Email"
								onChange={handleChange}
							/>
						</div>
						<div>
							<input
								type="password"
								name="password"
								id="password"
								className="auth-input"
								placeholder="Password"
								onChange={handleChange}
							/>
						</div>
					</div>

					<p className="text-xl text-right hover:underline cursor-pointer -my-2">
						Forgot Password?
					</p>

					<div className="flex flex-col gap-3">
						<button
							className="w-full text-2xl bg-white text-black rounded-md px-2 py-3 font-medium"
							type="submit"
							disabled={loading}
						>
							Sign In
						</button>

						<p className="text-xl text-center">Or</p>

						<OAuth />
					</div>

					<p className="text-xl text-gray-500 text-center -mt-2">
						Already have an account?{" "}
						<Link to="/signup" className="hover:underline text-white">
							Sign Up
						</Link>
					</p>
				</form>
			</div>
			{errorMessage && <div className="text-red-500">{errorMessage}</div>}
		</div>
	);
}

export default Signin;
