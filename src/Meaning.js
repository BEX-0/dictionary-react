import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
 return (
  <div className="Meaning">
   <h4>{props.meaning.partOfSpeech}</h4>
   <p>{props.meaning.definition}</p>
   <p>
    <em>{props.meaning.example}</em>
   </p>
    <Synonyms synonyms={props.meaning.synonyms}/>
  </div>
 );
}
