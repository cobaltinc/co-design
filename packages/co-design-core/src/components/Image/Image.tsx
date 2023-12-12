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
  /** true일 경우 lazy load가 적용됩니다. */
  lazy?: boolean;

  /** lazy 속성이 true이고 Image 컴포넌트 크기 * threshold만큼 화면에 보일 경우 이미지가 로드됩니다. */
  threshold?: number;

  /** 이미지 src를 정합니다. */
  src: string;

  /** 이미지가 아직 로드되지 않은 경우 보여줄 요소를 정합니다. */
  placeholder?: React.ReactNode;

  /** Image 컴포넌트의 radius를 정합니다. */
  radius?: CoRadius | number;

  /** Image 컴포넌트의 너비를 정합니다. */
  width?: number | string;

  /** Image 컴포넌트의 높이를 정합니다. */
  height?: number | string;

  /** 이미지 설명을 추가합니다. */
  alt?: string;

  /** Image 컴포넌트와 이미지 컨텐츠의 크기를 어떻게 맞출 것인지 정합니다. */
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
      className,
      co,
      overrideStyles,
      ...props
    }: ImageProps,
    ref,
  ) => {
    const { classes, cx } = useStyles({ radius }, { overrideStyles, name: 'Image' });
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
      <View className={cx(classes.root, className)} co={co} {...props}>
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
