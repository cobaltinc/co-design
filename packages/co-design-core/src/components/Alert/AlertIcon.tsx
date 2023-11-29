import { SVGProps } from 'react';
import AlertCircle from './icons/AlertCircle';
import CheckCircle from './icons/CheckCircle';
import InfoCircle from './icons/InfoCircle';
import XCircle from './icons/XCircle';
import { useCoTheme } from '@co-design/styles';

interface AlertIconProps extends SVGProps<SVGSVGElement> {
  severity: 'base' | 'info' | 'success' | 'warning' | 'critical';
  color?: string;
  size?: number;
}

const AlertIcon = ({ severity, color, size, ...props }: AlertIconProps) => {
  const theme = useCoTheme();
  const getIconColor = () => {
    switch (severity) {
      case 'success':
        return theme.foundations?.tokens?.color?.icon?.icon_success;
      case 'warning':
        return theme.foundations?.tokens?.color?.icon?.icon_warning;
      case 'critical':
        return theme.foundations?.tokens?.color?.icon?.icon_critical;
      case 'info':
        return theme.foundations?.tokens?.color?.icon?.icon_primary;
      default:
        return theme.foundations?.tokens?.color?.icon?.icon_default;
    }
  };

  const iconStyle = {
    fill: color || getIconColor(),
    width: typeof size === 'number' ? size : undefined,
    height: typeof size === 'number' ? size : undefined,
  };

  switch (severity) {
    case 'success':
      return <CheckCircle style={iconStyle} {...props} />;
    case 'warning':
      return <AlertCircle style={iconStyle} {...props} />;
    case 'critical':
      return <XCircle style={iconStyle} {...props} />;
    case 'info':
      return <InfoCircle style={iconStyle} {...props} />;
    default:
      return <InfoCircle style={iconStyle} {...props} />;
  }
};

export default AlertIcon;
