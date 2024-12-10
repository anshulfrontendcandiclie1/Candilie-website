import { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import itServices from "../assets/itServices.mp4";
import tick from "../assets/tick.svg";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import twitter from "../assets/twitter.svg";
import Left from "../compo/Left";

const LoginPage = ({ toggleForm }) => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
	const [userName, setUserName] = useState(""); // State to store the capitalized username

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const emailValidation = (email) => {
		const regEx = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?$/g;
		return regEx.test(email);
	};

	const passwordValidation = (password) => {
		const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		return regEx.test(password);
	};

	const handleSubmit = () => {
		const { email, password } = formData;

		if (!email || !password) {
			toast.error("All fields are required to proceed", {
				duration: 2000,
			});
		} else if (!emailValidation(email)) {
			toast.error("Enter a valid email to proceed", {
				duration: 2000,
			});
		} else if (!passwordValidation(password)) {
			toast.error(
				"Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character.",
				{
					duration: 3000,
				}
			);
		} else {
			// Extract first part of email and capitalize the first letter
			const extractedName = email.split("@")[0];
			const displayName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);

			setUserName(displayName); // Set the capitalized username in state
			setIsModalVisible(true); // Show modal only after form submission
		}
	};

	const closeModal = () => {
		setIsModalVisible(false); // Hide modal when closed
		setTimeout(() => {
			toggleForm();
		}, 100);
	};

	return (
		<>
			<Toaster position="top-center" reverseOrder={false} />
			<section className="relative px-5 py-12 w-full flex justify-center items-center h-auto">
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
					<div className="flex flex-row justify-between items-center bg-black/25 backdrop-blur-md p-8 rounded-lg shadow-lg space-y-4 shadow-black w-[80%]">
						<div className="w-[51%] h-[700px]">
							<Left />
						</div>

						<div className="flex flex-col justify-start items-center form p-[17px] gap-[16px] w-[45%]">
							<h1 className="text-center text-white text-[31px] font-[800] mb-[20px]">
								Login to <span className="text-[#ff6a00]">CandiClie</span>
							</h1>


							<input
								type="email"
								name="email"
								value={formData.email}
								placeholder="Email"
								className="w-full p-2 border-[1px] border-[#d4d4d4] rounded-md transition duration-300 bg-[#202020] hover:bg-[#191818] text-[#d4d4d4]"
								onChange={handleChange}
								required
							/>

							<input
								type="password"
								name="password"
								value={formData.password}
								placeholder="Password"
								className="w-full p-2 border-[1px] border-[#d4d4d4] rounded-md transition duration-300 bg-[#202020] hover:bg-[#191818] text-[#d4d4d4]"
								onChange={handleChange}
								required
							/>

							<div className="w-full flex flex-row justify-center items-center gap-[10px] text-[#d5d4d4] font-[500]">
								<hr className="border-[#d5d4d4] w-full h-[0.5px] my-[10px]" />
								or
								<hr className="border-[#d5d4d4] w-full h-[0.5px] my-[10px]" />
							</div>


							<div className="flex flex-col justify-start items-center w-full gap-[16px]">
								<Link className="flex flex-row justify-center gap-[30px] items-center w-full border-[1px] border-[#d4d4d4] p-[10px] rounded-3xl font-[600] text-[#d4d4d4] hover:scale-105 transition duration-300 bg-[#202020] hover:bg-[#191818]">
									<img src={google} alt="" className="w-[27px]" />
									Continue with Google
								</Link>
								{/* <Link className="flex flex-row justify-center gap-[30px] items-center w-full border-[1px] border-[#d4d4d4] p-[10px] rounded-3xl font-[600] text-[#d4d4d4] hover:scale-105 transition duration-300 bg-[#202020] hover:bg-[#191818]">
									<img src={apple} alt="" className="w-[27px]" />
									Continue with Apple
								</Link>
								<Link className="flex flex-row justify-center gap-[30px] items-center w-full border-[1px] border-[#d4d4d4] p-[10px] rounded-3xl font-[600] text-[#d4d4d4] hover:scale-105 transition duration-300 bg-[#202020] hover:bg-[#191818]">
									<img src={twitter} alt="" className="w-[27px]" />
									Continue with Twitter
								</Link>
								<Link className="flex flex-row justify-center gap-[30px] items-center w-full border-[1px] border-[#d4d4d4] p-[10px] rounded-3xl font-[600] text-[#d4d4d4] hover:scale-105 transition duration-300 bg-[#202020] hover:bg-[#191818]">
									Continue with phone number
								</Link> */}
							</div>





							<button
								onClick={handleSubmit}
								className="w-full bg-[#ff6a00] hover:bg-[#ff5500] text-white font-bold py-2 rounded transition duration-300 hover:scale-105"
							>
								Login
							</button>

							<Link to="/forgot-password" className="text-white flex flex-row justify-end hover:underline hover:text-[#ff6a00] font-[500] transition duration-300">
								Forgot Password?
							</Link>

							<p className="text-white text-right">Don't have an account?
								<span> </span>
								<Link to="/signup" className="hover:underline hover:text-[#ff6a00] font-[500] transition duration-300">Register Here</Link>
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Welcome Modal */}
			{isModalVisible && (
				<dialog
					id="welcomeModal"
					className="fixed z-20 top-[280px] left-[380px] transform -translate-x-1/2 -translate-y-1/2 w-[35%] h-[40%] bg-[black] rounded-lg modal bg-opacity-50 backdrop-blur-sm border-[1px] border-[#ff6a00] flex flex-col justify-center items-center shadow-lg shadow-[black]"
				>
					<div className="w-[95%] bg-[#202020e9] h-[91%] rounded-lg modal-box flex flex-col justify-center items-center gap-[20px]">
						<div className="flex flex-col px-[10px] pt-[10px] justify-center items-center gap-3">
							<img src={tick} alt="tick-icon" className="w-[35px]" />
							<h3 className="text-[white] font-bold text-center text-2xl">Welcome, <span id="userNameDisplay">{userName}</span>!</h3>
							<p className="text-[#a4a4a4] text-center">Thank you for logging in to <span className="text-[#ff6a00]">CodeVentures!</span></p>
						</div>
						<div className="modal-action w-[94%] p-[10px]">
							<button className="w-full bg-[#ff6a00] hover:bg-[#ff5500] text-white font-bold p-1 rounded transition duration-300 hover:scale-105" onClick={closeModal}>
								Proceed
							</button>
						</div>
					</div>
				</dialog>
			)}
		</>
	);
};

export default LoginPage;
