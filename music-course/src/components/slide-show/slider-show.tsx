import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import listImage from "../../assets/data-jsons/home/home-image.json";

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
            <div>
              <img src={img} alt={img} />
            </div>
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

  &&.container-slide img {
    max-height: 500px;
    min-height: 200px;
    width: 100%;
  }
`;

export default SlideShowComponent;
