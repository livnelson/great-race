import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/Login.css"

function Login({ setUser }) {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [errors, setErrors] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const navigate = useNavigate()

	function handleSubmit(e) {
		e.preventDefault()
		setIsLoading(true)
		fetch("http://216.165.251.52:3333/login", {
			// mode: "no-cors",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		}).then((r) => {
			setIsLoading(false)
			if (r.ok) {
				r.json().then((userData) => {
					console.log(userData)
					setUser(userData)
					navigate('/home')
				})
			} 
			// else {
			// 	r.json().then((err) => setErrors(err.errors))
			// }
		})
	}

	function handleSignUp() {
		navigate("/")
	}

	return (
		<div className="login-page">
			<div></div>
			<div className="login-body">
				<div className="login-card">
					<img
						className="login-logo"
						src="https://res.cloudinary.com/dovuffpii/image/upload/v1679449812/mdays-great-race/monrovia-days-great-race-logo_yegeua.png"
						alt="MONROVIA-DAYS-GREAT-RACE-LOGO"
					/>
					<h1 className="login-greeting">Welcome Back!</h1>
					<span className="login-subgreeting">Sign In Here</span>
					<div className="login-form">
						<form onSubmit={handleSubmit}>
							<input
								className="input-field"
								placeholder="Enter Email"
								type="text"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<br />
							<input
								className="input-field"
								placeholder="Enter Password"
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
							<br />
							{isLoading ? "Loading..." : null}
							<button className="login-button" type="submit">
								Sign In
							</button>
						</form>
					</div>
					{errors ? <div className="errors">{errors}</div> : null}
					<div onClick={handleSignUp}>
						<p className="sign-up-link"> New to the Great Race?</p>
						<span className="sign-up-form-link">
							Click here to sign up now.
						</span>
					</div>
					<div className="space"></div>
				</div>
			</div>
		</div>
	)
}

export default Login