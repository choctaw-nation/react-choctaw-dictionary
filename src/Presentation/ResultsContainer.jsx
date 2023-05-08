import CurrentLetter from './CurrentLetter';
import WordGrid from './WordGrid';
import { useState, useRef } from 'react';

export default function ResultsContainer({ data }) {
	const audioRef = useRef(null);
	function playAudio(url) {
		audioRef.current.src = url;
		audioRef.current.play();
	}
	const firstLetters = data.firstLetters.nodes;
	return (
		<div className="results">
			<audio id="audioPlayer" src="" ref={audioRef}></audio>
			<CurrentLetter letter={firstLetters[0]} />
			<WordGrid words={firstLetters[0].words} playAudio={playAudio} />
		</div>
	);
}
