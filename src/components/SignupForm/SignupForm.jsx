import React, { Component } from 'react';
import styles from './SignupForm.module.css';
import userService from '../../utils/userService';
import GDPR from '../GDPR/GDPR';


class SignupForm extends Component {

    state = this.getInitialState();

    getInitialState() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConf: '',
            notUsCitizen: false,
            termsConditions: false,
            usCitizenIsVisible: false,
            termsConditionsIsVisible: false
        };
    }

    isFormValid = () => {
        return (
            this.state.firstName &&
            this.state.lastName &&
            this.state.email &&
            this.state.password &&
            this.state.termsConditions &&
            this.state.password === this.state.passwordConf

        );
    }

    handleChange = e => {
        console.log(e.target)
        if (e.target.name === "notUsCitizen") {
            this.setState((prevState) => ({ usCitizenIsVisible: !prevState.usCitizenIsVisible }))
        }
        this.setState({
            ...{ [e.target.name]: e.target.value },
            ...{ termsConditions: e.target.checked },
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        if (!this.isFormValid()) return;
        try {
            const { firstName, lastName, email, password, notUsCitizen, termsConditions } = this.state;
            await userService.signup({ firstName, lastName, email, password, notUsCitizen, termsConditions });
            this.setState(this.getInitialState(), () => {
                this.props.history.push('/')
            });
        } catch (error) {
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                passwordConf: '',
                error: error.message
            })
        }
    }

    render() {
        const countries = this.state.usCitizenIsVisible ? <div>
            Please select country.
            <select value={this.state.notUsCitizen} onChange={this.handleChange}>
                <option value="uk">United Kingdom</option>
                <option value="germany">Germany</option>
                <option value="canada">Canada</option>
                <option value="mexico">Mexico</option>
            </select>
        </div> : null
        const container = document.createElement("div");
        document.body.appendChild(container);
        return (
            <section className={styles.section}>
                {
                    this.state.error && <p>{this.state.error}</p>
                }
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Sign Up Form</legend>
                        <label htmlFor="schoolName">School Name</label>
                        <select value={this.state.schoolName} onChange={this.handleChange}>
                            <option value="bu">Boston University School of Law</option>
                            <option value="cnu">Christopher Newport University</option>
                            <option value="gmu">George Mason University</option>
                            <option value="hu">Harvard University School of Law</option>
                            <option value="ou">Oxford University</option>
                            <option value="su">Stanford University School of Law</option>
                            <option value="tu">Towson University</option>
                            <option value="umd">University of Maryland</option>
                        </select>

                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />

                        <label htmlFor="passwordConf">Password Confirmation</label>
                        <input
                            id="passwordConf"
                            name="passwordConf"
                            type="password"
                            value={this.state.passwordConf}
                            onChange={this.handleChange}
                        />
                        <a href="https://www.bloombergindustry.com/terms-of-service-subscription-products/">
                            Read the terms and conditions here.
                        </a>
                        <label htmlFor="termsConditions">Terms and Conditions</label>
                        <input
                            id="termsConditions"
                            name="termsConditions"
                            type="checkbox"
                            value={this.state.termsConditions}
                            checked={this.state.termsConditions}
                            onChange={this.handleChange} />

                        <label htmlFor="notUsCitizen">Not a Resident of the USA?</label>
                        <input
                            id="notUsCitizen"
                            name="notUsCitizen"
                            type="checkbox"
                            value={this.state.notUsCitizen}
                            checked={this.state.notUsCitizen}
                            onChange={this.handleChange}
                        />
                        <GDPR
                            value={this.state.notUsCitizen} onChange={this.handleChange}
                        />

                        <button disabled={!this.isFormValid()} type="submit">
                            Submit
                        </button>
                    </fieldset>
                </form>
            </section>
        );
    }
}

export default SignupForm;