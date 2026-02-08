import {FC, memo} from 'react';
import QuizAnswer from "./QuizAnswer";
import {useAppSelector} from "@/shared/store/lib/reduxHooks.ts";
import {getCurrentQuizOptions} from "@/entities/quiz/model/quizSlice.ts";

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