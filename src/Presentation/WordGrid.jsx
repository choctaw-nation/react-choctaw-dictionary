import WordCard from './WordCard';

export default function WordGrid({ words, playAudio, progress }) {
	return (
		<div className="word-grid">
			{words.nodes.map((word) => (
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
