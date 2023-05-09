import React from 'react';
import { logo } from '../utils';
export function Header(): React.JSX.Element {
	return (
		<header className="header">
			<a href="/" className="logo">
				<figure>
					<div className="logo__diamond"></div>
					<img src={logo} alt="Choctaw Nation logo" className="logo__img" />
				</figure>
			</a>
			<h1 className="header__title">Choctaw Dictionary</h1>
		</header>
	);
}
