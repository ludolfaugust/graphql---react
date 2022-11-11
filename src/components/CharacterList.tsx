import React from 'react';
import CharacterCard from './CharacterCard';
import useCharacters from './useCharacters';

export const CharacterList: React.FC = () => {

  const {data, loading, error} = useCharacters();

   if (loading) return <div>loading</div> ;
   if (error) return <div>error</div>;


  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"1rem"}}>
      {data.characters.results.map((character: any)=>(
        <CharacterCard character={character} />
      ))} 
    </div>
  );
}

