import styled from "styled-components";

const LOADING_IMG =
  "https://www.jqueryscript.net/images/jQuery-Ajax-Loading-Overlay-with-Loading-Text-Spinner-Plugin.jpg";
export default function ItemSkeleton() {
  return (
    <Figure>
      <Img src={LOADING_IMG} />
      <Figcaption>
        <TextContainer>
          <Text>loading ...</Text>
          <Text>$loading ...</Text>
        </TextContainer>
      </Figcaption>
    </Figure>
  );
}
const Figure = styled.figure`
  width: 240px;
  height: 450px;
  min-height: 450px;
  flex-basis: 23.5%;
  flex-shrink: 1;
  flex-grow: 1;
  background-color: #374151;

  display: flex;
  flex-direction: column;

  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  @media screen and (max-width: 1060px) {
    /* width: 10px; */
    height: 200px;
    min-height: 200px;
    flex-basis: 48%;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 767px) {
    flex-basis: 100%;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 300px;
  min-height: 300px;

  border-top-right-radius: 15px;
  border-top-left-radius: 15px;

  @media screen and (max-width: 1060px) {
    height: 120px;
    min-height: 120px;
  }
`;
const Figcaption = styled.figcaption`
  flex-grow: 1;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;
`;
const TextContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Text = styled.span``;
