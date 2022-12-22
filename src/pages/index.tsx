import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components";

import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import Category from "../components/Category/Category";
import Banner from "../components/Banner/Banner";
import Advantages from "../components/Advantages/Advantages";
import Footer from "../components/Footer/Footer";

import "normalize.css"

const Layout = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  font-family: "Inter", "Arial", sans-serif;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header/>

      <Slider/>

      <Category/>
      
      <Banner/>

      <Advantages/>

      <Footer/>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Main page</title>
