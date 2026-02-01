import React from "react";
import { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleLogin = async (e) => {
		e.preventDefault();
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		};
		const response = (
			await fetch("http://localhost:7777/api/auth/login", requestOptions)
		).then((res) => res.json());
		console.log("response", response);
		setIsLoading(false);
		alert(response.message);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 flex items-center justify-center px-4 py-12">
			<div className="card w-full max-w-md bg-base-100 shadow-2xl">
				<div className="card-body">
					{/* Header */}
					<div className="text-center mb-6">
						<h1 className="text-4xl font-bold text-primary mb-2">Dev-Tinder</h1>
						<p className="text-base-content/70">
							Connect with fellow developers
						</p>
					</div>

					{/* Login Form */}
					<form onSubmit={handleLogin} className="space-y-4">
						{/* Email Field */}
						<div className="form-control w-full">
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
								placeholder="Enter your password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="input input-bordered input-primary w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
								required
							/>
							<label className="label">
								<a
									href="#"
									className="label-text-alt link link-hover link-primary">
									Forgot password?
								</a>
							</label>
						</div>

						{/* Login Button */}
						<div className="form-control mt-6">
							<button
								type="submit"
								className={`btn btn-primary w-full ${
									isLoading ? "loading" : ""
								}`}>
								{isLoading ? "Logging in..." : "Login"}
							</button>
						</div>
					</form>

					{/* Divider */}
					<div className="divider">OR</div>

					{/* Sign Up Link */}
					<div className="text-center">
						<p className="text-sm text-base-content/70">
							Don't have an account?{" "}
							<a href="#" className="link link-primary font-semibold">
								Sign up
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
