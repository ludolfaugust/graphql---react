# Getting Started with GraphQL and React




1. npm install apollo/client graphql
2. in index.tsx 

import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
}); 

3. wrap App in Apollo Provider: 

      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>


4. Query : 
import {gql, useQuery} from '@apollo/client';

const useCharacters = () => {

    const GET_CHARACTERS = gql`
        query getCharacters {
            characters{
                results{
                    name
                    image
                }
            }
        }
    `;

    const {data, loading, error} = useQuery(GET_CHARACTERS)



  return (
    {
    data,
    loading,
    error
    }
  )
}

5. 
