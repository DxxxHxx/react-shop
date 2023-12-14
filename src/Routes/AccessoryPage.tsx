import { useRecoilValue } from "recoil";
import { jewelerySelector } from "../atom";
import List from "../product/List";
import styled from "styled-components";
import CategoryContainer from "./CategoryContainer";

export default function FashionPage() {
  const data = useRecoilValue(jewelerySelector);

  return (
    <CategoryContainer>
      <Span>홈 {">"} 액세서리</Span>
      <List title="액세서리" data={data} />
    </CategoryContainer>
  );
}
const Span = styled.span`
  position: absolute;
  top: 20px;
  left: 100px;
  color: ${(p) => p.theme.colors.textColor.darker};
`;
