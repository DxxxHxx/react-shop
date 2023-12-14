import styled from "styled-components";
import { IData } from "../atom";
import Item from "./Item";
import { Link } from "react-router-dom";

interface IListProps {
  title: string;
  data: IData[];
  limit?: number;
}
export default function List({ title, data, limit = 10 }: IListProps) {
  return (
    <Container>
      <Title>{title}</Title>

      <ItemContainer>
        {data.map(
          (item, index) =>
            index < limit && (
              <Link key={item.id} to={`/product/${item.id}`}>
                <Item src={item.image} title={item.title} price={item.price} />
              </Link>
            )
        )}
      </ItemContainer>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  max-height: 650px;
  padding: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: ${(p) => p.theme.colors.textColor.darker};
`;
const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  gap: 2%;

  @media screen and (max-width: 767px) {
    overflow-y: auto;
  }
`;
