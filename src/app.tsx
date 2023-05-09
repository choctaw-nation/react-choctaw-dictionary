import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Footer } from './Presentation/Footer';
import { Header } from './Presentation/Header';
import { SecondaryNav } from './Presentation/SecondaryNav';
import ResultsContainer from './Presentation/ResultsContainer';
import { query } from './utils';
import { FirstLetter } from './types';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState({ firstLetters: { nodes: [] } });
	const [alphabet, setAlphabet] = useState(null);
	const [selectedLetter, setSelectedLetter] = useState<FirstLetter>();
	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		const timeout = setTimeout(() => {
			controller.abort();
			console.warn('Request timed out');
		}, 10000);

		fetch('https://choctawlangstg.wpengine.com/graphql', {
			method: 'Post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(query),
			signal: signal,
		})
			.then((data) => {
				clearTimeout(timeout);
				data.json().then((body) => {
					setData(body.data);
					setSelectedLetter(body.data.firstLetters.nodes[0]);
					setAlphabet(
						body.data.firstLetters.nodes
							.filter((node: FirstLetter) => {
								return null !== node.count;
							})
							.map((node: FirstLetter) => node.name),
					);
					setIsLoading(false);
				});
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div>
			<Header />
			{!isLoading && (
				<SecondaryNav
					selectedLetter={selectedLetter}
					setSelectedLetter={setSelectedLetter}
					data={data}
					alphabet={alphabet}
				/>
			)}
			<div className="container">
				{isLoading
					? 'Loading...'
					: selectedLetter && (
							<ResultsContainer selectedLetter={selectedLetter} />
					  )}
			</div>
			<Footer />
		</div>
	);
}

createRoot(document.getElementById('app')).render(<App />);
