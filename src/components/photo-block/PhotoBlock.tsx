import React, { type FC } from "react";
import "./PhotoBlock.css";
import data from "../../data/images.json";

const PhotoBlock: FC = () => {
  return (
    <section>
      <div className="photoblock">
        {data.map((item) => (
          <img
            className="photoblock__image"
            key={item.id}
            src={item.src}
            alt={`${item.name} icon`}
          ></img>
        ))}
      </div>
    </section>
  );
};

export default PhotoBlock;
