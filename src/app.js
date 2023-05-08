import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Footer } from './Presentation/Footer';
import { Header } from './Presentation/Header';
import { SecondaryNav } from './Presentation/SecondaryNav';
import ResultsContainer from './Presentation/ResultsContainer';
const query = {
	query: `query {
  firstLetters(first:27) {
    nodes {
      count
      name
      words {
        nodes {
          wordId
          title(format: RENDERED)
          link
          words_fields {
            audioFile {
              mediaItemUrl
            }
            definitions {
              definition
            }
            exampleSentence
            exampleSentenceTranslation
            partOfLanguage
            pronunciation
          }
        }
      }
    }
  }
}`,
};

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState({ firstLetters: { nodes: [] } });
	const [alphabet, setAlphabet] = useState();
	const [selectedLetter, setSelectedLetter] = useState();
	useEffect(() => {
		const res = fetch('https://choctawlangstg.wpengine.com/graphql', {
			method: 'Post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(query),
		})
			.then((data) => {
				data.json().then((body) => {
					setData(body.data);
					setSelectedLetter(body.data.firstLetters.nodes[0]);
					setAlphabet(
						body.data.firstLetters.nodes
							.filter((node) => null !== node.count)
							.map((node) => node.name),
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
				{isLoading ? (
					'Loading...'
				) : (
					<ResultsContainer data={data} selectedLetter={selectedLetter} />
				)}
			</div>
			<Footer />
		</div>
	);
}
createRoot(document.getElementById('app')).render(<App />);
