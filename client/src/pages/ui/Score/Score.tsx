import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../shared/store/lib/reduxHooks";
import {getScore, resetScore, resetCurrentQuestionId, getUserId} from "../../../entities/user/model/userSlice";
import Icon from "../../../shared/ui/Icon/Icon";
import {NavLink} from "react-router";
import {getScores, setIsAnswerChecked, setSelectedOption} from "../../../entities/quiz/model/quizSlice";

const Score = () => {
    const dispatch = useAppDispatch();
    const score = useAppSelector(getScore);
    const scores = useAppSelector(getScores);
    const resetQuiz = () => {
        dispatch(resetScore());
        dispatch(resetCurrentQuestionId());
        dispatch(setSelectedOption(null));
        dispatch(setIsAnswerChecked(false));
    };

    const userId = useAppSelector(getUserId);
    const userName = `guest${userId && userId.split('-')[4]}`;

    return (
        <>
            <h1>Quiz Complete!</h1>
            <p>Thanks for playing! {userName}</p>
            <p>Your Score: {score}</p>
            <NavLink to='/quiz' className='waves-effect waves-light btn center-block' onClick={resetQuiz}><Icon
                kind='play_arrow'/> Play Again</NavLink>
            <ul className="collection">
                {scores && scores.map(score => <li className="collection-item blue-grey lighten-1"
                                                   key={score}>{`${userName}: ${score}`}</li>)}
            </ul>
        </>
    )
}

export default Score;