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
import { FirstLetter, WP_Response } from './types';
import LoadingSpinner from './Presentation/LoadingSpinner';
import Fuse from 'fuse.js';
import { fuzzySearchKeys } from './Components/search/fuse-config';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<FirstLetter[]>([]);
	const [alphabet, setAlphabet] = useState(null);
	const [selectedLetter, setSelectedLetter] = useState<FirstLetter>();
	const [search, setSearch] = useState('');
	useEffect(() => {
		if ('' === search) {
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
						setData(body.data.firstLetters);
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
		}
	}, [search]);

	function handleSearchInput({ target }) {
		setSearch(target.value);
	}
	// useEffect(() => {
	// 	if ('' === search) return;
	// 	setIsLoading(true);
	// 	const timeout = setTimeout(() => {
	// 		const fuse = new Fuse(data, {
	// 			...fuzzySearchKeys,
	// 		});
	// 		// console.log(`Search Terms: ${search}`);
	// 		const results = fuse.search(search);
	// 		// console.log(results);
	// 		setData(results.map((result) => result.item));
	// 		setIsLoading(false);
	// 	}, 500);
	// 	return () => clearTimeout(timeout);
	// }, [search]);

	return (
		<div>
			<Header />
			{!isLoading && (
				<SecondaryNav
					selectedLetter={selectedLetter}
					setSelectedLetter={setSelectedLetter}
					data={data}
					search={search}
					alphabet={alphabet}
					handleSearchInput={handleSearchInput}
				/>
			)}
			<div className="container">
				{isLoading ? (
					<div className="text-center mt-5 pt-5">
						<LoadingSpinner />
					</div>
				) : (
					selectedLetter && <ResultsContainer selectedLetter={selectedLetter} />
				)}
			</div>
			<Footer />
		</div>
	);
}

createRoot(document.getElementById('app')).render(<App />);
