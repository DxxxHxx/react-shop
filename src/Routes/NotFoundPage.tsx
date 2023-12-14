import styled from "styled-components";
import { Btn } from "../product/ProductDetail";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <TextContainer>
        <MainText>404</MainText>
        <SubText>페이지를 찾을 수 없습니다.</SubText>
        <LinkBtn onClick={() => navigate("/")}>메인으로</LinkBtn>
      </TextContainer>
    </Container>
  );
}
const Container = styled.div`
  height: 70vh;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(p) => p.theme.colors.textColor.darker};
`;
const TextContainer = styled.div`
  text-align: center;
`;
const MainText = styled.h1`
  font-size: 10rem;
`;
const SubText = styled.h2`
  font-size: 2rem;
  line-height: 100px;
`;
const LinkBtn = styled(Btn)`
  color: white;
  background-color: rgb(102, 26, 230);

  &:hover {
    background-color: rgba(102, 26, 230, 0.7);
  }
`;
