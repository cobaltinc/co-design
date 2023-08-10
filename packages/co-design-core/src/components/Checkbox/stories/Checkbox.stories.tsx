import React from 'react';
import { Checkbox } from '../Checkbox';

export default {
  title: '@co-design/core/Checkbox',
  component: Checkbox,
};

export const Default = () => {
  return <Checkbox />;
};

export const WithLabel = () => {
  return <Checkbox label="hello" />;
};

export const Disabled = () => {
  return <Checkbox disabled />;
};

export const Indeterminate = () => {
  return <Checkbox indeterminate />;
};

export const Error = () => {
  return <Checkbox error />;
};

export const ErrorCheck = () => {
  return <Checkbox checked error />;
};

export const Block = () => {
  return <Checkbox block />;
};

export const Checked = () => {
  return <Checkbox checked />;
};
