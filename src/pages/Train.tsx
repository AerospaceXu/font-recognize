import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import FontsPanel from '../app/components/FontsPanel';
import { useFeatureExtractorService } from '../app/services/feature-extractor.service';
import { useHtmlToCanvasService } from '../app/services/html-to-canvas.service';

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
  const { modelReady, addExample, trainModel } = useFeatureExtractorService();
  const { h2c } = useHtmlToCanvasService();

  const fontExamplesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = fontExamplesRef.current;
    if (current && modelReady) {
      const fontSpans = Array.from(current.querySelectorAll('span'));
      console.log(fontSpans);
      fontSpans.forEach((fontSpan) => {
        const fontFamilyName = fontSpan.style.fontFamily;
        h2c(fontSpan).then(
          (canvas) => addExample(canvas, fontFamilyName),
          (err) => {
            console.error(err);
          }
        );
      });
    }
  }, [addExample, h2c, modelReady]);

  return (
    <Wrapper>
      <FontsPanel fonts={fonts} ref={fontExamplesRef} />
      <button onClick={() => trainModel()}>训练</button>
    </Wrapper>
  );
};

export default Train;
