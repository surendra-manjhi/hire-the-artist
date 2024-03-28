import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
	return (
		<div>
			<Header />

			<main>
				<section className="py-28 bg-[#222831] flex justify-center items-center flex-col gap-16 bg-[url('')] bg-no-repeat bg-center">
					<h1 className="text-5xl text-center font-medium text-white">
						Find & Hire <br /> Top 3% of Expert Artists <br /> on
					</h1>

					<div className="w-full flex items-center flex-col">
						<div className="w-[60%] flex items-center bg-white pr-4 rounded-lg overflow-hidden mb-6">
							<input
								type="text"
								className="py-3 px-4 w-full text-3xl focus:outline-none focus-visible:outline-none"
								placeholder="Find the artists..."
							/>
							<img
								className="w-8 h-8"
								src="/icons/search.png"
								alt="search-logo"
							/>
						</div>

						<div className="text-white text-2xl">
							<span>Popular: </span>
							<span className="font-light text-gray-400">
								Drawing, Coding, Harmoniumist
							</span>
						</div>
					</div>
				</section>

				<section className="px-16 py-14 bg-gray-300 flex justify-center items-center flex-col gap-14">
					<h2 className="text-5xl font-medium">
						Most Demanding Categories
					</h2>

					<div className="grid gap-4 grid-cols-5 font-medium">
						<div className="bg-white w-60 aspect-square rounded-lg flex justify-center items-center flex-col shadow-sm hover:bg-[#222831] hover:text-white cursor-pointer">
							<img src="/logo.png" alt="" className="mb-4" />
							<p className="text-2xl">Drawing</p>
							<p className="text-gray-500 font-normal">
								18+ artists
							</p>
						</div>
						<div className="bg-white w-60 aspect-square rounded-lg flex justify-center items-center flex-col shadow-sm hover:bg-[#222831] hover:text-white cursor-pointer">
							<img src="/logo.png" alt="" className="mb-4" />
							<p className="text-2xl">Singer</p>
							<p className="text-gray-500 font-normal">
								18+ artists
							</p>
						</div>
						<div className="bg-white w-60 aspect-square rounded-lg flex justify-center items-center flex-col shadow-sm hover:bg-[#222831] hover:text-white cursor-pointer">
							<img src="/logo.png" alt="" className="mb-4" />
							<p className="text-2xl">Writer</p>
							<p className="text-gray-500 font-normal">
								18+ artists
							</p>
						</div>
						<div className="bg-white w-60 aspect-square rounded-lg flex justify-center items-center flex-col shadow-sm hover:bg-[#222831] hover:text-white cursor-pointer">
							<img src="/logo.png" alt="" className="mb-4" />
							<p className="text-2xl">V8 Engine</p>
							<p className="text-gray-500 font-normal">
								18+ artists
							</p>
						</div>
						<div className="bg-white w-60 aspect-square rounded-lg flex justify-center items-center flex-col shadow-sm hover:bg-[#222831] hover:text-white cursor-pointer">
							<img src="/logo.png" alt="" className="mb-4" />
							<p className="text-2xl">Poeter</p>
							<p className="text-gray-500 font-normal">
								18+ artists
							</p>
						</div>
						<div className="bg-white w-60 aspect-square rounded-lg flex justify-center items-center flex-col shadow-sm hover:bg-[#222831] hover:text-white cursor-pointer">
							<img src="/logo.png" alt="" className="mb-4" />
							<p className="text-2xl">Prompt</p>
							<p className="text-gray-500 font-normal">
								18+ artists
							</p>
						</div>
						<div className="bg-white w-60 aspect-square rounded-lg flex justify-center items-center flex-col shadow-sm hover:bg-[#222831] hover:text-white cursor-pointer">
							<img src="/logo.png" alt="" className="mb-4" />
							<p className="text-2xl">AI</p>
							<p className="text-gray-500 font-normal">
								18+ artists
							</p>
						</div>
						<div className="bg-white w-60 aspect-square rounded-lg flex justify-center items-center flex-col shadow-sm hover:bg-[#222831] hover:text-white cursor-pointer">
							<img src="/logo.png" alt="" className="mb-4" />
							<p className="text-2xl">Maya 3D</p>
							<p className="text-gray-500 font-normal">
								18+ artists
							</p>
						</div>
						<div className="bg-white w-60 aspect-square rounded-lg flex justify-center items-center flex-col shadow-sm hover:bg-[#222831] hover:text-white cursor-pointer">
							<img src="/logo.png" alt="" className="mb-4" />
							<p className="text-2xl">Blender</p>
							<p className="text-gray-500 font-normal">
								18+ artists
							</p>
						</div>
						<div className="bg-white w-60 aspect-square rounded-lg flex justify-center items-center flex-col shadow-sm hover:bg-[#222831] hover:text-white cursor-pointer">
							<span class="material-symbols-rounded text-5xl font-medium">
								arrow_forward_ios
							</span>
						</div>
					</div>
				</section>

				<section className="px-16 py-14 bg-white grid grid-cols-2 place-items-center gap-10">
					<div>
						<img src="/artists.png" alt="" />
					</div>

					<div className="flex flex-col items-start gap-12 text-2xl">
						<h2 className="text-5xl font-medium">
							Get over 50,000+ <br /> talented artists <br /> in
						</h2>

						<p className=" text-gray-500">
							A full hybrid workforce management tools are yours
							to
							<br /> use, as well as access to our top 1% of
							talent.
						</p>

						<ul>
							<li className="flex items-center font-medium gap-4">
								<span class="material-symbols-rounded font-bold text-3xl text-green-600">
									done
								</span>
								Seamless searching
							</li>
							<li className="flex items-center font-medium gap-4">
								<span class="material-symbols-rounded font-bold text-3xl text-green-600">
									done
								</span>
								Get top 3% experts for your work
							</li>
							<li className="flex items-center font-medium gap-4">
								<span class="material-symbols-rounded font-bold text-3xl text-green-600">
									done
								</span>
								Protected payments system
							</li>
						</ul>

						<button className="px-5 py-2 border-2 border-[#222831] bg-[#222831] text-white rounded-full mt-4">
							Be an Artist
						</button>
					</div>
				</section>

				<section className="px-16 py-14 bg-gray-300 flex justify-center items-center flex-col gap-14">
					<h2 className="text-5xl font-medium">How it's work?</h2>

					<div className="w-full flex justify-around items-center font-medium">
						<div className="rounded-lg flex justify-center items-center flex-col gap-2 mt-24">
							<img
								src="/icons/batman.png"
								alt=""
								className="mb-6 w-24"
							/>
							<p className="text-2xl">Create an account</p>
							<p className="text-gray-500 font-normal text-lg text-center">
								It's very easy to open an account <br /> and
								start you journey.
							</p>
						</div>
						<div className="rounded-lg flex justify-center items-center flex-col gap-2">
							<img
								src="/icons/docs.png"
								alt=""
								className="mb-6 w-24"
							/>
							<p className="text-2xl">Complete your profile</p>
							<p className="text-gray-500 font-normal text-lg text-center">
								Complete your profile with all the info <br />{" "}
								to get attention of clients.
							</p>
						</div>
						<div className="rounded-lg flex justify-center items-center flex-col gap-2 mt-24">
							<img src="/logo.png" alt="" className="mb-6 w-14" />
							<p className="text-2xl">Hire / Be an Artist</p>
							<p className="text-gray-500 font-normal text-lg text-center">
								Hire or Be an artist in <br /> a single click.
							</p>
						</div>
					</div>
				</section>

				<section className="px-16 py-14 bg-white flex justify-center items-center flex-col gap-14">
					<h2 className="text-5xl font-medium">Trusted by Users</h2>

					<div>
						<img src="/reviews.png" alt="" />
					</div>

					<button className="px-5 py-2 border-2 border-[#222831] bg-[#222831] block text-white text-2xl rounded-full">
						Show more
					</button>
				</section>
			</main>

			<Footer/>
		</div>
	);
}

export default Home;
