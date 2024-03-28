import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

function Signup() {
	const [formData, setFormData] = useState({});
	const [errorMessage, setErrorMessage] = useState(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!formData.username || !formData.email || !formData.password) {
			return setErrorMessage("Please fill out all fields!");
		}

		try {
			setLoading(true);
			setErrorMessage(null);

			const res = await fetch("api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			const data = await res.json();

			if (data.success === false) {
				return setErrorMessage(data.message);
			}

			setLoading(false);

			if (res.ok) {
				navigate("/signin");
			}
		} catch (error) {
			setErrorMessage(error.message);
			setLoading(false);
		}
	};

	return (
		<div className="h-screen flex justify-center items-center">
			<div className="px-10 py-8 rounded-xl bg-[#222831] text-white">
				<div className="mb-6">
					<h1 className="text-4xl font-medium text-center mb-2">
						Join
					</h1>
					<p className="text-xl text-gray-400 text-center">
						Hey, Enter the details to get sign in to <br /> your
						account.
					</p>
				</div>

				<form className="flex flex-col gap-8" onSubmit={handleSubmit}>
					<div className="flex flex-col gap-3">
						<div>
							<input
								type="text"
								name="username"
								id="username"
								className="rounded-md w-full text-2xl px-2 py-3 bg-gray-500/30 border-2 border-gray-500"
								placeholder="Username"
								onChange={handleChange}
							/>
						</div>
						<div>
							<input
								type="email"
								name="email"
								id="email"
								className="rounded-md w-full text-2xl px-2 py-3 bg-gray-500/30 border-2 border-gray-500"
								placeholder="Email"
								onChange={handleChange}
							/>
						</div>
						<div>
							<input
								type="password"
								name="password"
								id="password"
								className="rounded-md w-full text-2xl px-2 py-3 bg-gray-500/30 border-2 border-gray-500"
								placeholder="Password"
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className="flex flex-col gap-3">
						<button
							className="w-full text-2xl bg-white text-black rounded-md px-2 py-3 font-medium"
							type="submit"
							disabled={loading}
						>
							Sign Up
						</button>

						<div className="relative h-full">
							<p className="text-xl text-center">Or</p>
						</div>

						<OAuth />
					</div>

					<p className="text-xl text-gray-500 text-center -mt-2">
						Already have an account?{" "}
						<Link to="/signin" className="underline text-white">
							Sign In
						</Link>
					</p>
				</form>
			</div>
			{/* {errorMessage && <div className="text-red-500">{errorMessage}</div>} */}
		</div>
	);
}

export default Signup;
