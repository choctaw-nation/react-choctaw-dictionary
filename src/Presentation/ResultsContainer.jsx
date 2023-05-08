import CurrentLetter from './CurrentLetter';
import WordGrid from './WordGrid';
import { useState, useRef } from 'react';

export default function ResultsContainer({ data }) {
	const [audio, setAudio] = useState('');
	const audioRef = useRef(null);
	function playAudio(url) {
		setAudio(url);
		audioRef.current.play();
	}
	const firstLetters = data.firstLetters.nodes;
	return (
		<div className="results">
			<audio id="audioPlayer" src={audio} ref={audioRef}></audio>
			<CurrentLetter letter={firstLetters[0]} />
			<WordGrid words={firstLetters[0].words} playAudio={playAudio} />
		</div>
	);
}
