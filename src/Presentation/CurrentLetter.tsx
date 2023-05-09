import { FirstLetter } from '../types';
export default function CurrentLetter({ letter }: { letter: FirstLetter }) {
	return (
		<div className="current-letter col-12 pb-3">
			<div className="current-letter__diamond"></div>
			<h2 className="current-letter__letter">{letter.name}</h2>
			<p className="current-letter__count text-center text-dark pt-3">
				{letter.count} Results
			</p>
		</div>
	);
}
