import { useCallback, useRef, useState } from 'react';
// @ts-ignore
import ml5 from 'ml5';
import { message } from 'antd';

export const useFeatureExtractorService = () => {
  const [modelReady, setModelReady] = useState<boolean>(false);
  const [modelLoaded, setModelLoaded] = useState<boolean>(false);

  const createClassifier = useCallback(() => {
    return ml5
      .featureExtractor('MobileNet', () => {
        message.success('模型加载完成');
        setModelReady(true);
      })
      .classification();
  }, []);

  const classifier = useRef(createClassifier());

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

  const save = useCallback(() => {
    classifier.current.save();
  }, []);

  const load = useCallback(() => {
    classifier.current.load(
      process.env.PUBLIC_URL + './models/model.json',
      () => {
        setModelLoaded(true);
      }
    );
  }, []);

  return {
    modelReady,
    modelLoaded,
    addExample,
    trainModel,
    classify,
    save,
    load,
  };
};
