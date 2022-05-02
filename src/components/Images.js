import React from "react";
import styled from "styled-components";

import { theme } from "../styles/ColorStyles";

export const Images = ({ images }) => {
  if (images) {
    return (
      <Wrapper>
        {images.map(function (image, index) {
          return (
            <ImageSection key={index}>
              <a href={image.src.original} rel="noreferrer" target="_blank">
                <img
                  src={image.src.tiny}
                  alt={image.alt}
                  className="img-fluid"
                />
              </a>
            </ImageSection>
          );
        })}
      </Wrapper>
    );
  } else {
    return null;
  }
};

const Wrapper = styled.div`
  position: relative;
`;

const ImageSection = styled.div`
  img {
    display: grid;
    border-radius: 4px;
    margin: 20px 0;
    border: 3px solid ${theme.borderColor};
    height: 80px;
  }
`;
