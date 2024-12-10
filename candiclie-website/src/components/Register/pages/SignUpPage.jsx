import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import itServices from "../assets/itServices.mp4";
import tick from "../assets/tick.svg";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import twitter from "../assets/twitter.svg";
import LeftSignUp from "../compo/LeftSignUp";

const SignUpPage = ({ toggleForm }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: ""
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const nameValidation = (name) => {
		const regEx = /^[a-zA-Z\s]+$/;
		return regEx.test(name) && name.trim().length > 0;
	};

	const emailValidation = (email) => {
		const regEx = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z]{2,8})?$/g;
		return regEx.test(email);
	};

	const passwordValidation = (password) => {
		const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		return regEx.test(password);
	};

	const handleSubmit = () => {
		const { name, email, password, confirmPassword } = formData;

		if (!name || !email || !password || !confirmPassword) {
			toast.error("All fields are required to proceed", {
				duration: 2000,
			});
		} else if (!nameValidation(name)) {
			toast.error("Enter a valid name to proceed", {
				duration: 2000,
			});
		} else if (!emailValidation(email)) {
			toast.error("Enter a valid email to proceed", {
				duration: 2000,
			});
		} else if (!passwordValidation(password)) {
			toast.error("Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character.", {
				duration: 3000,
			});
		} else if (password !== confirmPassword) {
			toast.error("Passwords do not match", {
				duration: 2000,
			});
		} else {
			// Redirect to VerifyCode page with email in the state
			navigate("/verify-email", { state: { email } });
		}
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
							<LeftSignUp />
						</div>

						<div className="flex flex-col justify-start items-center form p-[17px] gap-[16px] w-[45%]">
							<h1 className="text-center text-white text-[37px] font-[800]">Create an <span className="text-[#ff6a00]">Account</span></h1>

							<p className="mb-[20px] text-[#c4c4c4]">
								Create your account to access our IT services and consulting solutions. Join now for tailored insights, project tracking, and expert guidance to empower your digital transformation. Start your journey with secure, seamless access to our platform.
							</p>

							<input
								type="text"
								name="name"
								value={formData.name}
								placeholder="Name"
								className="w-full p-2 border-[1px] border-[#d4d4d4] rounded-md transition duration-300 bg-[#202020] hover:bg-[#191818] text-[#d4d4d4]"
								onChange={handleChange}
								required
							/>

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

							<input
								type="password"
								name="confirmPassword"
								value={formData.confirmPassword}
								placeholder="Confirm Password"
								className="w-full p-2 border-[1px] border-[#d4d4d4] rounded-md transition duration-300 bg-[#202020] hover:bg-[#191818] text-[#d4d4d4]"
								onChange={handleChange}
								required
							/>

							<button
								onClick={handleSubmit}
								className="w-full bg-[#ff6a00] hover:bg-[#ff5500] text-white font-bold py-2 rounded transition duration-300 hover:scale-105"
							>
								Sign Up
							</button>

							<p className="text-white text-right">Already have an account?
								<span> </span>
								<Link to="/login" className="hover:underline hover:text-[#ff6a00] font-[500] transition duration-300">Login Here</Link>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SignUpPage;
