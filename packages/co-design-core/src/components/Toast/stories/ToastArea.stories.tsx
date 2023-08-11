import React, { useEffect } from 'react';
import Toast from '../core';

export default {
  title: '@co-design/core/ToastArea',
};

export const Default = () => {
  useEffect(() => {
    Toast.success('마운트 시 알림');
  }, []);
  return (
    <div>
      <button onClick={() => Toast.success('성공')}>success</button>
      <button onClick={() => Toast.error('실패')}>error</button>
      <button onClick={() => Toast.warning('경고')}>warning</button>
    </div>
  );
};
