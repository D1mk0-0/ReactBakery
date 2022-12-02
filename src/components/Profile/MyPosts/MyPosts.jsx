import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.posts__area}>
            My posts
            <div className={classes.posts__create}>
                <div className={classes.create__inner}>
                    New post
                </div>
                <div className={classes.create__submit}>
                    <a href='#'>Send</a>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you?' likes='5'/>
                <Post message="It's my first post" likes='7'/>
            </div>
        </div>
    );
}

export default MyPosts;