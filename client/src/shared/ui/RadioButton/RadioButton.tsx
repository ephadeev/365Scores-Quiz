import { type FC, memo, useCallback } from 'react';
import { getCurrentQuizCorrectAnswer, setSelectedOption } from '@/entities/quiz/model/quizSlice.ts';
import { incrementScore } from '@/entities/user/model/userSlice.ts';
import { useAppDispatch, useAppSelector } from '../../store/lib/reduxHooks';

const RadioButton: FC<{
	option: string;
	checked: boolean;
	disabled: boolean;
}> = memo(({ option, checked, disabled }) => {
	const dispatch = useAppDispatch();
	const correctOption = useAppSelector(getCurrentQuizCorrectAnswer);

	const checkAnswer = useCallback((): void => {
		dispatch(setSelectedOption(option));
		correctOption === option && dispatch(incrementScore());
	}, [option, dispatch, correctOption]);

	return (
		<div>
			<label>
				<input
					className="with-gap"
					name="group1"
					type="radio"
					checked={checked}
					disabled={disabled}
					onChange={checkAnswer}
				/>
				<span>{option}</span>
			</label>
		</div>
	);
});

export default RadioButton;
