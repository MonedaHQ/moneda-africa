import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { PAGE_SIZE } from '@/utils/config';
import styles from './styles/pagination.module.css';

type PaginationProps = {
  count: number;
  currentPage: number;
};

function pageHref(page: number) {
  return page === 1 ? '/news' : `/news?page=${page}`;
}

function Pagination({ count, currentPage }: PaginationProps) {
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (pageCount <= 1) return null;

  return (
    <nav className={styles.pagContainer} aria-label="Article pagination">
      <p>
        Showing <strong>{(currentPage - 1) * PAGE_SIZE + 1}</strong>–
        <strong>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </strong>{' '}
        of {count}
      </p>
      <div className={styles.btnWrapper}>
        {currentPage === 1 ? (
          <span className={`${styles.button} ${styles.inactive}`}>
            <HiChevronLeft /> Previous
          </span>
        ) : (
          <Link
            rel="prev"
            href={pageHref(currentPage - 1)}
            className={`${styles.button} ${styles.active}`}
          >
            <HiChevronLeft /> Previous
          </Link>
        )}
        <span className={styles.pageNumber}>
          {currentPage} / {pageCount}
        </span>
        {currentPage === pageCount ? (
          <span className={`${styles.button} ${styles.inactive}`}>
            Next <HiChevronRight />
          </span>
        ) : (
          <Link
            rel="next"
            href={pageHref(currentPage + 1)}
            className={`${styles.button} ${styles.active}`}
          >
            Next <HiChevronRight />
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Pagination;
