import React from 'react';
import Icon from "../../../shared/ui/Icon/Icon";
import {NavLink} from "react-router";

const StartQuizButton = () => {
    return (
        <NavLink to='/quiz' className='waves-effect waves-light btn center-block'>
            <Icon kind='play_arrow'/> Start Your Challenge
        </NavLink>
    )
}

export default StartQuizButton;