import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import "../styles/character-card.css"
import episodeCounter from "../utils/episodeCounter"
import searchMinHeight from "../utils/searchMinHeight"


function CharacterCard({ characterData }) {

  const cardRef = useRef(null);
  const contentRef = useRef(null);
  
  useLayoutEffect(() => {
    cardRef.current.style.height = `${contentRef.current.offsetHeight}px`;

  }, [cardRef, contentRef]
  );


// // useEffect is going against the idea of useRef - useRef should normally being overwritten when rendering. With this useEffect we're storing it
//   useEffect(() => {
//     cardRef.current.style.height = `${contentRef.current.offsetHeight}px`;
//     cardRef.current.style.height = `${searchMinHeight( cardRef.current.style.height)}px`;
    
//    // console.log('contentRef.current.offsetHeight :>> ', contentRef.current.offsetHeight);
//     //console.log('cardRef.current.offsetHeight :>> ', cardRef.current.offsetHeight);
    
//     checkHeight(cardRef.current.offsetHeight)
    

//   }, []);


  return (
    <article className="card" ref={cardRef}>
      <img className="card__image" src={characterData.image} alt={`hot profile pic of ${characterData.name}`} />
      <div className="front side" >
        <div className="content" ref={contentRef}>
          <h1>{characterData.name}</h1>
          <p>lorem20</p>
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
    </article>



  )
}

export default CharacterCard