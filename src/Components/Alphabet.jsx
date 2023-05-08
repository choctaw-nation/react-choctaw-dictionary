export function AlphabetMenu({ alphabet }) {
	return (
		<div className="menu-alphabet-container">
			<h2 className="text-center">Search by First Letter</h2>
			<ul id="menu-alphabet-1" className="menu">
				{alphabet.map((letter) => (
					<li key={letter}>
						<button>{letter}</button>
					</li>
				))}
			</ul>
		</div>
	);
}
