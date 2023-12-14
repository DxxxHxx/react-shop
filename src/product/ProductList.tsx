import styled from "styled-components";
import List from "./List";
import {
  electronicsSelector,
  fashionSelector,
  jewelerySelector,
} from "../atom";
import { useRecoilValue } from "recoil";


export default function ProductList() {
  const fashionData = useRecoilValue(fashionSelector);
  const jeweleryData = useRecoilValue(jewelerySelector);
  const electronicsData = useRecoilValue(electronicsSelector);

  return (
    <Container>
      <List title="패션" data={fashionData} limit={4} />
      <List title="액세서리" data={jeweleryData} limit={4} />
      <List title="디지털" data={electronicsData} limit={4} />
    </Container>
  );
}

const Container = styled.section`
  max-height: 300vh;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 30px;
`;
