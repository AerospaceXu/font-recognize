import React, { ChangeEvent, useCallback, useRef } from 'react';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface Props {
  setCanvas: (c: HTMLCanvasElement) => void;
}

const Upload: React.FC<Props> = ({ setCanvas }) => {
  const fileUploader = useRef<HTMLInputElement>(null);

  const handleUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        // base64码
        const imgFile = ev.target!.result as string;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d')!;
        const image = new Image();
        image.onload = function () {
          ctx.drawImage(image, 0, 0);
        };
        image.src = imgFile;
        setCanvas(canvas);
      };
      reader.readAsDataURL(e.target.files![0]);
    },
    [setCanvas]
  );

  return (
    <>
      <input
        ref={fileUploader}
        style={{ display: 'none' }}
        type="file"
        onChange={handleUpload}
        accept="image/png,image/jpeg,image/jpg"
      />
      <Button
        icon={<UploadOutlined />}
        onClick={() => fileUploader.current!.click()}
      >
        Click to Upload
      </Button>
    </>
  );
};

export default Upload;
