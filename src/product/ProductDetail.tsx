import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import { getSingleProduct } from "../fetchData";
import Stars from "./Stars";
import { IncreaseItemAmount, basketState } from "../atom";
import { useRecoilValue } from "recoil";

interface IProductInfo {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductDetail() {
  const [productInfo, setProductInfo] = useState<IProductInfo>();
  const { id } = useParams();

  const cart = useRecoilValue(basketState);

  useEffect(() => {
    (async () => {
      const res = await getSingleProduct(Number(id));
      return res;
    })().then((data) => setProductInfo(data));
  }, [id]);

  

  const increase = IncreaseItemAmount(+id!);

  const clickAddCart = () => {
    increase();
  };
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[increase,cart])
  return (
    <Container>
      {productInfo ? (
        <>
          <Category>
            {productInfo?.category} &gt; {productInfo?.title}
          </Category>

          <ContentWrapper>
            <ImgWrapper>
              <Img src={productInfo.image} />
            </ImgWrapper>

            <TextWrapper>
              <Title>{productInfo.title}</Title>
              <Desc>{productInfo.description}</Desc>
              <StarRate>
                <Stars rate={productInfo.rating.rate} />
                <RatingText>
                  {productInfo.rating.rate} / {productInfo.rating.count} 참여
                </RatingText>
              </StarRate>
              <Price>${Math.floor(productInfo.price)}</Price>
              <KeepBtn onClick={clickAddCart}>장바구니에 담기</KeepBtn>
              <Link to="/cart">
                <MoveBtn>장바구니로 이동</MoveBtn>
              </Link>
            </TextWrapper>
          </ContentWrapper>
        </>
      ) : (
        <Loader>Loading ...</Loader>
      )}
    </Container>
  );
}
const Container = styled.section`
  min-height: 65vh;
  background-color: ${(p) => p.theme.colors.bodyColor};
  color: white;

  padding: 20px;
`;
const Category = styled.span`
  font-size: 14px;
  color: ${(p) => p.theme.colors.textColor.darker};
`;
const ContentWrapper = styled.div`
  width: 100%;

  padding: 8px 10px;

  margin-top: 50px;

  display: flex;
  gap: 5%;

  @media screen and (max-width: 1150px) {
    display: flex;
    flex-direction: column;

    overflow-y: auto;
  }
`;
const ImgWrapper = styled.div`
  max-width: 350px;
  max-height: 350px;
  background-color: white;
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  max-width: 350px;
  max-height: 350px;

  transform: scale(0.8);
`;
const TextWrapper = styled.div`
  max-height: 350px;
  color: ${(p) => p.theme.colors.textColor.darker};
`;
const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 50px;
`;
const Desc = styled.span`
  font-size: 1.1rem;
  line-height: 30px;
`;
const StarRate = styled.div`
  margin: 15px 0;
`;
const Price = styled.h1`
  font-size: 2rem;
  margin: 20px 0;
`;
const RatingText = styled.span`
  margin-left: 5px;
  font-size: 1rem;
`;

export const Btn = styled.button`
  width: 130px;
  height: 48px;
  border-radius: 10px;
  font-weight: bold;
  border: none;

  cursor: pointer;
`;

const KeepBtn = styled(Btn)`
  margin-right: 10px;
  color: white;
  background-color: #661ae6;

  &:hover {
    background-color: rgba(102, 26, 230, 0.5);
  }
`;
const MoveBtn = styled(Btn)`
  color: ${(p) => p.theme.colors.textColor.darker};
  background-color: inherit;
  border: 1px solid ${(p) => p.theme.colors.textColor.darker};
  &:hover {
    background-color: ${(p) => p.theme.colors.textColor.darker};
    color: ${(p) => p.theme.colors.bodyColor};
  }
`;

const Loader = styled.h1`
  font-size: 3rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(p) => p.theme.colors.textColor.darker};
`;
