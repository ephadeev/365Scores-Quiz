import React from "react";
import Icon from "../../../shared/ui/Icon/Icon";
import {NavLink} from "react-router";
import {resetScore} from "../../../entities/user/model/userSlice";
import {resetCurrentQuestionId} from "../../../entities/quiz/model/quizSlice"
import {setSelectedOption} from "../../../entities/quiz/model/quizSlice";
import {useAppDispatch} from "../../../shared/store/lib/reduxHooks";

const PlayAgainButton = () => {
    const dispatch = useAppDispatch();

    const resetQuiz = () => {
        dispatch(resetScore());
        dispatch(resetCurrentQuestionId());
        dispatch(setSelectedOption(null));
    };

    console.log('render: PlayAgainButton')

    return (
        <NavLink to='/quiz' className='waves-effect waves-light btn center-block' onClick={resetQuiz}>
            <Icon kind='play_arrow'/> Play Again
        </NavLink>
    )
}

export default PlayAgainButton;