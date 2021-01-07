import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100%;

  > span {
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, 0.12);
    font-size: 24px;
  }
`;

const Home: React.FC = () => {
  return (
    <Wrapper>
      <h1>Home Page Works!!!</h1>
    </Wrapper>
  );
};

export default Home;
