import React from "react";
import styled from "styled-components";

interface ICategoryContainerProps {
  children: React.ReactNode;
}
export default function CategoryContainer(props: ICategoryContainerProps) {
  return <Container>{props.children}</Container>;
}
const Container = styled.div`
  height: 160vh;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;
