import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) => {
    return (
        <footer className={styles.footer}>
            <div className="copyright">Copyright &copy; Bureau of National Affairs, Inc. {new Date().getFullYear()}</div>
            <div className="custsvc">
                <ul>
                    <li>24/7 Help Desk</li>
                    <li>
                        <a href="tel:1-888-560-2529">888.560.2529</a>
                    </li>
                    <li>
                        <a href="mailto:help@bloomberglaw.com" target="_blank">
                            help@bloomberglaw.com</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;