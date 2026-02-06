import React, {FC, memo} from 'react';
import QuizAnswer from "./QuizAnswer";
import {useAppSelector} from "../../../shared/store/lib/reduxHooks";
import {getCurrentQuizOptions} from "../../../entities/quiz/model/quizSlice";

const QuizAnswersWrapper: FC = memo(() => {
    const currentQuizOptions = useAppSelector(getCurrentQuizOptions);

    return (
        <form>
            {currentQuizOptions && currentQuizOptions.map((option) => {
                return (
                    <QuizAnswer option={option} key={option}/>
                )
            })}
        </form>
    )
})

export default QuizAnswersWrapper;