import React from 'react';
import {IUser} from "../../../entities/user/model/IUser";

const QuizCardTitle = ({currentQuestionId, score}: {
    currentQuestionId: IUser['currentQuestionId'],
    score: IUser['score']
}) => {

    return (
        <div className="card-title">
            <div>Question {currentQuestionId + 1}/10</div>
            <div>Score: {score}</div>
        </div>
    )
}

export default QuizCardTitle;