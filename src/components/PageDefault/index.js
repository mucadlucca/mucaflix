import React from 'react';
import Styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = Styled.main`
  background-color: var(--grayDark);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 3%;
  padding-right: 3%;
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  )
}

export default PageDefault;