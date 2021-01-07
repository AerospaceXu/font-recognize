import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.nav`
  width: 100%;
  height: 88px;
  > ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    > li > a {
      color: rgba(0, 0, 0, 0.54);
      font-size: 18px;
      font-weight: 500;
      margin: 12px;
      padding: 12px;
      transition: 75ms ease-in-out;
      
      &.active, &:hover {
        color: rgb(0, 0, 0);
      }
    }
  }
`;

const Nav: React.FC = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="train">Train</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Nav;
