import {
	FirstLetter,
	SpecialCharacter,
} from '../Presentation/SpecialCharacterButtons';

const characters = ['a̱', 'i̱', 'o̱', 'ʋ'];

export function SearchBar({ alphabet }) {
	return (
		<form className="search-form">
			<ul className="search-items">
				<li data-sf-field-name="search" data-sf-field-type="search">
					<input
						placeholder="Search"
						type="text"
						name="_sf_search[]"
						className="sf-input-text"
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
				{/*<li className="sf-field-taxonomy-first_letter">
					<label>
						<select
							name="_sft_first_letter[]"
							className="sf-input-select form-select"
							title="">
							<option className="sf-level-0 sf-item-0" value="">
								All First Letters
							</option>
							{alphabet.map((letter) => (
								<FirstLetter letter={letter} key={letter} />
							))}
						</select>
					</label>
							</li>*/}
			</ul>
		</form>
	);
}
