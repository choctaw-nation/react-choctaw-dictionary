import { SearchBar } from '../Components/SearchBar';
import { AlphabetMenu } from '../Components/Alphabet';
import { ColorThemeToggle } from '../Components/ColorToggle';

export function SecondaryNav({
	alphabet,
	selectedLetter,
	setSelectedLetter,
	data,
}) {
	return (
		<div className="secondary-nav container-fluid pt-3">
			<div className="row">
				<SearchBar />
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
