import React from "react";
import Header from "./header/Header";
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./product/ProductList";
import ScrollToTop from "./ScrollToTop";
import ProductDetail from "./product/ProductDetail";
import FashionPage from "./Routes/FashionPage";
import AccessoryPage from "./Routes/AccessoryPage";
import DigitalPage from "./Routes/Digital";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./Style/myTheme";
import { useRecoilValue } from "recoil";
import { darkModAtom } from "./atom";
import CategoryContainer from "./Routes/CategoryContainer";
import NotFoundPage from "./Routes/NotFoundPage";
import EmptyHeader from "./header/EmptyHeader";
import CartPage from "./Routes/CartPage";

function App() {
  const isDark = useRecoilValue(darkModAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <React.Suspense fallback={<EmptyHeader />}>
          <Header />
        </React.Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <React.Suspense fallback={<h1>loading...</h1>}>
                  <ProductList />
                </React.Suspense>
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/fashion"
            element={
              <React.Suspense
                fallback={
                  <CategoryContainer>
                    <Loader>loading...</Loader>
                  </CategoryContainer>
                }
              >
                <FashionPage />
              </React.Suspense>
            }
          />
          <Route
            path="/accessory"
            element={
              <React.Suspense
                fallback={
                  <CategoryContainer>
                    <Loader>loading...</Loader>
                  </CategoryContainer>
                }
              >
                <AccessoryPage />
              </React.Suspense>
            }
          />
          <Route
            path="/digital"
            element={
              <React.Suspense
                fallback={
                  <CategoryContainer>
                    <Loader>loading...</Loader>
                  </CategoryContainer>
                }
              >
                <DigitalPage />
              </React.Suspense>
            }
          />
          <Route path="/notFound" element={<NotFoundPage />} />
          <Route
            path="/cart"
            element={
              <React.Suspense
                fallback={
                  <CategoryContainer>
                    <Loader>loading...</Loader>
                  </CategoryContainer>
                }
              >
                <CartPage />
              </React.Suspense>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
const GlobalStyle = createGlobalStyle`

  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	overflow-x: hidden;
	font-family: 'Noto Sans KR', sans-serif;
	background-color: ${(p) => p.theme.colors.bodyColor};
  transition:  background-color .3s;
	

	/* 스크롤바 설정*/
/* 스크롤바 설정*/
&::-webkit-scrollbar{
    width: 6px;
}

/* 스크롤바 막대 설정*/
&::-webkit-scrollbar-thumb{
    background: linear-gradient(#f64435, #ffe498);
	/* background-color: white; */

    border-radius: 25px;
}

/* 스크롤바 뒷 배경 설정*/
&::-webkit-scrollbar-track{
    background-color: #575757;
}
	
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
div{
	box-sizing: border-box;
}
a{
	text-decoration: none;
	color: #a6adbb;
	&:visited{
		color: #a6adbb;
	}
}
`;

const Loader = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  color: ${(p) => p.theme.colors.textColor.darker};
`;
export default App;
