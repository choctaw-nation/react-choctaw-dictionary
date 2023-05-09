import React from 'react';

export function AlphabetMenu({
	alphabet,
	selectedLetter,
	setSelectedLetter,
	data,
}) {
	console.log(data);
	return (
		<div className="menu-alphabet-container">
			<h2 className="text-center">Search by First Letter</h2>
			<ul id="menu-alphabet-1" className="menu">
				{alphabet.map((letter) => (
					<li
						key={letter}
						className={letter === selectedLetter.name ? 'selected' : ''}>
						<button
							onClick={() => {
								const choice = data.nodes.filter(
									(node) => letter === node.name,
								);
								setSelectedLetter(choice[0]);
							}}>
							{letter}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
