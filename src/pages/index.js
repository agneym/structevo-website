import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CSImage from "../components/CSImage";
import InfoSection from "../components/InfoSection";

const Logo = styled.img`
  height: 12rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <InfoSection />
    <CSImage />
  </Layout>
);

export default IndexPage;
