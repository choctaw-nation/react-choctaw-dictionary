export const query = {
	query: `{
  firstLetters(first: 27) {
    nodes {
      name
      words(first: 21) {
        pageInfo {
          endCursor
          hasNextPage
          startCursor
        }
        edges {
          cursor
          node {
            wordId
            title(format: RENDERED)
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
      count
    }
  }
}`,
};

export const logo =
	'https://dictionary.choctawnation.com/wp-content/uploads/2022/08/Choctawlogo.svg';
