import React, { Component } from 'react';
import FormInput from './../forminput/forminput.component';
import CustomButton from './../custombutton/custombutton.component';
import classes from './signin.module.scss';
import { signInWithGoogle } from './../../firebase/firebase.utils';

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	onSubmitHandler = (ev) => {
		ev.preventDefault();
		this.setState({
			email: '',
			password: ''
		});
	};

	onChangeHandler = (ev) => {
		const { value, name } = ev.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div className={classes.signin}>
				<h2 className={classes.title}>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.onSubmitHandler}>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						required
						onChange={this.onChangeHandler}
						label="Email"
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						required
						onChange={this.onChangeHandler}
						label="Password"
					/>
					<div className={classes.buttons}>
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;