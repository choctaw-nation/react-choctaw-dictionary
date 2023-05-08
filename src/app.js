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
  firstLetters {
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
            wordId
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
	useEffect(() => {
		const res = fetch('https://choctawlangstg.wpengine.com/graphql', {
			method: 'Post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(query),
		})
			.then((data) => {
				data.json().then((body) => {
					setIsLoading(false);
					setData(body.data);
				});
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div>
			<Header />
			<SecondaryNav />
			<div className="container">
				{isLoading ? 'Loading...' : <ResultsContainer data={data} />}
			</div>
			<Footer />
		</div>
	);
}
const container = createRoot(document.getElementById('app'));
container.render(<App />);
