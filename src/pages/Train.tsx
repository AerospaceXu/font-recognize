import React, { useRef } from 'react';
import styled from 'styled-components';
import FontsPanel from '../app/components/FontsPanel';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const fonts = [
  'STBaoliSC-Regular',
  'Arial',
  'STSongti-SC-Regular',
  'HannotateSC-W5',
  'WeibeiSC-Bold',
  'STXingkaiSC-Bold',
  'STYuanti-SC-Regular',
  'MLingWaiMedium-SC',
  'DFWaWaSC-W5',
];

const Train: React.FC = () => {
  const fontExamplesRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <FontsPanel fonts={fonts} ref={fontExamplesRef} />
    </Wrapper>
  );
};

export default Train;
