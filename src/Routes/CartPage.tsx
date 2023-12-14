import { useRecoilValue } from "recoil";
import { DeleteAll, IncreaseItemAmount, basketState } from "../atom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import { DecreaseItemAmount } from "./../atom";

export default function CartPage() {
  const navigate = useNavigate();
  const cart = useRecoilValue(basketState);

  const filteredCart = cart.filter((item) => item.amount > 0);

  const totalPrice = filteredCart.reduce((prev, cur) => {
    return (prev += cur.price * cur.amount);
  }, 0);

  const [id, setId] = useState(0);
  const increase = IncreaseItemAmount(id);
  const decrease = DecreaseItemAmount(id);
  const deleteCart = DeleteAll();

  const handleCntUp = () => {
    increase();
    localStorage.setItem("cart", JSON.stringify(cart));
    
  };

  const handleCntDown = () => {
    decrease();
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const handleDeleteAll = () => {
    if (filteredCart.length === 0) {
      alert("상품이 없습니다.");
      return;
    }

    if (window.confirm("전체 삭제 하시겠습니까?")) {
      deleteCart();
      localStorage.removeItem("cart");
      return;
    } else {
      return;
    }
  };

  return (
    <Wrapper>
      <Where>홈 {">"} 장바구니</Where>

      <Container>
        <InfoContainerWrapper>
          {filteredCart.length !== 0 ? (
            filteredCart.map((item) => (
              <InfoContainer key={item.id}>
                <ImgContainer>
                  <Img src={item.image} />
                </ImgContainer>
                <div>
                  <Text>
                    {item.title}
                    <br />${item.price}
                  </Text>
                  <ControlBtn>
                    <CntDown
                      onClick={() => {
                        setId(() => item.id);
                        handleCntDown();
                      }}
                    >
                      -
                    </CntDown>
                    <Amount>{item.amount}</Amount>
                    <CntUp
                      onClick={() => {
                        setId(item.id)
                        handleCntUp();
                        
                      }}
                    >
                      +
                    </CntUp>
                  </ControlBtn>
                </div>
              </InfoContainer>
            ))
          ) : (
            <>
              <Text>장바구니에 물품이 없습니다</Text>
              <BuyingBtn onClick={() => navigate("/")}>담으러 가기</BuyingBtn>
            </>
          )}
        </InfoContainerWrapper>

        <ResultContainer>
          <TotalPrice>총 : ${totalPrice.toFixed(2)}</TotalPrice>
          <BuyingBtn $delete onClick={handleDeleteAll}>
            전체 삭제
          </BuyingBtn>
        </ResultContainer>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  /* background-color: black; */
  min-height: 75vh;

  position: relative;
  display: flex;
  align-items: center;

  overflow-y: auto;
`;
const Where = styled.span`
  position: absolute;
  top: 2vh;
  left: 3vw;

  color: ${(p) => p.theme.colors.textColor.darker};
`;
const Container = styled.div`
  /* background-color: #373838; */
  width: 80%;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 7vh;
  left: 0;
  right: 0;
  margin: 0 auto;

  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const InfoContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const InfoContainer = styled.div`
  /* background-color: aqua; */

  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5%;
  }
`;
const ImgContainer = styled.div`
  width: 100%;
  min-height: 15vh;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;

  @media screen and (min-width: 767px) {
    max-width: 15vw;
    height: 15vw;
  }
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
`;
const Text = styled.div`
  font-size: 1.3rem;
  color: ${(p) => p.theme.colors.textColor.darker};
  line-height: 2em;

  @media screen and (min-width: 767px) {
    font-size: 1rem;
    line-height: 1.5em;
  }
`;
const ControlBtn = styled.div`
  width: 20%;
  display: flex;
  align-items: center;

  margin-top: 10px;
`;
const CntDown = styled.button`
  width: 100px;
  height: 40px;
  font-size: 1.3rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgb(102, 26, 230);
  border: none;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(102, 26, 230, 0.5);
  }

  @media screen and (min-width: 767px) {
    width: 100px;
  }
`;
const Amount = styled.span`
  font-size: 1.4rem;
  margin: 0 0.3em;
  color: ${(p) => p.theme.colors.textColor.darker};
`;
const CntUp = styled.button`
  width: 100px;
  height: 40px;
  font-size: 1.3rem;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
  color: white;
  background-color: rgb(102, 26, 230);

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(102, 26, 230, 0.5);
  }
  @media screen and (min-width: 767px) {
    width: 100px;
  }
`;
const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: tomato; */
  width: 30vw;
  margin-top: 2em;

  @media screen and (min-width: 767px) {
    max-height: 10vh;
    display: flex;
    margin-top: 0;
    align-items: center;
    justify-content: space-around;
  }
`;
const TotalPrice = styled.span`
  font-size: 2rem;
  color: ${(p) => p.theme.colors.textColor.darker};
  flex-shrink: 0;
`;
const BuyingBtn = styled.button<{ $delete?: boolean }>`
  width: 40%;
  height: 5vh;
  border-radius: 10px;
  border: none;
  color: white;
  padding: 3px 5px;
  background-color: rgb(102, 26, 230);

  flex-shrink: 0;
  &:hover {
    background-color: ${(p) =>
      p.$delete ? "#ef3c3c" : "rgba(102, 26, 230, 0.5)"};
  }

  @media screen and (min-width: 767px) {
    min-width: 30%;
    height: 7vh;
  }
`;
