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
		<div className="h-screen text-center mt-36">
			<div className="border-2 border-black p-2 rounded inline-block">
				<h1 className="text-2xl text-left mb-2">Join</h1>

				<form className=" flex gap-2 flex-col" onSubmit={handleSubmit}>
					<div>
						<input
							type="text"
							name="username"
							id="username"
							className="border-2 p-1 rounded"
							placeholder="Username"
							onChange={handleChange}
						/>
					</div>
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
						className="px-4 py-1 border-2 border-black  bg-black text-white rounded"
						type="submit"
						disabled={loading}
					>
						Submit
					</button>

					<OAuth />

					<Link to="/signin" className="underline text-blue-600">
						Sign In
					</Link>
				</form>
			</div>
			{errorMessage && <div className="text-red-500">{errorMessage}</div>}
		</div>
	);
}

export default Signup;
