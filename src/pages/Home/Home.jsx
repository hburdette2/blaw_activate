import React from 'react';
import styles from './Home.module.css';
import { getCases } from "../../services/case-api";

class Home extends React.Component {
    componentDidMount = () => {
        this.props.handleGetCases()
    }
    render() {
        return (
            <main>
                <h2>Academic Home Page</h2>
                <h3>Cases</h3>
                {console.log(this.props.cases)}
                {
                    this.props.cases.length > 0
                        ?
                        this.props.cases.map((c, idx) => (
                            <section key={idx}>
                                <h2>{c.name}</h2>
                                <h3>{c.docket_number}</h3>
                                <h4>{c.decision_date}</h4>
                            </section>
                        ))
                        : 'Loading...'

                }
            </main>
        );
    };
}
export default Home;