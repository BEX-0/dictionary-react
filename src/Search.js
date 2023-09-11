import React, { useState } from "react";
import axios from "axios";

import "./Search.css";
import Header from "./Header.js";

export default function Search() {
 let [wordQuery, setWordQuery] = useState("");
 let [wordData, setWordData] = useState("");

 let wordKey = "82f43b0671f2tb328187o7be4ab620aa";
 let photosKey = "Pl7LGDcAukaMLUCze9lfAs9P5JkiRMueoBQPWKKE7rT07LeIZfURrCtt";

 function handleWordChange(event) {
  setWordQuery(event.target.value);
 }

 function searchWord(event) {
  event.preventDefault();
  let url = `https://api.shecodes.io/dictionary/v1/define?word=${wordQuery}&key=${wordKey}`;
  axios.get(url).then(showWordData);

  let photosUrl = `https://api.pexels.com/v1/search?query=${wordQuery}&per_page=1`;
  axios
   .get(photosUrl, { headers: { Authorization: photosKey } })
   .then(searchPhotos);
 }

 function searchPhotos(response) {
  console.log(response);
 }
 function showWordData(response) {
  setWordData({
   word: response.data.word,
   meanings: response.data.meanings,
   phonetic: response.data.phonetic,
  });
 }

 return (
  <div className="Search">
   <form onSubmit={searchWord}>
    <input
     type="search"
     placeholder="Type a word..."
     onChange={handleWordChange}
    />
    <input type="submit" value="Search" />
   </form>
   <Header results={wordData} />
  </div>
 );
}
