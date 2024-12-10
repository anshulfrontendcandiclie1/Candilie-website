import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import itServices from "../assets/itServices.mp4";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const emailValidation = (email) => {
		const regEx = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?$/g;
		return regEx.test(email);
	};

	const handleNext = () => {
		if (!email) {
			toast.error("Please enter your email", { duration: 2000 });
		} else if (!emailValidation(email)) {
			toast.error("Please enter a valid email", { duration: 2000 });
		} else {
			// Navigate to the next step (OTP or verification page)
			navigate("/verify-code", { state: { email } });
		}
	};

	return (
		<>
			<Toaster position="top-center" reverseOrder={false} />
			<section className="relative px-5 py-12 w-full flex justify-center items-center h-screen">
				{/* Video Background */}
				<video 
					autoPlay 
					loop 
					muted 
					playsInline 
					className="absolute inset-0 w-full h-full object-cover"
				>
					<source src={itServices} type="video/mp4" />
					Your browser does not support the video tag.
				</video>

				{/* Overlay */}
				<div className="absolute inset-0 bg-black opacity-50"></div>

				{/* Content */}
				<div className="w-full relative z-10 flex flex-col items-center justify-center">
					<div className="flex flex-col justify-center items-center bg-black/25 backdrop-blur-md p-8 rounded-lg shadow-lg space-y-4 shadow-black w-[50%]">
						<h1 className="text-center text-white text-[31px] font-[800] mb-[20px]">Forgot Password</h1>

						<input
							type="email"
							name="email"
							value={email}
							placeholder="Enter your email"
							className="w-full p-2 border-[1px] border-[#d4d4d4] rounded-md transition duration-300 bg-[#202020] hover:bg-[#191818] text-[#d4d4d4]"
							onChange={(e) => setEmail(e.target.value)}
							required
						/>

						<button
							onClick={handleNext}
							className="w-full bg-[#ff6a00] hover:bg-[#ff5500] text-white font-bold py-2 rounded transition duration-300 hover:scale-105"
						>
							Next
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default ForgotPassword;
