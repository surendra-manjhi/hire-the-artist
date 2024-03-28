import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Header() {
	const { currentUser } = useSelector((state) => state.user);
	const [dropdown, setDropdown] = useState(false);

	return (
		<header className="px-16 py-3 flex items-center justify-between text-lg">
			<div>
				<Link to="/" className="text-2xl">
					<img src="/logo.png" alt="logo" />
				</Link>
			</div>

			<nav className="flex gap-10 items-center">
				<ul className="flex items-center gap-8 text-2xl">
					<li>
						<Link to={"/explore"}>Explore</Link>
					</li>
					<li className="flex items-center cursor-pointer">
						Community
						<span class="material-symbols-rounded text-4xl">
							arrow_drop_down
						</span>
					</li>
					<li>
						<Link to={"/pricing"}>Pricing</Link>
					</li>
				</ul>

				{currentUser ? (
					<div className="relative">
						<div
							className="border-2 border-black w-12 aspect-auto overflow-hidden rounded-full cursor-pointer"
							onClick={() => {
								setDropdown(!dropdown);
							}}
						>
							<img
								src={currentUser.profilePicture}
								alt="user-profile"
								className="border-2 border-white rounded-full"
							/>
						</div>

						{dropdown && (
							<div className="absolute border-2 border-black p-4 right-0 mt-2 rounded-lg bg-white flex flex-col gap-4">
								<div className="border-b-2 pb-2">
									<p>@{currentUser.username}</p>
									<p>{currentUser.email}</p>
								</div>

								<div className="gap-1 flex flex-col items-start">
									<button>
										<Link
											to="/profile"
											className="px-4 py-1 border-2 border-black rounded-full hover:bg-black block hover:text-white"
										>
											Profile
										</Link>
									</button>

									<button
										className="px-4 py-1 border-2 border-black
									bg-black text-white rounded-full"
									>
										Sign Out
									</button>
								</div>
							</div>
						)}
					</div>
				) : (
					<div className="flex gap-2 text-2xl">
						<button>
							<Link
								to="/signin"
								className="px-5 py-2 border-2 border-[#222831] rounded-full block hover:bg-[#222831] hover:text-white"
							>
								Sign In
							</Link>
						</button>

						<button>
							<Link
								to="/signup"
								className="px-5 py-2 border-2 border-[#222831] bg-[#222831] block text-white rounded-full"
							>
								Join
							</Link>
						</button>
					</div>
				)}
			</nav>
		</header>
	);
}

export default Header;
