import { type FC, memo, useEffect } from 'react';
import { fetchQuizzes } from '@/entities/quiz/api/quizActionCreators.ts';
import { QuizCard } from '@/widgets/QuizCard';
import { useAppDispatch, useAppSelector } from '@/shared/store/lib/reduxHooks.ts';
import { getStatus } from '@/entities/quiz/model/quizSlice.ts';

const Quiz: FC = memo(() => {
	const dispatch = useAppDispatch();
	const status = useAppSelector(getStatus);
	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchQuizzes());
		}
	}, [status, dispatch]); // adding dispatch in dependency array is safe because RTK returns function with stable identity
	return <>{status === 'succeed' && <QuizCard />}</>;
});

export default Quiz;
