import styled from "styled-components";
import { IoMdArrowDropleft } from "react-icons/io";

interface IPrevArrowProps {
  onClick: () => void;
}
export default function PrevArrow({ onClick }: IPrevArrowProps) {
  return (
    <Btn onClick={onClick}>
      <IoMdArrowDropleft />
    </Btn>
  );
}
const Btn = styled.button`
  border: none;
  background-color: inherit;
  font-size: 40px;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  color: white;
  z-index: 10;

  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
