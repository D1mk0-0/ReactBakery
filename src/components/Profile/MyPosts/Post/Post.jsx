import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.item__body}>
                <div className={classes.post__img}>
                    <img src="http://1gym-pallin.att.sch.gr/06_material_0910/06_material_0910_es_02match_09_01.jpg" />
                </div>
                <div className={classes.post__text}>
                    {props.message}
                </div>
            </div>
            <span className={classes.btn}>like</span>
            <span className={classes.btn__like}>{props.likes}</span>
        </div>
    );
}

export default Post;