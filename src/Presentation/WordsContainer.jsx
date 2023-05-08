export default function WordsContainer({ data, isLoading }) {
	const firstLetters = data.firstLetters.nodes;
	return (
		<div className="container">
			{isLoading ? 'Loading...' : 'Words Container'}
		</div>
	);
}
