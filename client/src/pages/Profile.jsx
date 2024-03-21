import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

function Profile() {
	const { currentUser } = useSelector((state) => state.user);
	const [imgFile, setImgFile] = useState(null);
	const [imgFileUrl, setImgFileUrl] = useState(null);
	const [formData, setFormData] = useState({});

	const [imageFileUploadProgress, setImageFileUploadProgress] =
		useState(null);
	const [imageFileUploadError, setImageFileUploadError] = useState(null);

	console.log(imageFileUploadError, imageFileUploadProgress, imgFileUrl);

	const filePickerRef = useRef();

	const handleImgChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			setImgFile(e.target.files[0]);
			setImgFileUrl(URL.createObjectURL(file));
		}
	};

	// useEffect(() => {
	// 	if (imgFile) {
	// 		uploadImage();
	// 	}
	// }, [imgFile]);

	const uploadImage = async () => {
		const storage = getStorage(app);
		const fileName = new Date().getTime() + imgFile.name;
		const storageRef = ref(storage, fileName);

		const uploadTask = uploadBytesResumable(storageRef, imgFile);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;

				setImageFileUploadProgress(progress.toFixed(0));
			},
			(error) => {
				setImageFileUploadError(
					"Could not upload image (File must be less than 2MB or Image file type)"
				);
				setImgFile(null);
				setImgFileUrl(null);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setImgFileUrl(downloadURL);
					setFormData({ ...formData, profilePicture: downloadURL });
				});
			}
		);
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	console.log(formData);

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
						<div
							className="border-2 border-black w-20 aspect-auto overflow-hidden rounded cursor-pointer"
							onClick={() => filePickerRef.current.click()}
						>
							<input
								hidden
								type="file"
								accept="image/*"
								onChange={handleImgChange}
								ref={filePickerRef}
							/>
							<img
								src={imgFileUrl || currentUser.profilePicture}
								alt="user-pic"
								className="border-2 border-white rounded"
							/>
						</div>

						<div>
							<input
								defaultValue={currentUser.username}
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
								defaultValue={currentUser.email}
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
							type="button"
							// disabled={loading}
							onClick={uploadImage}
						>
							Update
						</button>
					</form>
				</div>

				{imageFileUploadError && (
					<div className="text-red-500 mt-4">
						{imageFileUploadError}
					</div>
				)}
			</div>
		</div>
	);
}

export default Profile;
