import { type FC, memo } from 'react';
import { getSelectedOption, setSelectedOption, incrementCurrentQuestionId } from '@/entities/quiz/model/quizSlice.ts';
import { useAppDispatch, useAppSelector } from '@/shared/store/lib/reduxHooks.ts';

const NextQuestionButton: FC = memo(() => {
	const dispatch = useAppDispatch();
	const selectedOption = useAppSelector(getSelectedOption);

	const handleNextQuestionClick = () => {
		// trigger rendering of the next quiz
		dispatch(incrementCurrentQuestionId());

		// reset selected option id
		dispatch(setSelectedOption(null));
	};

	return (
		<button
			className="waves-effect waves-light btn"
			onClick={handleNextQuestionClick}
			disabled={selectedOption === null}
			type="button"
		>
			Next Question
		</button>
	);
});

export default NextQuestionButton;
