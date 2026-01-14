import React from 'react';
import {NavLink} from 'react-router';
import Icon from "../../../shared/ui/Icon/Icon";

const Home = () => {
    return (
        <>
            <h1 className='center'>Welcome to 365Scores Quiz!</h1>
            <p className='center'>Test your sports knowledge!</p>
            <p className='center'>From soccer legends to Olympic feats - how well do you know the game?</p>
            <p className='center'>Ready to score?</p>
            <p className='center'>Prove you're a true sports fan!</p>
            <NavLink to='/quiz' className='waves-effect waves-light btn center-block'>
                <Icon kind='play_arrow'/> Start Your Challenge
            </NavLink>
        </>
    )
}

export default Home;