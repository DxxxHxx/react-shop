import styled from "styled-components";
import { IoMdArrowDropright } from "react-icons/io";

interface INextArrowProps {
  onClick: () => void;
}
export default function NextArrow({ onClick }: INextArrowProps) {
  return (
    <Btn onClick={onClick}>
      <IoMdArrowDropright />
    </Btn>
  );
}
const Btn = styled.button`
  border: none;
  background-color: inherit;
  font-size: 40px;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  color: white;
  z-index: 10;
  transition: background-color .5s ease-in-out;


  &:hover{
    background-color: rgba(0,0,0,.3);

    
  }
`;
