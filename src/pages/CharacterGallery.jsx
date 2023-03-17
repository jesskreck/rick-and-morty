import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import "../styles/character-gallery.css"


function CharacterGallery() {

  // never forget: set an empty array for the characters here because in the return we're looping over it with an array - loop would not be able to start if characters would be null or undefinied
  let [pageNumber, setPageNumber] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  ///////// OLD FETCH FOR COMPARISON
  // const getData = () => {
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(result => setCharacters(result.results))
  //     .catch(error => setError(error.message))
  // }

  const asyncFetch = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setCharacters(result.results);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    asyncFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  return (
    <>
      <div className="body">

        <div className="container" id="characterSection">
          <div className="container">
            <h1>
              “NOBODY EXISTS ON PURPOSE. NOBODY BELONGS ANYWHERE. WE'RE ALL GOING TO DIE. COME WATCH TV.”
            </h1>
            <h2>by Morty</h2>
          </div>
          <div className="character-gallery" id="characterGallery">
            {characters
              ? (
                characters.map((character) => {
                  return <CharacterCard key={character.id} characterData={character} />
                }
                ))

              : (<h1>{error}</h1>)}
          </div>
        </div>

       
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>

    </>
  )
};


export default CharacterGallery;