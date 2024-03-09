import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "../redux/user/userSlice";

function OAuth() {
	const auth = getAuth(app);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleGoogleClick = async () => {
		const provider = new GoogleAuthProvider();
		provider.setCustomParameters({ prompt: "select_account" });

		try {
			const resultsFromGoogle = await signInWithPopup(auth, provider);

			const res = await fetch("/api/auth/google", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: resultsFromGoogle.user.displayName,
					email: resultsFromGoogle.user.email,
					googlePhotoUrl: resultsFromGoogle.user.photoURL,
				}),
			});

			const data = await res.json();

			if (res.ok) {
				dispatch(signInSuccess(data));
				navigate("/");
			}
		} catch (error) {}
	};

	return (
		<button
			type="button"
			className="bg-lime-700 border-2 border-lime-700 rounded text-white py-1"
			onClick={handleGoogleClick}
		>
			Continue with Google
		</button>
	);
}

export default OAuth;
