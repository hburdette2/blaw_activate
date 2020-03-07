import React, { useState } from 'react';
import styles from './Schools.module.css';
import SchoolForm from '../../components/SchoolForm/SchoolForm';


const Schools = (props) => {
    const [formVisible, setVisibility] = useState(false);
    return (
        <main className={styles.Schools}>
            <h1>Academic Institutions</h1>
            <button onClick={() => setVisibility(!formVisible)}>
                {formVisible ? 'Hide Form' : 'Show Form'}
            </button>
            {formVisible &&
                <SchoolForm {...props} />
            }
            {
                props.schools.map(({ schoolName, schoolCountry, _id }) => (
                    <section key={_id}>
                        <h2>{schoolName}</h2>
                        <p>Country Located: {schoolCountry}</p>
                    </section>
                ))
            }
        </main>
    );
};

export default Schools;
