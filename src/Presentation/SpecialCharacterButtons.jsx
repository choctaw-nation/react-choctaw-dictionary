export function SpecialCharacter({ character }) {
	return (
		<button aria-label="Choctaw Character" className="addLetterButton">
			{character}
		</button>
	);
}

export function FirstLetter({ letter }) {
	return (
		<option value={'ʋ' === letter ? '%ca%8b' : letter.toLowerCase()}>
			{letter}
		</option>
	);
}
