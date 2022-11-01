import React, { forwardRef, useCallback, useRef, useState } from 'react';
import { CoComponentProps, ClassNames } from '@co-design/styles';
import useStyles from './Upload.style';
import { View } from '../View';
import { useToggle } from '@co-design/hooks';

export type UploadStylesNames = ClassNames<typeof useStyles>;

export interface UploadProps extends CoComponentProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** Upload 컴포넌트 렌더 함수를 정의합니다. */
  children: ((file?: File, dragging?: boolean) => React.ReactNode) | React.ReactNode;

  /** input 요소에 id를 적용합니다. */
  id?: string;

  /** input 요소에 name을 적용합니다. */
  name?: string;

  /** input 요소에 id를 적용합니다. */
  value?: File;

  /** input 요소가  선택할 수 있는 파일 타입을 정합니다. */
  accept?: string;

  /** true일 경우 disabled 상태가 됩니다. */
  disabled?: boolean;

  /** true일 경우 드래그 온 드롭으로 파일을 선택할 수 있습니다. */
  draggable?: boolean;

  /** 선택한 파일이 변경될 경우 실행됩니다. */
  onChange?(file?: File): void;
}

let dragCounter = 0;

export const Upload = forwardRef<HTMLDivElement, UploadProps>(
  ({ children, id, name, value, accept, disabled, draggable, onChange, className, co, overrideStyles, ...props }, ref) => {
    const { classes, cx } = useStyles(null, { overrideStyles, name: 'Upload' });

    const [dragging, toggleDragging] = useToggle(false);
    const [file, setFile] = useState(value);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      const changedFile = files?.[0];
      setFile(changedFile);
      onChange?.(changedFile);
      inputRef.current.value = '';
    }, []);

    const handleFileDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      const files = event.dataTransfer.files;
      const changedFile = files?.[0];
      setFile(changedFile);
      onChange?.(changedFile);
      toggleDragging(false);
      inputRef.current.value = '';
    }, []);

    const handleDragEnter = useCallback((event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      dragCounter += 1;
      if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
        toggleDragging(true);
      }
    }, []);

    const handleDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      dragCounter -= 1;
      if (dragCounter === 0) {
        toggleDragging(false);
      }
    }, []);

    const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
    }, []);

    const handleChooseFile = useCallback(() => {
      inputRef.current?.click();
    }, []);

    return (
      <View
        onClick={handleChooseFile}
        onDrop={handleFileDrop}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={onDragOver}
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        <input ref={inputRef} type="file" id={id} name={name} accept={accept} onChange={handleFileChange} className={classes.input} />
        {typeof children === 'function' ? children?.(file, dragging) : children}
      </View>
    );
  },
);

Upload.displayName = '@co-design/core/Upload';
