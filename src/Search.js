import React, { useState } from "react";

export default function Search() {
 let [word, setWord] = useState("");

 function handleWordChange(event) {
  event.preventDefault();
  setWord(event.target.value);
 }

 return (
  <div className="Search">
   <form name="word-search">
    <input
     type="search"
     placeholder="Type a word..."
     onChange={handleWordChange}
    />
    <input type="submit" value="Search" />
   </form>
  </div>
 );
}
