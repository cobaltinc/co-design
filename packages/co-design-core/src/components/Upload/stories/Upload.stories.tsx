import React, { useState } from 'react';
import { Upload } from '../Upload';
import { Button } from '../../Button';

export default {
  title: '@co-design/core/Upload',
  component: Upload,
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Upload>
        <Button>Click me</Button>
      </Upload>
    </div>
  );
};

export const AccessFile = () => {
  return (
    <div style={{ padding: 30 }}>
      <Upload>{(file: File) => <Button>{file ? file.name : 'Click me'}</Button>}</Upload>
    </div>
  );
};

export const Draggable = () => {
  return (
    <div style={{ padding: 30 }}>
      <Upload draggable>
        {(file: File, dragging) => (
          <div style={{ height: 100, width: 300, border: '4px dashed #aaa', borderColor: dragging ? 'black' : '#aaa' }}>
            {file ? file.name : 'Click or drag file to this area to upload.'}
          </div>
        )}
      </Upload>
    </div>
  );
};

export const Multiple = () => {
  const [files, setFiles] = useState<File[]>();

  return (
    <div style={{ padding: 30 }}>
      <Upload multiple onChange={async (files: File[]) => setFiles(files)}>
        {(files: File[], dragging) => (
          <div style={{ height: 100, width: 300, border: '4px dashed #aaa', borderColor: dragging ? 'black' : '#aaa' }}>
            Click or drag file to this area to upload.
          </div>
        )}
      </Upload>

      <div style={{ marginTop: 40 }}>
        {files?.map((file, index) => (
          <div key={index} style={{ padding: 16, marginBottom: 8, width: 300, border: '1px solid #aaa' }}>
            file: {file.name}
          </div>
        ))}
      </div>
    </div>
  );
};
