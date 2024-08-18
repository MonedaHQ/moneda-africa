import { useRouter } from 'next/router';
import styles from './styles/querynavigator.module.css';
import { useEffect, useRef } from 'react';

function QueryNavigator() {
  const router = useRouter();
  const menuRef = useRef();
  const menuList = [
    { label: 'Trading', path: 'trading' },
    { label: 'Assets', path: 'assets' },
    { label: 'Risk Solutions', path: 'risk-solutions' },
    { label: 'Capital Management', path: 'capital-management' },
    { label: 'Consulting', path: 'consulting' },
  ];

  useEffect(() => {
    const handleScroll = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        if (menuRef.current) {
          menuRef.current.classList.remove(styles.stickyExpanded);
        }
      } else {
        if (menuRef.current) {
          menuRef.current.classList.add(styles.stickyExpanded);
        }
      }
    };

    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      threshold: 1.0,
      rootMargin: `-${window.innerHeight * 0.08}px 0px 0px 0px`,
    });

    if (menuRef.current) {
      observer.observe(menuRef.current);
    }

    return () => {
      if (observer && menuRef.current) {
        observer.unobserve(menuRef.current);
      }
    };
  }, []);

  function handleClick(key, value) {
    const currentPath = router.pathname;
    const currentQuery = { ...router.query };
    currentQuery[key] = value;
    const newUrl = { pathname: currentPath, query: currentQuery };
    router.push(newUrl, undefined, { shallow: true });
  }

  const handleSelectChange = (event) => {
    const selectedPath = event.target.value;
    handleClick('venture', selectedPath);
  };

  useEffect(() => {
    if (router.query.venture) {
      window.scrollTo({
        top: window.innerHeight * 0.8, // 80% of the viewport height
        behavior: 'smooth',
      });
    }
  }, [router.query.venture]);

  return (
    <>
      <div ref={menuRef} className={styles.menuList}>
        {menuList.map((item) => (
          <button
            key={item.path}
            onClick={() => handleClick('venture', item.path)}
            className={`${styles.button} ${
              router.query.venture === item.path ||
              (!router.query.venture && item.path === 'trading')
                ? styles.active
                : ''
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={styles.menuListMobile}>
        <h3>Discover what we do</h3>
        <select
          onChange={handleSelectChange}
          value={router.query.venture || 'trading'}
        >
          {menuList.map((option) => (
            <option key={option.path} value={option.path}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default QueryNavigator;
