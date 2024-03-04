import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="p-2 flex justify-between border-b-2 border-slate-300">
			<Link to="/" className="italic text-xl font-bold">
				hire-the-artist
			</Link>

			<div className="flex space-x-2">
				<Link to="/signin">
					<button className="bg-slate-700 text-white px-3 py-1 rounded hover:bg-slate-600">
						Sign In
					</button>
				</Link>

				<Link to="/signup">
					<button className="bg-slate-700 text-white px-3 py-1 rounded hover:bg-slate-600">
						Sign Up
					</button>
				</Link>
			</div>
		</header>
	);
}

export default Header;
