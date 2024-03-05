import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
		<div className="text-center h-screen">
			<div className="border-2 p-2 rounded mt-12 inline-block">
				<form className=" flex gap-2 flex-col">
					<div>
						<input
							type="text"
							name="username"
							id="username"
							className="border-2"
							placeholder="Username"
							onChange={handleChange}
						/>
					</div>
					<div>
						<input
							type="email"
							name="email"
							id="email"
							className="border-2"
							placeholder="Email"
							onChange={handleChange}
						/>
					</div>
					<div>
						<input
							type="password"
							name="password"
							id="password"
							className="border-2"
							placeholder="Password"
							onChange={handleChange}
						/>
					</div>

					<button
						className="bg-slate-600 rounded text-white py-1"
						type="submit"
						onClick={handleSubmit}
						disabled={loading}
					>
						Submit
					</button>

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
