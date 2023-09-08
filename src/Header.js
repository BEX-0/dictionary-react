import React from "react";

import "./Header.css";
import Meaning from "./Meaning.js";

export default function SearchResults(props) {
 if (props.results) {
  return (
   <div className="SearchResults">
    <header>
    <h2>{props.results.word}<small>{" "}{props.results.phonetic}</small></h2>
    </header>
    {props.results.meanings.map(function (meaning, index) {
     return (
      <div key={index}>
       <Meaning meaning={meaning} />
       <br />
      </div>
     );
    })}
   </div>
  );
 } else {
  return null;
 }
}
