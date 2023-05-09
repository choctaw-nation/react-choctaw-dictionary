import { SearchBar } from '../Components/SearchBar';
import { AlphabetMenu } from '../Components/Alphabet';
import { ColorThemeToggle } from '../Components/ColorToggle';
import React from 'react';

export function SecondaryNav({
	alphabet,
	selectedLetter,
	setSelectedLetter,
	data,
	handleSearchInput,
	search,
}) {
	return (
		<div className="secondary-nav container-fluid pt-3">
			<div className="row">
				<SearchBar search={search} handleSearchInput={handleSearchInput} />
				<AlphabetMenu
					alphabet={alphabet}
					selectedLetter={selectedLetter}
					setSelectedLetter={setSelectedLetter}
					data={data}
				/>
				<ColorThemeToggle />
			</div>
		</div>
	);
}
