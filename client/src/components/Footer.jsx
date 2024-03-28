function Footer() {
	return (
		<footer className="px-16 py-10 bg-[#222831] text-white">
			<div className="grid grid-cols-2 ">
				<div className="">
					<img
						src="/white-logo.png"
						alt="logo"
						className="w-16 mb-6"
					/>
					<p className="text-3xl font-medium text-gray-400">
						A platform which connects artist <br /> and commissioner
						at your <br /> fingertips ✨
					</p>
					<ul className="mt-6 flex gap-3 items-center">
						<li className="w-8">
							<img src="/sm_icons/insta.png" alt="" />
						</li>
						<li className="w-8">
							<img src="/sm_icons/pinterest.png" alt="" />
						</li>
						<li className="w-9">
							<img src="/sm_icons/discord.png" alt="" />
						</li>
					</ul>
				</div>
				<div className="flex justify-end gap-20 text-2xl">
					<div>
						<div className="text-3xl mb-4">Categories</div>
						<ul className="text-gray-500">
							<li>Designing</li>
							<li>Editing</li>
							<li>Music</li>
							<li>Harmoniumist</li>
							<li>Sunder</li>
						</ul>
					</div>
					<div>
						<div className="text-3xl mb-4">Pages</div>
						<ul className="text-gray-500">
							<li>Explore</li>
							<li>Community</li>
							<li>Pricing</li>
							<li>About</li>
						</ul>
					</div>
					<div>
						<div className="text-3xl mb-4">Legal</div>
						<ul className="text-gray-500">
							<li>Privacy</li>
							<li>Cookies</li>
							<li>Terms of use</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
