import { useEffect, useState } from 'react';

export interface OrientationState {
  angle: number;
  type: string;
}

const defaultState: OrientationState = {
  angle: 0,
  type: 'landscape-primary',
};

export const useOrientation = (initialState: OrientationState = defaultState) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const screen = window.screen;
    let mounted = true;

    const onChange = () => {
      if (mounted) {
        const { orientation } = screen as any;

        if (orientation) {
          const { angle, type } = orientation;
          setState({ angle, type });
        } else if (window.orientation !== undefined) {
          setState({
            angle: typeof window.orientation === 'number' ? window.orientation : 0,
            type: '',
          });
        } else {
          setState(initialState);
        }
      }
    };

    window.addEventListener('orientationchange', onChange);
    onChange();

    return () => {
      mounted = false;
      window.addEventListener('orientationchange', onChange);
    };
  }, []);

  return state;
};
