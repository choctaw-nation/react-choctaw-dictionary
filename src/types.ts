export type Words_Fields = {
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
	partOfLanguage?: string;
	pronunciation?: string;
};
export type Word = {
	wordId: number;
	title: string;
	words_fields: Words_Fields;
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
