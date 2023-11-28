import React, { useState } from 'react';
import { View } from '../View';
import { IconButton } from '../IconButton';
import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';
import useStyles from './Pagination.style';
import { ClassNames, CoComponentProps, useCoTheme } from '@co-design/styles';
import Bullet from './Bullet';

export type PaginationStylesNames = ClassNames<typeof useStyles>;

export interface PaginationProps extends CoComponentProps<PaginationStylesNames>, Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** Pagination 의 초기 Active Page 를 설정합니다. */
  activePage?: number;

  /** Pagination 의 한 페이지당 보여줄 아이템의 개수를 설정합니다. */
  itemsCountPerView?: number;

  /** Pagination 의 전체 아이템의 개수를 설정합니다. */
  totalItemsCount: number;

  /** 첫 페이지를 유지하여 보여주고 선택할 수 있도록 설정합니다. */
  showFirst?: boolean;

  /** 마지막 페이지를 유지하여 보여주고 선택할 수 있도록 설정합니다. */
  showLast?: boolean;

  /** Pagination 의 페이지를 변경했을 때 발생할 이벤트를 설정합니다. */
  onChange?(page: number): void;
}

export const Pagination = ({
  activePage = 1,
  itemsCountPerView = 10,
  totalItemsCount,
  showFirst = true,
  showLast = true,
  onChange,
  className = '',
  style,
  co,
  overrideStyles,
  ...props
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(activePage);
  const { cx, classes } = useStyles(null, {
    overrideStyles,
    name: 'Pagination',
  });
  const theme = useCoTheme();

  const totalPage = Math.ceil(totalItemsCount / itemsCountPerView);
  let pages = [];

  if (totalPage <= 5) {
    pages = Array(totalPage)
      .fill(0)
      .map((_, index) => index + 1);
  } else if (currentPage < 3) {
    pages = [1, 2, 3, 4, 5];
  } else if (totalPage - 2 < currentPage) {
    pages = [totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1, totalPage];
  } else {
    pages = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
  }

  const handleChangePage = (page: number) => {
    onChange?.(page);
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onChange?.(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      onChange?.(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <View className={cx(classes.root, className)} style={style} co={co} {...props}>
      <IconButton
        color="gray"
        variant="text"
        className={cx(classes.arrow, { [classes.disabled]: currentPage === 1 })}
        onClick={handlePrevPage}
        overrideStyles={{
          text: {
            '&:not(:disabled):hover': {
              background: 'none',
            },
          },
          inner: {
            '& > *': {
              width: 20,
              height: 20,
            },
          },
        }}
      >
        <ChevronLeft
          color={currentPage === 1 ? theme.foundations.tokens.color.icon.icon_disabled : theme.foundations.tokens.color.icon.icon_default}
        />
      </IconButton>

      {currentPage > 3 && totalPage > pages.length && showFirst ? (
        <>
          <div className={cx(classes.page, { [classes.active]: 1 === currentPage })} onClick={() => handleChangePage(1)}>
            1
          </div>
          <Bullet className={classes.bullet} circleClassName={classes.circle} />
        </>
      ) : null}

      {pages.map((index) => (
        <div className={cx(classes.page, { [classes.active]: index === currentPage })} key={index} onClick={() => handleChangePage(index)}>
          {index}
        </div>
      ))}

      {totalPage - 2 > currentPage && totalPage > pages.length && showLast ? (
        <>
          <Bullet className={classes.bullet} circleClassName={classes.circle} />
          <div className={cx(classes.page, { [classes.active]: totalPage === currentPage })} onClick={() => handleChangePage(totalPage)}>
            {totalPage}
          </div>
        </>
      ) : null}

      <IconButton
        color="gray"
        variant="text"
        className={cx(classes.arrow, { [classes.disabled]: currentPage === totalPage })}
        onClick={handleNextPage}
        overrideStyles={{
          text: {
            '&:not(:disabled):hover': {
              background: 'none',
            },
          },
          inner: {
            '& > *': {
              width: 20,
              height: 20,
            },
          },
        }}
      >
        <ChevronRight
          color={currentPage === totalPage ? theme.foundations.tokens.color.icon.icon_disabled : theme.foundations.tokens.color.icon.icon_default}
        />
      </IconButton>
    </View>
  );
};

Pagination.displayName = '@co-design/core/Pagination';
