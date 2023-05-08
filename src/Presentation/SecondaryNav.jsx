import { SearchBar } from '../Components/SearchBar';
import { AlphabetMenu } from '../Components/Alphabet';
import { ColorThemeToggle } from '../Components/ColorToggle';
const alphabet = [
	'A',
	'Ʋ',
	'B',
	'Ch',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
];
export function SecondaryNav() {
	return (
		<div className="secondary-nav container-fluid pt-3">
			<div className="row">
				<SearchBar alphabet={alphabet} />
				<AlphabetMenu alphabet={alphabet} />
				<ColorThemeToggle />
			</div>
		</div>
	);
}
