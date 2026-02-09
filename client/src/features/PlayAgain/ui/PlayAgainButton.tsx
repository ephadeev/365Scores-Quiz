import Icon from '@/shared/ui/Icon/Icon';
import { NavLink } from 'react-router';
import { resetScore } from '@/entities/user/model/userSlice.ts';
import { resetCurrentQuestionId } from '@/entities/quiz/model/quizSlice.ts';
import { setSelectedOption } from '@/entities/quiz/model/quizSlice.ts';
import { useAppDispatch } from '@/shared/store/lib/reduxHooks.ts';

const PlayAgainButton = () => {
	const dispatch = useAppDispatch();

	const resetQuiz = () => {
		dispatch(resetScore());
		dispatch(resetCurrentQuestionId());
		dispatch(setSelectedOption(null));
	};

	return (
		<NavLink to="/quiz" className="waves-effect waves-light btn center-block" onClick={resetQuiz}>
			<Icon kind="play_arrow" /> Play Again
		</NavLink>
	);
};

export default PlayAgainButton;
