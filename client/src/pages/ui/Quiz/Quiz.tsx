import React, {useEffect} from 'react';
import {NavLink} from 'react-router';
import RadioButton from "../../../shared/ui/RadioButton/RadioButton";
import {useAppDispatch, useAppSelector} from "../../../shared/store/lib/reduxHooks";
import {
    getCurrentQuestionId,
    getScore,
    incrementCurrentQuestionId,
    incrementScore
} from '../../../entities/user/model/userSlice'
import {fetchQuizzes} from "../../../entities/quiz/api/quizActionCreators";
import {
    getIsAnswerChecked,
    getQuizzes,
    getSelectedOption,
    setSelectedOption,
    setIsAnswerChecked, addScore
} from "../../../entities/quiz/model/quizSlice";
import QuizCardTitle from "../../../shared/ui/CardTitle/QuizCardTitle";
import Icon from "../../../shared/ui/Icon/Icon";

const Quiz = () => {
    const dispatch = useAppDispatch();
    const quizzes = useAppSelector(getQuizzes).questions;
    const currentQuestionId = useAppSelector(getCurrentQuestionId);
    const selectedOptionId = useAppSelector(getSelectedOption);
    const isAnswerChecked = useAppSelector(getIsAnswerChecked);
    const score = useAppSelector(getScore);

    useEffect(() => {
        dispatch(fetchQuizzes());
    }, []);

    const checkAnswer = (id: number): void => {
        dispatch(setSelectedOption(id));
        dispatch(setIsAnswerChecked(true));
        quizzes && quizzes[currentQuestionId].correct === id && dispatch(incrementScore());
    }

    const handleNextQuestionClick = () => {
        // trigger rendering of the next quiz
        dispatch(incrementCurrentQuestionId());

        // reset selected option id
        dispatch(setSelectedOption(null));

        // enable options
        dispatch(setIsAnswerChecked(false))
    }

    return (
        <div className='quiz_card'>
            <div className='s12 m6 quiz_col'>
                <div className='card blue-grey darken-1'>
                    <div className='card-content white-text'>
                        <QuizCardTitle currentQuestionId={currentQuestionId} score={score}/>
                        {quizzes && <p className=''>{quizzes[currentQuestionId].question}</p>}
                        <form>
                            {quizzes && quizzes[currentQuestionId].options.map((option, i) => {
                                return (
                                    <div className='quiz_option_wrapper' key={option}>
                                        <RadioButton
                                            id={i}
                                            option={option}
                                            key={option}
                                            disabled={isAnswerChecked}
                                            checked={i === selectedOptionId}
                                            onChange={checkAnswer}/>
                                        {quizzes && quizzes[currentQuestionId].correct === i && isAnswerChecked &&
                                            <Icon kind='check' style='light-green-text text-accent-4'/>}
                                        {quizzes && quizzes[currentQuestionId].correct !== i && selectedOptionId === i &&
                                            <Icon kind='clear' style='deep-orange-text text-accent-3'/>}
                                    </div>
                                )
                            })}
                        </form>
                    </div>
                    <div className="card-action">
                        {quizzes && currentQuestionId < quizzes.length - 1 && <button
                            className="waves-effect waves-light btn"
                            onClick={handleNextQuestionClick} disabled={!isAnswerChecked}>
                            Next Question
                        </button>}
                        {quizzes && currentQuestionId === quizzes.length - 1 &&
                            <NavLink to='/score' className='waves-effect waves-light btn'
                                     onClick={() => dispatch(addScore(score))}>
                                <Icon kind='stars'/> Finish Quiz
                            </NavLink>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quiz;