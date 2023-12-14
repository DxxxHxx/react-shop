import { useRecoilValue } from "recoil";
import { fashionSelector } from "../atom";
import List from "../product/List";
import styled from "styled-components";
import CategoryContainer from "./CategoryContainer";

export default function FashionPage() {
  const data = useRecoilValue(fashionSelector);

  return (
    <CategoryContainer>
      <Span>홈 {">"} 패션</Span>
      <List title="패션" data={data} />
    </CategoryContainer>
  );
}
const Span = styled.span`
  position: absolute;
  top: 20px;
  left: 100px;
  color: ${(p) => p.theme.colors.textColor.darker};
`;
