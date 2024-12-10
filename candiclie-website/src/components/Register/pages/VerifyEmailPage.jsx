import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import itServices from "../assets/itServices.mp4";

const VerifyEmailPage = () => {
	const [code, setCode] = useState(["", "", "", "", "", ""]);
	const navigate = useNavigate();
	const location = useLocation();
	const { email } = location.state || {};

	const handleChange = (e, index) => {
		const value = e.target.value;
		if (/^[0-9]?$/.test(value)) { // Accept only single digits
			const newCode = [...code];
			newCode[index] = value;
			setCode(newCode);

			// Move focus to the next input if it's not the last one
			if (value && index < 5) {
				document.getElementById(`code-input-${index + 1}`).focus();
			}
		}
	};

	const handleKeyDown = (e, index) => {
		// Handle backspace to move focus to the previous input
		if (e.key === "Backspace" && !code[index] && index > 0) {
			document.getElementById(`code-input-${index - 1}`).focus();
		}
	};

	const handleNext = () => {
		if (code.includes("")) {
			toast.error("Please enter the complete verification code", { duration: 2000 });
		} else {
			const codeString = code.join("");
			// Here, verify the code with the backend (if needed)
			navigate("/introduction", { state: { email, code: codeString } });
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
						<h1 className="text-center text-white text-[31px] font-[800] mb-[20px]">Enter the <span className="text-[#ff6a00]">Six Digid Code</span></h1>
						<p className="text-center text-[#d4d4d4] text-sm mb-4">
							Enter the OTP code that we sent to your email <span className="text-[#ff6a00]">{email}.</span>
						</p>

						{/* Code Input Boxes */}
						<div className="flex space-x-2">
							{code.map((digit, index) => (
								<input
									key={index}
									id={`code-input-${index}`}
									type="text"
									value={digit}
									maxLength="1"
									className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
									onChange={(e) => handleChange(e, index)}
									onKeyDown={(e) => handleKeyDown(e, index)}
								/>
							))}
						</div>

						<button
							onClick={handleNext}
							className="mt-[40px] w-full bg-[#ff6a00] hover:bg-[#ff5500] text-white font-bold py-2 rounded transition duration-300 hover:scale-105"
						>
							Verify Email
						</button>

						{/* <p className="text-sm text-gray-400 mt-2">
							One more step to get started
						</p> */}
					</div>
				</div>
			</section>
		</>
	);
};

export default VerifyEmailPage;
