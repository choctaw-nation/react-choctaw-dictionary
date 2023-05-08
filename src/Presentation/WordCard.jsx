export default function WordCard({ word, fields, playAudio, progress }) {
	console.log(word);
	return (
		<div className="word-card" id={word.wordId}>
			<div className="word-card__text">
				<h2 className="word-card__text--title">
					{word.title}
					{fields.partOfLanguage && (
						<span className="word-card__text--part-of-language">
							{' '}
							({fields.partOfLanguage})
						</span>
					)}
				</h2>
				{fields.definitions && (
					<p className="word-card__text--definition">
						{fields.definitions[0].definition}
					</p>
				)}
			</div>
			{fields.audioFile && (
				<div className="word-card__button">
					<button
						aria-label="Audio button for choctaw word"
						value={fields.audioFile.mediaItemUrl}
						className="audio-button btn btn-link"
						onClick={() => {
							playAudio(fields.audioFile.mediaItemUrl);
						}}>
						Play
						<i className="fas fa-play-circle fa-3x"></i>
					</button>
				</div>
			)}
		</div>
	);
}
