import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import itServices from "../assets/itServices.mp4";

const ResetPassword = () => {
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const { email } = location.state || {};

	const passwordValidation = (password) => {
		const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		return regEx.test(password);
	};

	const handlePasswordUpdate = () => {
		if (!newPassword || !confirmPassword) {
			toast.error("Please fill in both fields", { duration: 2000 });
		} else if (newPassword !== confirmPassword) {
			toast.error("Passwords do not match", { duration: 2000 });
		} else if (!passwordValidation(newPassword)) {
			toast.error(
				"Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character.",
				{ duration: 3000 }
			);
		} else {
			toast.success("Password updated successfully! You can now log in.", { duration: 3000 });
			setTimeout(() => navigate("/login"), 3000);
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
						<h2 className="text-center text-white text-[31px] font-[800] mb-[20px]">Reset Password</h2>

						<input
							type="password"
							placeholder="New Password"
							value={newPassword}
							onChange={(e) => setNewPassword(e.target.value)}
							required
							className="w-full p-2 border-[1px] border-[#d4d4d4] rounded-md transition duration-300 bg-[#202020] hover:bg-[#191818] text-[#d4d4d4]"
						/>

						<input
							type="password"
							placeholder="Confirm New Password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
							className="w-full p-2 border-[1px] border-[#d4d4d4] rounded-md transition duration-300 bg-[#202020] hover:bg-[#191818] text-[#d4d4d4]"
						/>

						<button
							onClick={handlePasswordUpdate}
							className="w-full bg-[#ff6a00] hover:bg-[#ff5500] text-white font-bold py-2 rounded transition duration-300 hover:scale-105"
						>
							Update Password
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default ResetPassword;
