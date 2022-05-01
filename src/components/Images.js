import React from "react";

import "../styles/Images.css";

export const Images = ({ images }) => {
  if (images) {
    return (
      <div className="Images">
        <section>
          <div className="row">
            {images.map(function (image, index) {
              return (
                <div className="col-4" key={index}>
                  <a href={image.src.original} rel="noreferrer" target="_blank">
                    <img
                      src={image.src.landscape}
                      alt={image.alt}
                      className="img-fluid"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
};
