import React from "react";
import style from "./Signup.module.css";

import SignupForm from '../../components/SignupForm/SignupForm';
const Signup = (props) => {
    return (
        <main>
            <SignupForm {...props} />
        </main>
    );
};
export default Signup;