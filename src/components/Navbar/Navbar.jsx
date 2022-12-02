import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
      <nav className={classes.nav}>
      <div className={classes.link}>
        <a href='/Profile'>Profile</a>
      </div>
      <div className={classes.link}>
        <a href='/Dialogs'>Messages</a>
      </div>
      <div className={classes.link}>
        <a href='/News'>News</a>
      </div>
      <div className={classes.link}>
        <a href='/Music'>Music</a>
      </div>
      <div className={classes.link}>
        <a href='/Settings'>Settings</a>
      </div>
    </nav>
    );
}

export default Navbar;