import React from 'react';
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from 'react-image-gallery';
import MEDAL1 from "../assets/images/medal1.jpg";
import MEDAL2 from "../assets/images/medal2.jpg";
import MEDAL3 from "../assets/images/medal3.webp";

const IMAGES = [
  {
    original: MEDAL1,
    thumbnail: MEDAL1,
  },
  {
    original: MEDAL2,
    thumbnail: MEDAL2,
  },
  {
    original: MEDAL3,
    thumbnail: MEDAL3,
  },
];

const StyledGallery = styled.span`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 70px);
`

function Gallery() {
  return (
    <StyledGallery>
      <ReactImageGallery items={IMAGES}></ReactImageGallery>
    </StyledGallery>
  );
}

export default Gallery;