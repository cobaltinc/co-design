import React, { useState, useRef, useEffect, CSSProperties, forwardRef, useImperativeHandle } from 'react';
import { CoRadius, DefaultProps } from '@co/styles';
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

export interface ImageProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'h1'>, 'placeholder'> {
  lazy?: boolean;
  threshold?: number;
  src: string;
  placeholder?: React.ReactNode;
  radius?: CoRadius | number;
  width?: number | string;
  height?: number | string;
  alt?: string;
  mode?: 'cover' | 'fill' | 'contain';
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    { lazy, threshold = 0.5, placeholder, src, radius, width = '100%', height = 'auto', alt, mode, style, className, co, ...props }: ImageProps,
    ref,
  ) => {
    const { classes, cx } = useStyles({ radius }, { co, name: 'Image' });
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    const imageStyle: CSSProperties = {
      width,
      height,
      objectFit: mode, // cover, fill, contain
    };

    useImperativeHandle(ref, () => imgRef.current!);

    useEffect(() => {
      if (!lazy) {
        setLoaded(true);
        return;
      }

      const handleLoadImage = () => setLoaded(true);

      const imgElement = imgRef.current;
      imgElement && imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
      return () => {
        imgElement && imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
      };
    }, [lazy]);

    useEffect(() => {
      if (!lazy) return;

      observer = new IntersectionObserver(onIntersection, { threshold });
      imgRef.current && observer.observe(imgRef.current);
    }, [lazy, threshold]);

    return (
      <View className={cx(classes.root, className)} {...props}>
        <img ref={imgRef} src={src} alt={alt} className={classes.image} style={imageStyle} />

        {!loaded && placeholder && (
          <div className={classes.placeholder} title={alt}>
            {placeholder}
          </div>
        )}
      </View>
    );
  },
);

Image.displayName = '@co/core/Image';
