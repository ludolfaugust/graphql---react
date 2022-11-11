import React from 'react';
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

export default useCharacters