import React, {FC, memo, useEffect} from 'react';
import QuizCard from "../../../widgets/QuizCard/ui/QuizCard";
import {fetchQuizzes} from "../../../entities/quiz/api/quizActionCreators";
import {useAppDispatch, useAppSelector} from "../../../shared/store/lib/reduxHooks";
import {getStatus} from "../../../entities/quiz/model/quizSlice";

const Quiz: FC = memo(() => {
    const dispatch = useAppDispatch();
    const status = useAppSelector(getStatus);
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchQuizzes());
        }
    }, [status]);

    console.log('render: Quiz');
    return (
        <>
            {status === 'succeed' && <QuizCard/>}
        </>
    )
})

export default Quiz;