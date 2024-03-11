import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Header() {
	const { currentUser } = useSelector((state) => state.user);
	const [dropdown, setDropdown] = useState(false);

	return (
		<header className="px-8 py-4 flex items-center justify-between border-b-2 border-black text-lg">
			<div>
				<Link to="/" className="text-2xl">
					manjhss
				</Link>
			</div>

			<nav className="flex gap-10 items-center">
				<ul className="hidden gap-10">
					<li>
						<Link to={"/explore"}>Explore</Link>
					</li>
					<li className="flex items-center cursor-pointer">
						Community
						<span class="material-symbols-rounded">
							arrow_drop_down
						</span>
					</li>
					<li>
						<Link to={"/pricing"}>Pricing</Link>
					</li>
					<li>
						<Link to={"/about"}>About</Link>
					</li>
				</ul>

				{currentUser ? (
					<div className="relative">
						<div
							className="border-2 border-black w-10 aspect-auto  overflow-hidden rounded-full cursor-pointer"
							onClick={() => {
								setDropdown(!dropdown);
							}}
						>
							<img src={currentUser.profilePicture} alt="" />
						</div>

						{dropdown && (
							<div className="absolute border-2 border-black p-4 right-0 mt-2 rounded bg-white flex flex-col gap-4">
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
					<div className="flex gap-2">
						<button>
							<Link
								to="/signin"
								className="px-4 py-1 border-2 border-black rounded-full block hover:bg-black hover:text-white"
							>
								Sign In
							</Link>
						</button>

						<button>
							<Link
								to="/signup"
								className="px-4 py-1 border-2 border-black  bg-black block text-white rounded-full"
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
