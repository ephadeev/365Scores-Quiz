import React, {FC, memo} from "react";
import QuizCardTitle from "../../QuizCardTitle/ui/QuizCardTitle";
import QuizAnswersWrapper from "../../QuizAnswer/ui/QuizAnswersWrapper";
import NextQuestion from "../../../features/NextQuestion/ui/NextQuestion";
import FinishQuiz from "../../../features/FinishQuiz/ui/FinishQuiz";
import {useAppSelector} from "../../../shared/store/lib/reduxHooks";
import {getCurrentQuestion, getQuizzesLength} from "../../../entities/quiz/model/quizSlice";
import {getCurrentQuestionId} from "../../../entities/quiz/model/quizSlice";

const QuizCard: FC = memo(() => {
    const quizzesLength = useAppSelector(getQuizzesLength);
    const currentQuestionId = useAppSelector(getCurrentQuestionId);
    const currentQuestion = useAppSelector(getCurrentQuestion);

    return (
        <div className='quiz_card'>
            <div className='s12 m6 quiz_col'>
                <div className='card blue-grey darken-1'>
                    <div className='card-content white-text'>
                        <QuizCardTitle currentQuestionId={currentQuestionId}/>
                        <p>{currentQuestion}</p>
                        <QuizAnswersWrapper/>
                    </div>
                    <div className="card-action">
                        {quizzesLength && currentQuestionId < quizzesLength - 1 && <NextQuestion/>}
                        {quizzesLength && currentQuestionId === quizzesLength - 1 && <FinishQuiz/>}
                    </div>
                </div>
            </div>
        </div>
    )
});

export default QuizCard;