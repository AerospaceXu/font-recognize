import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useFeatureExtractorService } from '../app/services/feature-extractor.service';
import Upload from '../app/components/Upload';

const Wrapper = styled.main`
  width: 100%;

  > span {
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, 0.12);
    font-size: 24px;
  }
`;

const Home: React.FC = () => {
  const [targetFont, setTargetFont] = useState<HTMLCanvasElement | null>(null);
  const {
    modelReady,
    load,
    modelLoaded,
    classify,
  } = useFeatureExtractorService();

  const [fontName, setFontName] = useState<string>('');

  useEffect(() => {
    if (modelReady) {
      load();
    }
  }, [load, modelReady]);

  useEffect(() => {
    if (modelLoaded && targetFont) {
      classify(targetFont).then((r) => {
        console.log(r);
        // @ts-ignore
        setFontName(r[0].label);
      });
    }
  }, [classify, modelLoaded, targetFont]);

  return (
    <Wrapper>
      <Upload setCanvas={(c) => setTargetFont(c)} />
      <h1>{fontName}</h1>
    </Wrapper>
  );
};

export default Home;
