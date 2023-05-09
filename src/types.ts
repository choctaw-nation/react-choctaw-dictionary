export type Word = {
	wordId: number;
	title: string;
	words_fields: {
		audioFile?: {
			mediaItemUrl: string;
		};
		definitions: [
			{
				definition: string;
			},
		];
		exampleSentence?: string;
		exampleSentenceTranslation?: string;
		partofLanguage?: string;
		pronunciation?: string;
	};
};
export type WordEdge = {
	cursor: string;
	node: Word;
};
export type Words = {
	edges: WordEdge[];
	pageInfo: {
		endCursor: string;
		hasNextPage: boolean;
		startCursor: string;
	};
};
export type FirstLetter = {
	name: string;
	words: Words;
	count: number;
};
