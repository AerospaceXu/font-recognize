import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;

  > .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > h2 {
      font-size: 18px;
      margin-right: 32px;
    }

    > .fonts {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

interface Props {
  fonts: string[];
}

const FontsPanel: React.FC<Props> = ({ fonts }) => {
  return (
    <Wrapper>
      {fonts.map((font) => (
        <div className="row" style={{ fontFamily: font }} key={font}>
          <h2>{font}</h2>
          <div className="fonts">
            <span style={{ fontSize: '14px', fontWeight: 200 }}>你好</span>
            <span style={{ fontSize: '14px' }}>你好</span>
            <span style={{ fontSize: '14px', fontWeight: 600 }}>你好</span>
            <span style={{ fontSize: '20px', fontWeight: 200 }}>你好</span>
            <span style={{ fontSize: '20px' }}>你好</span>
            <span style={{ fontSize: '20px', fontWeight: 600 }}>你好</span>
            <span style={{ fontSize: '28px', fontWeight: 200 }}>你好</span>
            <span style={{ fontSize: '28px' }}>你好</span>
            <span style={{ fontSize: '28px', fontWeight: 600 }}>你好</span>
            <span style={{ fontSize: '38px', fontWeight: 200 }}>你好</span>
            <span style={{ fontSize: '38px' }}>你好</span>
            <span style={{ fontSize: '38px', fontWeight: 600 }}>你好</span>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default FontsPanel;
