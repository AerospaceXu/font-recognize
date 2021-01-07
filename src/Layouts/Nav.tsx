import React, { useCallback, useState } from 'react';
import { NavLink as Link } from 'react-router-dom';

import { Menu } from 'antd';

import styled from 'styled-components';

const Wrapper = styled.nav`
  width: 100%;
  height: 88px;
`;

const Nav: React.FC = () => {
  const [current, setCurrent] = useState({
    current: 'home',
  });
  const handleClick = useCallback((e) => {
    setCurrent({ current: e.key });
  }, []);
  return (
    <Wrapper>
      <Menu
        onClick={handleClick}
        selectedKeys={[current.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="train">
          <Link to="train">Train</Link>
        </Menu.Item>
      </Menu>
    </Wrapper>
  );
};

export default Nav;
