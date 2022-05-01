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
        <div className="contact-line d-none d-sm-block">
          This website was coded by{" "}
          <a
            href="https://hopeful-franklin-29cc80.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Barbara Freitas
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/bfreitas1098/dictionary-project"
            target="_blank"
            rel="noreferrer noopener"
          >
            open-sourced
          </a>{" "}
          on Github.
        </div>
      </div>
    );
  } else {
    return null;
  }
};
