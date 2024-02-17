import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import listImage from "../../assets/data-jsons/home/home-image.json";
import { Box } from "@mui/material";

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const SlideShowComponent = () => {
  return (
    <SlideShowStyled className="container-slide">
      <Slide {...proprietes}>
        {listImage.imageSlideShow.map((img, index) => (
          <div key={index} className="each-slide">
            <Box className="width50" display={{ xs: "none", md: "block" }}>
              <img src={img} alt={img} />
              <img
                src={
                  listImage.imageSlideShow[
                    index + 1 === listImage.imageSlideShow.length
                      ? 0
                      : index + 1
                  ]
                }
                alt={img}
              />
            </Box>
            <Box className="width100" display={{ xs: "block", md: "none" }}>
              <img src={img} alt={img} />
            </Box>
          </div>
        ))}
      </Slide>
    </SlideShowStyled>
  );
};

const SlideShowStyled = styled.div`
  &&.container-slide {
    width: 100%;
    margin-inline: auto;
  }

  &&.container-slide {
    .width50 img {
      max-height: 500px;
      min-height: 200px;
      width: 50%;
    }
    .width100 img {
      max-height: 500px;
      min-height: 200px;
      width: 100%;
    }
  }
`;

export default SlideShowComponent;
