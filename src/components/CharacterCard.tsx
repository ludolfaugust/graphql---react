import React from 'react';


interface Props{
    character: {name: string, image: string};
}

const CharacterCard: React.FC<Props> = ({character}) => {
  return (
    
        <div>
            <h3>{character.name}</h3>
            <img src={character.image} />
        </div>
  
  )
}

export default CharacterCard