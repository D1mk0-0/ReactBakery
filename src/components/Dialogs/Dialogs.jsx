import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            {/*Делаем колонку с выбором диалогов*/}
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to="/dailogs/1">Булочка Бриош</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dailogs/2">Французский багет</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dailogs/3">Булочка Синнабон</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dailogs/4">Булочка Косичка</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dailogs/5">Батон Пшеничный</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dailogs/6">Круассан Венский</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How is your baget-baton</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;