import React from "react";

export default function Pokemon({
  height,
  flip,
  front,
  back,
  name,
  displayFront,
}) {
  return (
    <div>
      <p>{name}</p>
      {height ? (
        <>
          <p>Height: {height}</p>
          <img onClick={flip} src={displayFront ? front : back} />
        </>
      ) : null}
    </div>
  );
}
