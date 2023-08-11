import React from 'react';
import { Toast } from '../Toast';

export default {
  title: '@co-design/core/Toast',
  component: Toast,
};

export const Default = () => {
  return <Toast type="success" id="1" message="성공했습니다." duration={1000} />;
};

export const Success = () => {
  return <Toast type="success" id="1" message="성공했습니다." duration={1000} />;
};

export const SuccessWithClose = () => {
  return <Toast type="success" id="1" message="성공했습니다." duration={1000} close />;
};

export const Error = () => {
  return (
    <Toast type="error" id="2" message="문제가 발생했습니다. 계속해서 같은 문제가 발생한다면 present@present.do로 연락바랍니다." duration={1000} />
  );
};

export const ErrorWithClose = () => {
  return (
    <Toast
      type="error"
      id="2"
      message="문제가 발생했습니다. 계속해서 같은 문제가 발생한다면 present@present.do로 연락바랍니다."
      duration={1000}
      close
    />
  );
};

export const Warning = () => {
  return (
    <Toast type="warning" id="3" message="문제가 발생했습니다. 계속해서 같은 문제가 발생한다면 present@present.do로 연락바랍니다." duration={1000} />
  );
};

export const WarningWithClose = () => {
  return (
    <Toast
      type="warning"
      id="3"
      message="문제가 발생했습니다. 계속해서 같은 문제가 발생한다면 present@present.do로 연락바랍니다."
      duration={1000}
      close
    />
  );
};
