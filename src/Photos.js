import React from "react";

import "./Photos.css";

export default function Photos(props) {
 if (props.results) {
  return (
   <div className="Photos">
    <section>
     {props.results.map(function (photo, index) {
      return <img key={index} src={photo.src.medium} alt="pexels" />;
     })}
    </section>
    <br />
    <p>
     {" "}
     Images Provided by{" "}
     <a href="https://pexels.com" target="_blank" rel="noreferrer">
      Pexels
     </a>
    </p>
   </div>
  );
 } else {
  return null;
 }
}
