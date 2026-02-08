import {FC, memo} from "react";
import QuizCardTitle from "../QuizCardTitle/QuizCardTitle";
import QuizAnswersWrapper from "../QuizAnswer/QuizAnswersWrapper";
import NextQuestionButton from "@/features/NextQuestion/ui/NextQuestionButton";
import FinishQuizButton from "@/features/FinishQuiz/ui/FinishQuizButton";
import {useAppSelector} from "@/shared/store/lib/reduxHooks.ts";
import {getCurrentQuestion, getQuizzesLength} from "@/entities/quiz/model/quizSlice.ts";
import {getCurrentQuestionId} from "@/entities/quiz/model/quizSlice.ts";

export const QuizCard: FC = memo(() => {
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
                        {quizzesLength && currentQuestionId < quizzesLength - 1 && <NextQuestionButton/>}
                        {quizzesLength && currentQuestionId === quizzesLength - 1 && <FinishQuizButton/>}
                    </div>
                </div>
            </div>
        </div>
    )
});