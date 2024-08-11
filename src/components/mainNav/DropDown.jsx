import Button from '@/components/Button';
import styles from './styles/dropdown.module.css';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

function DropDown({ dropdownList, setIsHovered, isHovered }) {
  const router = useRouter();

  const dropdown = {
    initial: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className={styles.dropDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          variants={dropdown}
          initial="initial"
          animate="visible"
          exit="exit"
        >
          <ul className={styles.dropDownList}>
            {dropdownList.map((link) => (
              <li key={link.label}>
                <Button
                  variant="link-light"
                  action={link.action}
                  onClick={() => (link.path ? router.push(link.path) : '')}
                >
                  {link.label}
                </Button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DropDown;
