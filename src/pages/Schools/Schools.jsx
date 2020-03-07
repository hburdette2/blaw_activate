import React, { useState } from 'react';
import styles from './Schools.module.css';
import SchoolForm from '../../components/SchoolForm/SchoolForm';

//const [formVisible, setVisibility] = useState(false);

class Schools extends React.Component {
    componentDidMount = async () => {
        this.props.handleGetSchools();
    }

    render() {

        return (
            <main className={styles.Schools}>
                <h1>Academic Institutions</h1>

                {/* <button onClick={() => setVisibility(!formVisible)}>
                    {formVisible ? 'Hide Form' : 'Show Form'}
                </button>
                {formVisible && */}
                <SchoolForm {...this.props} />


                {/* {console.log(this.props)} */}

                {
                    this.props.school.map((s, idx) => (
                        <section key={idx}>
                            <h2>{s.schoolName.toUpperCase()}</h2>
                            <p>Country Located: {s.schoolCountry}</p>
                        </section>
                    ))
                }
            </main>
        );
    };
}

export default Schools;
