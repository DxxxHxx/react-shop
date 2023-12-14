import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  AmericanExpress,
  DinersClub,
  Discover,
  MasterCard,
  PayPal,
  Visa,
} from "./CardImgs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container>
      <Link
        to="https://zero-base.co.kr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Span>제로베이스</Span>
      </Link>

      <IconBox $gap={"10px"}>
        <Visa />
        <MasterCard />
        <AmericanExpress />
        <PayPal />
        <DinersClub />
        <Discover />
      </IconBox>

      <IconBox $gap={"20px"}>
        <Link
          to="https://www.facebook.com/0base"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </Link>
        <Link
          to="https://www.instagram.com/zerobase.official/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </Link>
        <Link
          to="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Link>
      </IconBox>

      <Span>Copyright &copy; 2023 Zero Base</Span>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  justify-content: center;
  height: 280px;
  background-color: ${(p) => p.theme.colors.footerColor};

  transition: all 0.3s;
`;
const Span = styled.span`
  color: ${(p) => p.theme.colors.textColor.darker};
  font-size: 0.9rem;
`;
const IconBox = styled.div<{ $gap: string }>`
  display: flex;
  gap: ${(p) => p.$gap};
  
  svg{
    fill:${(p) => p.theme.colors.textColor.darker};
  }
  font-size: 1.6rem;
  cursor: pointer;
`;
