import React from "react";

export default function Photos(props) {
 if (props.results) {
  return (
   <div className="Photos">
    {props.results.map(function (photo, index) {
     return (
      <div key={index}>
       <img src={photo.url} alt="pexels" />
      </div>
     );
    })}
   </div>
  );
 } else {
  return null;
 }
}
