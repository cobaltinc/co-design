import React, { useEffect } from 'react';
import Toast from '../core';

export default {
  title: '@co-design/core/ToastArea',
};

export const Default = {
  render: (props) => {
    useEffect(() => {
      Toast.success('마운트 시 알림');
    }, []);

    return (
      <div>
        <div>
          <h2>No Close</h2>
          <button onClick={() => Toast.success('성공')}>success</button>
          <button onClick={() => Toast.error('실패')}>error</button>
          <button onClick={() => Toast.warning('경고')}>warning</button>
        </div>
        <div>
          <h2>With Close</h2>
          <button onClick={() => Toast.success('성공', { close: true })}>success</button>
          <button onClick={() => Toast.error('실패', { close: true })}>error</button>
          <button onClick={() => Toast.warning('경고', { close: true })}>warning</button>
        </div>
      </div>
    );
  },
};
