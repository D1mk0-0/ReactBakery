import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <div>
                    {/* Как добавить фаил из локальной папки пока хз */}
                    <img src='http://miam-images.m.i.pic.centerblog.net/588222a8.png' />
                </div>
                <div className={classes.desc}>
                    <h1>Багет-Батон</h1>
                </div>
            </div>
            <div className={classes.promo}>
                <div className={classes.promo__big}>
                    ЛицоКнига
                </div>
                <div className={classes.promo__small}>
                    для Булочек и Батонов
                </div>
            </div>
        </header>
    );
}

export default Header;