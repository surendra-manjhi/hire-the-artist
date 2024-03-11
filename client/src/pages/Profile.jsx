import { useSelector } from "react-redux";

function Profile() {
	const { currentUser } = useSelector((state) => state.user);

	return (
		<div>
			<div className="h-screen text-center mt-36">
				<div className="border-2 border-black p-2 rounded inline-block">
					<div className="flex justify-between items-center">
						<h1 className="text-2xl text-left mb-2">Profile</h1>

						<div className="">
							<span class="material-symbols-rounded text-red-500">
								delete
							</span>
							<span class="material-symbols-rounded">
								exit_to_app
							</span>
						</div>
					</div>

					<form
						className=" flex gap-2 flex-col"
						// onSubmit={handleSubmit}
					>
						<div className="border-2 border-black w-20 aspect-auto overflow-hidden rounded cursor-pointer">
							<img
								src={currentUser.profilePicture}
								alt="user-pic"
							/>
						</div>

						<div>
							<input
								value={currentUser.username}
								type="text"
								name="username"
								id="username"
								className="border-2 p-1 rounded"
								placeholder="Username"
								// onChange={handleChange}
							/>
						</div>
						<div>
							<input
								value={currentUser.email}
								type="email"
								name="email"
								id="email"
								className="border-2 p-1 rounded"
								placeholder="Email"
								// onChange={handleChange}
							/>
						</div>
						<div>
							<input
								type="password"
								name="password"
								id="password"
								className="border-2 p-1 rounded"
								placeholder="Password"
								// onChange={handleChange}
							/>
						</div>

						<button
							className="px-4 py-1 border-2 border-black  bg-black text-white rounded"
							type="submit"
							// disabled={loading}
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Profile;
