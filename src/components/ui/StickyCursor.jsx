import {
  animate,
  motion,
  transform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import styles from '../styles/stickyelement.module.css';
import { useEffect, useRef, useState } from 'react';

function StickyCursor({ stickyElement }) {
  const cursorRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 60 : 20; //as is in the css
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const center = { x: 0, y: 0 };
  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);

    stickyElement.current.addEventListener('mouseenter', manageMouseOver);
    stickyElement.current.addEventListener('mouseleave', manageMouseLeave);

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);

      stickyElement.current.addEventListener('mouseenter', manageMouseOver);
      stickyElement.current.addEventListener('mouseleave', manageMouseLeave);
    };
  });

  if (stickyElement.current) {
    const { left, top, width, height } =
      stickyElement.current.getBoundingClientRect();

    center.x = left + width / 2;
    center.y = top + height / 2;
  }

  function rotate(distance) {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursorRef.current, { rotate: `${angle}rad` }, { duration: 0 });
  }

  function manageMouseMove(e) {
    const { clientX, clientY } = e;

    const distance = { x: clientX - center.x, y: clientY - center.y };

    const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));

    const { width, height } = stickyElement.current.getBoundingClientRect();

    const newScaleX = transform(absDistance, [0, width / 2], [1, 1.3]);
    const newScaleY = transform(absDistance, [0, height / 2], [1, 0.8]);

    if (isHovered) {
      rotate(distance);
      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
      animate(cursorRef.current, { scaleX: newScaleX, scaleY: newScaleY });
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
      animate(cursorRef.current, { scaleX: 1, scaleY: 1 }, { duration: 0 });
    }
  }

  function manageMouseOver() {
    setIsHovered(true);
  }

  function manageMouseLeave() {
    setIsHovered(false);
  }

  const template = ({ rotate, scaleX, scaleY }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  return (
    <motion.div
      transformTemplate={template}
      className={styles.cursor}
      ref={cursorRef}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      animate={{ width: cursorSize, height: cursorSize }}
    ></motion.div>
  );
}

export default StickyCursor;
