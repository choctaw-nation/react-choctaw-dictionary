import CurrentLetter from './CurrentLetter';
import WordGrid from './WordGrid';
import { useRef } from 'react';

export default function ResultsContainer({ selectedLetter }) {
	const audioRef = useRef(null);
	function playAudio(url) {
		audioRef.current.src = url;
		audioRef.current.play();
	}
	return (
		<div className="results">
			<audio id="audioPlayer" src="" ref={audioRef}></audio>
			<CurrentLetter letter={selectedLetter} />
			<WordGrid words={selectedLetter.words} playAudio={playAudio} />
		</div>
	);
}
