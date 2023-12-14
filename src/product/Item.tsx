import styled from "styled-components";

interface IItemProps {
  src: string;
  title: string;
  price: number;
}
export default function Item({ src, title, price }: IItemProps) {
  return (
    <Figure>
      <Img src={src} />
      <Figcaption>
        <TextContainer>
          <Text>{title}</Text>
          <Text>${price}</Text>
        </TextContainer>
      </Figcaption>
    </Figure>
  );
}
const Figure = styled.figure`
  width: 240px;
  height: 400px;
  min-height: 420px;
  flex-basis: 23.5%;
  flex-shrink: 1;
  flex-grow: 1;

  margin-bottom: 10px;

  background-color: white;

  display: flex;
  flex-direction: column;

  border: 3px solid ${(p) => p.theme.colors.cardBgColor};
  /* border: 1px solid black; */

  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  @media screen and (max-width: 1080px) {
    /* width: 10px; */
    height: 200px;
    min-height: 200px;
    flex-basis: 48%;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 767px) {
    flex-basis: 100%;
    min-height: 250px;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 300px;
  min-height: 300px;

  border-top-right-radius: 15px;
  border-top-left-radius: 15px;

  transform: scale(0.5);
  transition: transform 0.3s;

  &:hover {
    transform: scale(0.6);
  }
  @media screen and (max-width: 1080px) {
    height: 120px;
    min-height: 120px;
  }
`;
const Figcaption = styled.figcaption`
  flex-grow: 1;
  background-color: ${(p) => p.theme.colors.cardBgColor};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;

  transition: all 0.3s;
`;
const TextContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 10px;

  color: ${(p) => p.theme.colors.textColor.darker};
`;
const Text = styled.span``;
