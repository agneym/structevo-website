import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import "./style.css";

const Main = styled.main`
  display: flex;
  align-items: center;
  min-height: 100vh;
  justify-content: space-around;
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
