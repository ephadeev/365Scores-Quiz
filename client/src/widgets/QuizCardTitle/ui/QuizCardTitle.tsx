import React, {FC, memo} from 'react';
import {IUser} from "../../../entities/user/model/IUser";
import {useAppSelector} from "../../../shared/store/lib/reduxHooks";
import {getScore} from "../../../entities/user/model/userSlice";

const QuizCardTitle: FC<{ currentQuestionId: IUser['currentQuestionId']}> = memo(({currentQuestionId}) => {
    const score: IUser['score'] = useAppSelector(getScore);

    return (
        <div className="card-title">
            <div>Question {currentQuestionId + 1}/10</div>
            <div>Score: {score}</div>
        </div>
    )
})

export default QuizCardTitle;