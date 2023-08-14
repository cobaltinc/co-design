import React, { useState, useEffect } from 'react';
import { View } from '../View';
import { IconButton } from '../IconButton';
import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';
import useStyles from './Pagination.style';

export interface PaginationProps {
  activePage?: number;
  itemsCountPerView?: number;
  totalItemsCount: number;
  showFirst?: boolean;
  showLast?: boolean;
  onChange?(page: number): void;
  className?: string;
  style?: React.CSSProperties;
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
  ...props
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(activePage);
  const { cx, classes } = useStyles(null, {
    name: 'Pagination',
  });

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

  useEffect(() => {
    setCurrentPage(activePage);
  }, [activePage]);

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

  const Bullet = () => {
    return (
      <div className={classes.bullet}>
        {[0, 1, 2].map((_, index) => (
          <div key={index} className={classes.circle} />
        ))}
      </div>
    );
  };

  return (
    <View className={classes.root} style={style} {...props}>
      <IconButton
        color="gray"
        variant="text"
        className={cx(classes.arrow, { [classes.disabled]: currentPage === 1 })}
        onClick={handlePrevPage}
        overrideStyles={{
          text: {
            '&:not(:disabled):hover': {
              borderRadius: 0,
            },
          },
        }}
      >
        <ChevronLeft color={currentPage === 1 ? '#D5DADF' : '#171B24'} />
      </IconButton>

      {currentPage > 3 && totalPage > pages.length && showFirst ? (
        <>
          <div className={cx(classes.page, { [classes.active]: 1 === currentPage })} onClick={() => handleChangePage(1)}>
            1
          </div>
          <Bullet />
        </>
      ) : null}

      {pages.map((index) => (
        <div className={cx(classes.page, { [classes.active]: index === currentPage })} key={index} onClick={() => handleChangePage(index)}>
          {index}
        </div>
      ))}

      {totalPage - 2 > currentPage && totalPage > pages.length && showLast ? (
        <>
          <Bullet />
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
              borderRadius: 0,
            },
          },
        }}
      >
        <ChevronRight color={currentPage === totalPage ? '#D5DADF' : '#171B24'} />
      </IconButton>
    </View>
  );
};

Pagination.displayName = '@co-design/core/Pagination';
