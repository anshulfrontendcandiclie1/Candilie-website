import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import LeftSignUp from "../compo/LeftSignUp";
import itServices from "../assets/itServices.mp4";

const options = ["I am a Student", "I am a Freelancer", "I am a Businessman", "I am an Explorer"];

const IntroductionPage = () => {
	const [selectedOption, setSelectedOption] = useState(null);
	const location = useLocation();
	const navigate = useNavigate();
	const { email } = location.state || {};
	// Extract the first word and capitalize the first letter
	const firstWordOfEmail = email ? email.split(/[@.]/)[0].charAt(0).toUpperCase() + email.split(/[@.]/)[0].slice(1) : "";

	const handleOptionClick = (option) => setSelectedOption(option);

	const handleGetStarted = () => {
		toast.success("Your account is created! You can now login.", { duration: 3000 });
		setTimeout(() => {
			navigate("/login");
		}, 3000); // Delay the navigation to allow toast display
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
						<h1 className="text-center text-white text-[31px] font-[800] mb-[20px]">Tell Us About <span className="text-[#ff6a00]">Yourself</span></h1>
						<p className="text-center text-[#d4d4d4] text-[17px] mb-4">
							Welcome, <span className="text-[#ff6a00]">{firstWordOfEmail}</span>! We'd love to learn more about you.
						</p>

						{/* Options */}
						<div className="flex flex-col space-y-2 w-full">
							{options.map((option, index) => (
								<div
									key={index}
									className={`w-full cursor-pointer py-3 px-4 text-center rounded-md font-semibold transition duration-300 ${
										selectedOption === option ? "border-[1.5px] bg-[#19181899] text-[#ff6a00] border-[#ff6a00]" : "bg-[#262626ae] hover:bg-[#19181899] text-[#d4d4d4]"
									}`}
									onClick={() => handleOptionClick(option)}
								>
									{option}
								</div>
							))}
						</div>

						{/* Get Started Button */}
						<button
							onClick={handleGetStarted}
							className="mt-6 w-full bg-[#ff6a00] hover:bg-[#ff5500] text-white font-bold py-2 rounded transition duration-300 hover:scale-105"
						>
							Get Started
						</button>

						<p className="text-[#e5e5e5]">You are ready to rock 🔥.</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default IntroductionPage;
