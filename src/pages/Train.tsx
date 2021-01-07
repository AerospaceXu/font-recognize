import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Button, message } from 'antd';

import FontsPanel from '../app/components/FontsPanel';
import { useFeatureExtractorService } from '../app/services/feature-extractor.service';
import { useHtmlToCanvasService } from '../app/services/html-to-canvas.service';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    margin: 12px;
  }
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
  const {
    modelReady,
    addExample,
    trainModel,
    save,
  } = useFeatureExtractorService();
  const { h2c } = useHtmlToCanvasService();

  const fontExamplesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = fontExamplesRef.current;
    if (current && modelReady) {
    }
  }, [addExample, h2c, modelReady]);

  const handleTrain = () => {
    if (!modelReady) {
      message.error('请等待模型加载');
      return;
    }
    const fontSpans = Array.from(
      fontExamplesRef.current!.querySelectorAll('span')
    );
    fontSpans.forEach((fontSpan, index) => {
      const fontFamilyName = fontSpan.style.fontFamily;
      h2c(fontSpan).then(
        (canvas) => {
          addExample(canvas, fontFamilyName);
          if (index === fontSpans.length - 1) {
            trainModel();
          }
        },
        (err) => {
          console.error(err);
        }
      );
    });
  };

  return (
    <Wrapper>
      <FontsPanel fonts={fonts} ref={fontExamplesRef} />
      <Button onClick={handleTrain}>训练</Button>
      <Button onClick={() => save()}>保存</Button>
    </Wrapper>
  );
};

export default Train;
