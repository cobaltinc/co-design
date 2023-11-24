import React, { SVGProps } from 'react';
import CheckCircle from './icons/CheckCircle';
import CloseCircle from './icons/CloseCircle';
import AlertCircle from './icons/AlertCircle';
import Close from './icons/Close';
import InfoCircle from './icons/InfoCircle';

type ToastIconType = 'alert-circle' | 'check-circle' | 'close-circle' | 'close' | 'info-circle';

interface ToastIconProps extends SVGProps<SVGSVGElement> {
  type: ToastIconType;
  color?: string;
  size?: number;
}

const ToastIcon = ({ type, color, size, ...props }: ToastIconProps) => {
  const iconStyle = {
    fill: color,
    width: typeof size === 'number' ? size : undefined,
    height: typeof size === 'number' ? size : undefined,
  };

  switch (type) {
    case 'check-circle':
      return <CheckCircle style={iconStyle} {...props} />;
    case 'alert-circle':
      return <AlertCircle style={iconStyle} {...props} />;
    case 'close-circle':
      return <CloseCircle style={iconStyle} {...props} />;
    case 'close':
      return <Close style={iconStyle} {...props} />;
    case 'info-circle':
      return <InfoCircle style={iconStyle} {...props} />;
    default:
      return <AlertCircle style={iconStyle} {...props} />;
  }
};

export default ToastIcon;
