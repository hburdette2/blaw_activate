import React, { Component } from 'react';
import styles from './SchoolForm.module.css';
import schoolService from '../../utils/schoolService';

class SchoolForm extends Component {
    state = this.getInitialState();
    getInitialState() {
        return {
            schoolName: '',
            schoolCountry: '',
            error: ''
        };
    }
    handleChange = e => {
        this.setState({
            error: '',
            ...{ [e.target.name]: e.target.value }
        })
    }
    handleSubmit = async e => {
        e.preventDefault();
        if (!this.isFormValid()) return;
        try {
            const { schoolName, schoolCountry } = this.state;

            await schoolService.create({ schoolName, schoolCountry });
            this.setState(this.getInitialState(), () => {
                this.props.handleGetSchools();
                this.props.history.push('/schools');
            });
        } catch (error) {
            this.setState({
                schoolName: '',
                schoolCountry: '',
                error: error.message
            })
        }
    }
    isFormValid() {
        return (
            this.state.schoolName &&
            this.state.schoolCountry);
    }
    render() {
        return (
            <section className={styles.section}>
                {
                    this.state.error && <p>{this.state.error}</p>
                }
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>New School Form</legend>
                        <label htmlFor="schoolName">Academic Institution Name</label>
                        <input
                            type="schoolName"
                            id="schoolName"
                            value={this.state.schoolName}
                            name="schoolName"
                            onChange={this.handleChange} />
                        <label htmlFor="schoolCountry">School Location</label>
                        <input
                            type="schoolCountry"
                            id="schoolCountry"
                            value={this.state.schoolCountry}
                            name="schoolCountry"
                            onChange={this.handleChange}
                        />
                        <button type="submit" disabled={!this.isFormValid()}>Add School</button>
                    </fieldset>
                </form>
            </section>
        );
    }
}
export default SchoolForm;