import React from 'react';
import { SpecialCharacter } from '../Presentation/SpecialCharacterButtons';

const characters = ['a̱', 'i̱', 'o̱', 'ʋ'];

export function SearchBar({ handleSearchInput, search }) {
	return (
		<form className="search-form">
			<ul className="search-items">
				<li data-sf-field-name="search" data-sf-field-type="search">
					<input
						placeholder="Search"
						type="text"
						name="_sf_search[]"
						className="sf-input-text"
						onChange={handleSearchInput}
						value={search}
					/>
				</li>
				<li className="sf-reset-button">
					<button className="resetButton" aria-label="Reset button on search">
						<a className="resetLink" href="/">
							Reset
						</a>
					</button>
				</li>
				<li className="sf-add-special-character">
					<button
						type="button"
						aria-label="information button"
						className="btn btn-primary i"
						data-bs-toggle="modal"
						data-bs-target="#infoModal">
						<i className="fas fa-info fa-sm"></i>
					</button>
					{characters.map((character) => (
						<SpecialCharacter character={character} key={character} />
					))}
				</li>
			</ul>
		</form>
	);
}
