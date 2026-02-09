import { type FC, memo } from 'react';
import RadioButton from '@/shared/ui/RadioButton/RadioButton';
import Icon from '@/shared/ui/Icon/Icon';
import { getCurrentQuizCorrectAnswer, getSelectedOption } from '@/entities/quiz/model/quizSlice.ts';
import { useAppSelector } from '@/shared/store/lib/reduxHooks.ts';

const QuizAnswer: FC<{ option: string }> = memo(({ option }) => {
	const selectedOption = useAppSelector(getSelectedOption);
	const correctOption = useAppSelector(getCurrentQuizCorrectAnswer);

	return (
		<div className="quiz_option_wrapper">
			{/* reminder: it's ok that all answers would rerender by checking on of the radio buttons,
            because we disable all of them after click */}
			<RadioButton option={option} disabled={selectedOption !== null} checked={option === selectedOption} />
			{correctOption === option && selectedOption !== null && (
				<Icon kind="check" style="light-green-text text-accent-4" />
			)}
			{correctOption !== option && selectedOption === option && (
				<Icon kind="clear" style="deep-orange-text text-accent-3" />
			)}
		</div>
	);
});

export default QuizAnswer;
