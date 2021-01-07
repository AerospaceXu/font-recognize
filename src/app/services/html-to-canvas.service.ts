import html2canvas from 'html2canvas';
import { useCallback } from 'react';

export const useHtmlToCanvasService = () => {
  const h2c = useCallback(async (html: HTMLElement) => {
    try {
      return await html2canvas(html);
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  return {
    h2c,
  };
};
