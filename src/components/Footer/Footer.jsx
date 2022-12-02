import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.copyright}>
                &copy; Д. С. Васютин, 2022
            </div>
        </footer>
    )
}

export default Footer;