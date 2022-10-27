import React from 'react';
import { Affix } from '../Affix';

export default {
  title: '@co-design/primitive/Affix',
  component: Affix,
};

export const Default = () => {
  return (
    <div style={{ height: 10000 }}>
      <Affix>Affix</Affix>
    </div>
  );
};
