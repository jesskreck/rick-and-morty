import React, { useLayoutEffect, useRef } from 'react';
import "../styles/character-card.css"
import episodeCounter from "../utils/episodeCounter"


function CharacterCard({ characterData }) {

  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    cardRef.current.style.height = `${contentRef.current.offsetHeight}px`;

  }, [cardRef, contentRef]);


  return (
    <div className="card" ref={cardRef}>
      <img className="card__image" src={characterData.image} alt={`hot profile pic of ${characterData.name}`} />
      <div className="front side" >
        <div className="content" ref={contentRef}>
          <h1>{characterData.name}</h1>
          <p>{characterData.name} is a {characterData.species}. Originally coming from: {characterData.origin.name}.
            Played in {episodeCounter(characterData.episode)} episodes.
          </p>
          <div className="status">
              <h3>Status: {characterData.status}</h3>
              <div className={characterData.status}>
              </div>
          </div>
        </div>

      </div>


      <div className="back side">
        <div className="content">
          <h3>Species</h3>
          <p>{characterData.species} {characterData.type}</p>
          <h3>Gender</h3>
          <p>{characterData.gender}</p>
          <h3>Location</h3>
          <p>{characterData.location.name}</p>
          <h3>Origin</h3>
          <p>{characterData.origin.name}</p>

          

        </div>
      </div>
    </div>



  )
}

export default CharacterCard