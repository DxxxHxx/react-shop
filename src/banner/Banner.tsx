import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "styled-components";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { Btn } from "../product/ProductDetail";
import { useNavigate } from "react-router-dom";

// TODO: 마지막에 컴포넌트 나누기 작업

const bannerImgs = [
  {
    src: "https://react-shop-oinochoe.vercel.app/assets/img_shop_fashion-32c29a86.jpeg",
    id: 1,
  },
  {
    src: "https://react-shop-oinochoe.vercel.app/assets/img_shop_digital-c7904ed6.jpeg",
    id: 2,
  },
  {
    src: "https://react-shop-oinochoe.vercel.app/assets/img_shop_grocery-63da3845.jpeg",
    id: 3,
  },
];
export default function Banner() {

  const navigate=useNavigate();

  const settings: Settings = {
    dots: true,
    lazyLoad: "ondemand",
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    autoplay: true,
  };
  return (
    <div>
      <StyledSlider {...settings}>
        <ImgContainer $src={bannerImgs[0].src}>
          <TextContainer>
            <MainText>물빠진 청바지!</MainText>
            <SubText>이제 막 도착한 패션 청바지를 구경해 보세요.</SubText>
            <LinkBtn onClick={()=>navigate("/fashion")}>바로가기 &rarr;</LinkBtn>
          </TextContainer>
        </ImgContainer>

        <ImgContainer $src={bannerImgs[1].src}>
          <TextContainer>
            <MainText>신속한 업무처리!</MainText>
            <SubText >다양한 디지털 상품을 둘러보세요.</SubText>
            <LinkBtn onClick={()=>navigate("/digital")}>바로가기 &rarr;</LinkBtn>
          </TextContainer>
        </ImgContainer>

        <ImgContainer $src={bannerImgs[2].src}>
          <TextContainer>
            <MainText>신선한 식품!</MainText>
            <SubText>농장 직배송으로 더욱 신선한 식료품을 만나보세요.</SubText>
            <LinkBtn onClick={()=>navigate("/notfound")}>바로가기 &rarr;</LinkBtn>
          </TextContainer>
        </ImgContainer>
      </StyledSlider>
    </div>
  );
}

const StyledSlider = styled(Slider)`
  font-size: 0;
  .slick-dots {
    bottom: 25px;
    /* color: white; */
    display: block;
    li button:before {
      color: white;
      font-size: 10px;
    }
  }
`;
const ImgContainer = styled.div<{ $src: string }>`
  max-width: 100%;
  height: 100vh;
  /* background-image: url(${(p) => p.$src}); */
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.5)
    ),
    url(${(p) => p.$src});
  background-position: center center;
  background-size: cover;

  position: relative;

  @media screen and (max-width: 767px) {
    height: 40vh;
  }
`;
const TextContainer = styled.div`
  width: 40%;

  height: 30vh;
  /* background-color: tomato; */

  position: absolute;
  top: 0;
  bottom: 0;
  left: 100px;
  margin: auto 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const MainText = styled.h2`
  font-size: 2rem;
  color: white;
  font-weight: bold;
`;
const SubText = styled.h3`
  font-size: 1.2rem;
  color: white;
`;
const LinkBtn = styled(Btn)`
  background-color:  rgb(25, 29, 36);
  color: white;

  &:hover {
    background-color: rgba(25, 29, 36, 0.9);
  }
`;
