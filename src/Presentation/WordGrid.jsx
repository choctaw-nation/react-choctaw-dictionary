import WordCard from './WordCard';

export default function WordGrid({ words, playAudio }) {
	return (
		<div className="word-grid">
			{words.nodes.map((word) => (
				<WordCard
					word={word.title}
					fields={word.words_fields}
					key={word.wordId}
					playAudio={playAudio}
				/>
			))}
		</div>
	);
}
