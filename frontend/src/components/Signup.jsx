import React from "react";
import { useState } from "react";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const requestOptions = {
			method: "POST",
			body: JSON.stringify({ firstName, lastName, email, password }),
			headers: { "Content-Type": "application/json" },
		};

		const response = await fetch(
			"http://localhost:7777/api/auth/signup",
			requestOptions,
		);
		const data = await response.json();
		console.log("response", data);
		alert(data.message);
	};
	return (
		<div className="min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 flex items-center justify-center px-4 py-12">
			<div className="card w-full max-w-md bg-base-100 shadow-2xl">
				<div className="card-body">
					{/* Header */}
					<div className="text-center mb-6">
						<h1 className="text-4xl font-bold text-primary mb-2">Dev-Tinder</h1>
						<p className="text-base-content/70">
							Welcome Aboard, Please Sign Up to Continue
						</p>
					</div>

					{/* Login Form */}
					<form onSubmit={handleSubmit} className="space-y-4">
						{/* Email Field */}
						<div className="form-control w-full">
							<label className="label" htmlFor="firstName">
								<span className="label-text font-medium">First Name</span>
							</label>
							<input
								type="text"
								id="firstName"
								placeholder="Enter your first name"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								className="input input-bordered input-primary w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
								required
							/>
							<label className="label" htmlFor="lastName">
								<span className="label-text font-medium">Last Name</span>
							</label>
							<input
								type="text"
								id="lastName"
								placeholder="Enter your last name"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								className="input input-bordered input-primary w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
								required
							/>
							<label className="label" htmlFor="email">
								<span className="label-text font-medium">Email</span>
							</label>
							<input
								type="email"
								id="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="input input-bordered input-primary w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
								required
							/>
						</div>

						{/* Password Field */}
						<div className="form-control w-full">
							<label className="label" htmlFor="password">
								<span className="label-text font-medium">Password</span>
							</label>
							<input
								type="password"
								id="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="input input-bordered input-primary w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
								required
							/>
						</div>

						{/* Login Button */}
						<div className="form-control mt-6">
							<button
								type="submit"
								className={`btn btn-primary w-full ${
									isLoading ? "loading" : ""
								}`}>
								{isLoading ? "Signing up..." : "Sign Up"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
