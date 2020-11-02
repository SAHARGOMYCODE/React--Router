import React from "react";
import { moviesData } from "../Constants/data";

function Description(props) {
  let title = props.match.params.name;
  const movie = moviesData.filter((el) => el.name == title);
  return (
    <div>
      {movie.map((el) => (
        <div>
          {" "}
          <h2>{el.name}</h2>
          <h3>{el.description}</h3>
          <iframe
            width="560"
            height="315"
            src={el.src}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default Description;
