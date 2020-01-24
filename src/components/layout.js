import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import media from "../components/media";
import "./style.css";

const Main = styled.main`
  display: flex;
  align-items: center;
  min-height: 100vh;
  justify-content: space-around;

  ${media.phone} {
    flex-direction: column-reverse;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Main>{children}</Main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
