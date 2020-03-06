import React, { Component } from 'react';

import styles from './LoginForm.module.css';

class LoginForm extends Component {
    state = this.getInitialState();

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        //we pass the data from state to a service module
        //the service module would make an AJAX call to 
        //our server and create a new record in the database
        //now we clear our form
        this.setState(this.getInitialState());
    }

    getInitialState() {
        return {
            email: '',
            password: '',
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <fieldset className={styles.fieldset}>
                    <legend>Login</legend>
                    <label htmlFor="email">Email Address</label>
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

                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default LoginForm;