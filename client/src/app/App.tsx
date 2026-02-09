import { type FC, useEffect } from 'react';
import 'materialize-css';
import { v4 as uuidv4 } from 'uuid';
import { setUserId } from '@/entities/user/model/userSlice.ts';
import '@/src/app/App.css';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import AppRoutes from '@/pages/lib/routes.tsx';
import { useAppDispatch } from '@/shared/store/lib/reduxHooks.ts';

const App: FC = () => {
	const dispatch = useAppDispatch();

	// check userId field in localStorage, if exists set in state, else generate and set in state and localStorage
	useEffect(() => {
		let userIdInLocalStorage: string | null = localStorage.getItem('userId');

		if (!userIdInLocalStorage) {
			userIdInLocalStorage = uuidv4();
			localStorage.setItem('userId', userIdInLocalStorage);
		}

		dispatch(setUserId(userIdInLocalStorage));
	}, [dispatch]);

	return (
		<>
			<Header />
			<main className="main container">
				<AppRoutes />
			</main>
			<Footer />
		</>
	);
};

export default App;
