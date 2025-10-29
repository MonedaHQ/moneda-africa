import { useState, useEffect } from 'react';

import styles from './styles/countdowntimer.module.css';

function CountdownTimer({ eventDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(eventDate).getTime() - new Date().getTime();

      if (difference <= 0) {
        // Event has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <div className={styles.countdownTimer}>
      <DisplayTimeUnit value={timeLeft.days} label="Days" />
      <DisplayTimeUnit value={timeLeft.hours} label="Hours" />
      <DisplayTimeUnit value={timeLeft.minutes} label="Minutes" />
      <DisplayTimeUnit value={timeLeft.seconds} label="Seconds" />
      {/* Simple fallback display */}
    </div>
  );
}

function DisplayTimeUnit({ value, label }) {
  return (
    <div className={styles.timeUnit}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default CountdownTimer;
