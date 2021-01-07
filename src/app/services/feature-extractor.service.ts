import { useCallback, useRef, useState } from 'react';
// @ts-ignore
import ml5 from 'ml5';

export const useFeatureExtractorService = () => {
  const [modelReady, setModelReady] = useState<boolean>(false);

  const classifier = useRef(
    ml5
      .featureExtractor('MobileNet', () => {
        setModelReady(true);
      })
      .classification()
  );

  const addExample = useCallback(
    (image: HTMLCanvasElement, font: string) => {
      if (modelReady) {
        classifier.current.addImage(image, font, (err: any) => {
          if (err) {
            console.error(err);
          }
          console.log('ok');
        });
      }
    },
    [modelReady]
  );

  const trainModel = useCallback(() => {
    try {
      classifier.current.train((lossValue: number) => {
        console.log('Loss is', lossValue);
      });
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  const classify = useCallback((target: HTMLCanvasElement) => {
    return new Promise((resolve, reject) => {
      classifier.current.classify(target, (err: any, result: any) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  }, []);

  return {
    modelReady,
    addExample,
    trainModel,
    classify,
  };
};
