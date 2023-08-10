import React from 'react';
import { Checkbox } from '../NewCheckbox';

export default {
  title: '@co-design/core/NewCheckbox',
  component: Checkbox,
};

export const Default = () => {
  return <Checkbox />;
};

export const Disabled = () => {
  return <Checkbox disabled />;
};

export const DisabledCheck = () => {
  return <Checkbox disabled checked />;
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
