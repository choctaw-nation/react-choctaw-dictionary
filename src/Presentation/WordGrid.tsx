import React from 'react';
import { Word, Words } from '../types';
import WordCard from './WordCard';

export default function WordGrid({
	words,
	playAudio,
	progress,
}: {
	words: Words;
	playAudio: Function;
	progress: number;
}) {
	console.log(words);
	return (
		<div className="word-grid">
			{words.edges.map(({ node: word }: { node: Word }) => (
				<WordCard
					progress={progress}
					word={word}
					fields={word.words_fields}
					key={word.wordId}
					playAudio={playAudio}
				/>
			))}
		</div>
	);
}
