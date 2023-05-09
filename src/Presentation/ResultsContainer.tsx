import React, { useRef, useState, useEffect } from 'react';
import { FirstLetter } from '../types';
import CurrentLetter from './CurrentLetter';
import WordGrid from './WordGrid';

export default function ResultsContainer({
	selectedLetter,
}: {
	selectedLetter: FirstLetter;
}) {
	const audioRef = useRef<React.RefObject<HTMLAudioElement> | null>(null);
	const [progress, setProgress] = useState<number>(0);
	function handleTimeUpdate() {
		const audio = audioRef.current;
		if (audio) {
			const progress = (audio.currentTime / audio.duration) * 100;
			setProgress(progress);
		}
	}
	/** updates an Audio element's `src` file
	 * @param {string} url the url
	 */
	function playAudio(url: string): void {
		if (audioRef) {
			audioRef.current.src = url;
			audioRef.current.play();
		}
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
