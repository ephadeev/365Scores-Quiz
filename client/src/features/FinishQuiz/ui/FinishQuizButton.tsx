import React, {FC} from 'react';
import {addScore} from "../../../entities/quiz/model/quizSlice";
import Icon from "../../../shared/ui/Icon/Icon";
import {NavLink} from "react-router";
import {useAppDispatch, useAppSelector} from "../../../shared/store/lib/reduxHooks";
import {getScore} from "../../../entities/user/model/userSlice";

const FinishQuizButton: FC = () => {
    const dispatch = useAppDispatch();
    const score = useAppSelector(getScore);

    return (
        <NavLink to='/score'
                 className='waves-effect waves-light btn'
                 onClick={() => dispatch(addScore(score))}
        >
            <Icon kind='stars'/> Finish Quiz
        </NavLink>
    )
}

export default FinishQuizButton;