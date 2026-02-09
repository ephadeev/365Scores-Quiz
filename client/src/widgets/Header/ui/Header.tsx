import { type FC, memo } from 'react';
import { NavLink } from 'react-router';

export const Header: FC = memo(() => {
	return (
		<header className="header">
			<nav className="blue-grey darken-3">
				<div className="nav-wrapper">
					<NavLink to="/" className="brand-logo center">
						<span className="white blue-grey-text text-darken-3 header__logo">365</span>
						<span className="header__logo">Scores Quiz</span>
					</NavLink>
				</div>
			</nav>
		</header>
	);
});
