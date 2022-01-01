import React, { useState, useRef, useEffect, CSSProperties, forwardRef, useImperativeHandle } from 'react';
import { CoRadius, CoComponentProps, ClassNames } from '@co-design/styles';
import useStyles from './Image.style';
import { View } from '../View';

let observer = null;
const LOAD_IMG_EVENT_TYPE = 'loadImage';

const onIntersection: IntersectionObserverCallback = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
};

export type ImageStylesNames = ClassNames<typeof useStyles>;

export interface ImageProps extends CoComponentProps<ImageStylesNames>, Omit<React.ComponentPropsWithoutRef<'h1'>, 'placeholder'> {
  lazy?: boolean;
  threshold?: number;
  src: string;
  placeholder?: React.ReactNode;
  radius?: CoRadius | number;
  width?: number | string;
  height?: number | string;
  alt?: string;
  fit?: 'cover' | 'fill' | 'contain';
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      lazy,
      threshold = 0.5,
      placeholder,
      src,
      radius,
      width = '100%',
      height = 'auto',
      alt,
      fit,
      style,
      className,
      co,
      overrideStyles,
      ...props
    }: ImageProps,
    ref,
  ) => {
    const { classes, cx } = useStyles({ radius }, { co, overrideStyles, name: 'Image' });
    const [loaded, setLoaded] = useState(false);
    const [intersected, setIntersected] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    const imageStyle: CSSProperties = {
      width,
      height,
      objectFit: fit, // cover, fill, contain
    };

    useImperativeHandle(ref, () => imgRef.current!);

    useEffect(() => {
      if (!lazy) {
        setIntersected(true);
        return;
      }

      const handleIntersect = () => setIntersected(true);

      const imgElement = imgRef.current;
      imgElement && imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleIntersect);
      return () => {
        imgElement && imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleIntersect);
      };
    }, [lazy]);

    useEffect(() => {
      if (!lazy) return;

      observer = new IntersectionObserver(onIntersection, { threshold });
      imgRef.current && observer.observe(imgRef.current);
    }, [lazy, threshold]);

    return (
      <View className={cx(classes.root, className)} {...props}>
        <img ref={imgRef} src={src} alt={alt} className={classes.image} style={imageStyle} onLoad={() => setLoaded(true)} />

        {(!loaded || (lazy && !intersected)) && placeholder && (
          <div className={classes.placeholder} title={alt}>
            {placeholder}
          </div>
        )}
      </View>
    );
  },
);

Image.displayName = '@co-design/core/Image';
