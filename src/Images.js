import React from "react";

function Images(props) {
  console.log(props.images);
  if (props.images) {
    return (
      <section className="Images">
        <div className="row">
          {props.images.map(function (image, index) {
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
    );
  } else {
    return null;
  }
}

export default Images;
