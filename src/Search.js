import React, { useState } from "react";
import axios from "axios";

export default function Search() {
 let [word, setWord] = useState("");
 let key = "82f43b0671f2tb328187o7be4ab620aa";

 function handleWordChange(event) {
  setWord(event.target.value);
 }

 function search(event) {
  event.preventDefault();
  let url = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;
  axios.get(url).then(showData);
 }

 function showData(response) {
  console.log(response.data);
 }

 return (
  <div className="Search">
   <form onSubmit={search}>
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
