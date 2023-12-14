import { useRecoilValue } from "recoil";
import { electronicsSelector } from "../atom";
import List from "../product/List";
import styled from "styled-components";
import CategoryContainer from "./CategoryContainer";

export default function FashionPage() {
  const data = useRecoilValue(electronicsSelector);

  return (
    <CategoryContainer>
      <Span>홈 {">"} 디지털</Span>
      <List title="디지털" data={data} />
    </CategoryContainer>
  );
}
const Span = styled.span`
  position: absolute;
  top: 20px;
  left: 100px;
  color: ${(p) => p.theme.colors.textColor.darker};
`;
