import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './styles/eventinfo.module.css';
import { CiCalendarDate, CiTimer, CiLocationOn, CiShirt } from 'react-icons/ci';

const eventDetails = [
  { icon: <CiCalendarDate />, value: 'Dec 14, 2025' },
  { icon: <CiTimer />, value: '6:00PM' },
  { icon: <CiLocationOn />, value: 'The Civic Center, VI, Lagos' },
  { icon: <CiShirt />, value: 'African Royalty' },
];

function EventInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={styles.eventInfo}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {eventDetails.map((detail, index) => (
        <EventDetail key={index} icon={detail.icon} value={detail.value} />
      ))}
    </motion.div>
  );
}

function EventDetail({ icon, value }) {
  return (
    <div className={styles.eventDetail}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}
export default EventInfo;
