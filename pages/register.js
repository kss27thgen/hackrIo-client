import React, { useState } from "react";
import Layout from "../components/Layout";

const register = () => {
	const [value, setValue] = useState({
		name: "",
		email: "",
		password: "",
		error: "",
		success: "",
		buttonText: "Register",
	});

	const handleChange = (name) => (e) => {
		setValue({
			...value,
			[name]: e.target.value,
			error: "",
			success: "",
			buttonText: "Register",
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ name, email, password });
	};

	const { name, email, password, error, success, buttonText } = value;

	const registerForm = () => (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<input
					type="text"
					className="form-control"
					placeholder="Type your name"
					value={name}
					onChange={handleChange("name")}
				/>
			</div>
			<div className="form-group">
				<input
					type="email"
					className="form-control"
					placeholder="Type your email"
					value={email}
					onChange={handleChange("email")}
				/>
			</div>
			<div className="form-group">
				<input
					type="password"
					className="form-control"
					placeholder="Type your password"
					value={password}
					onChange={handleChange("password")}
				/>
			</div>
			<div className="form-group">
				<button className="btn btn-outline-warning">
					{buttonText}
				</button>
			</div>
		</form>
	);

	return (
		<Layout>
			<div className="col-md-6 offset-md-3">
				<h2>Register</h2>
				<hr />
				{registerForm()}
				<hr />
			</div>
		</Layout>
	);
};

export default register;
