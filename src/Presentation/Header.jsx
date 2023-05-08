const logoSrc =
	'https://dictionary.choctawnation.com/wp-content/uploads/2022/08/Choctawlogo.svg';

export function Header() {
	return (
		<header className="header">
			<a href="/" className="logo">
				<figure>
					<div className="logo__diamond"></div>
					<img src={logoSrc} alt="Choctaw Nation logo" className="logo__img" />
				</figure>
			</a>
			<h1 className="header__title">Choctaw Dictionary</h1>
		</header>
	);
}
