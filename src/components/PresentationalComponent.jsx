import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

function PresentationalComponent({ renderFunction }) {
  const router = useRouter();
  const routerQuery = router.query;
  const { inquiry } = routerQuery;

  const containerVariants = {
    initial: { opacity: 0.4, y: 18 },
    animate: {
      opacity: 1,

      y: 0,
      transition: { ease: [0.48, -0.34, 0.01, 1], duration: 0.28 },
    },
    exit: {
      opacity: 0,
      y: 18,
      transition: { delay: 0.2, ease: [0.48, -0.34, 0.01, 1], duration: 0.28 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={inquiry}
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {renderFunction()}
      </motion.div>
    </AnimatePresence>
  );
}

export default PresentationalComponent;
