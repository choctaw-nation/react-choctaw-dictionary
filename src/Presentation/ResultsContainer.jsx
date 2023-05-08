import CurrentLetter from './CurrentLetter';
import WordGrid from './WordGrid';
import { useRef, useState, useEffect } from 'react';

export default function ResultsContainer({ selectedLetter }) {
	const audioRef = useRef(null);
	const [progress, setProgress] = useState(0);
	function handleTimeUpdate() {
		const audio = audioRef.current;
		const progress = (audio.currentTime / audio.duration) * 100;
		setProgress(progress);
	}
	function playAudio(url) {
		audioRef.current.src = url;
		audioRef.current.play();
	}
	useEffect(() => console.log(progress), [progress]);
	return (
		<div className="results">
			<audio
				id="audioPlayer"
				src=""
				ref={audioRef}
				onTimeUpdate={handleTimeUpdate}></audio>
			<CurrentLetter letter={selectedLetter} />
			<WordGrid
				words={selectedLetter.words}
				playAudio={playAudio}
				progress={progress}
			/>
		</div>
	);
}
