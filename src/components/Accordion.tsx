import { useState } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { PiMinusThin, PiPlusCircleLight } from 'react-icons/pi';
import styles from './styles/accordion.module.css';
import LearnMoreButton from './LearnMoreButton';

function Accordion({ questions, color = 'black' }) {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className={`${styles.faqsBox} ${styles[color]}`}>
      {questions.map((item, index) => (
        <QuestionBox
          questionItem={item}
          key={item.question}
          stateControls={{ isOpen, setIsOpen }}
          index={index}
        />
      ))}
    </div>
  );
}

function QuestionBox({ questionItem, stateControls, index }) {
  const { isOpen, setIsOpen } = stateControls;

  const openVariants = {
    initial: { transform: 'translateY(-30px)', opacity: 0 },
    animate: { transform: 'translateY(0)', opacity: 1 },
  };

  return (
    <>
      <div className={styles.questionBox}>
        <div
          className={styles.questionHeading}
          onClick={() => setIsOpen(index)}
        >
          <h4
            className={`${styles.question} ${
              index === isOpen && styles.activeQuestion
            }`}
          >
            {questionItem.question}
          </h4>
          <div className={styles.iconBox}>
            {index !== isOpen ? <PiPlusCircleLight /> : <PiMinusThin />}
          </div>
        </div>

        {index === isOpen && (
          <motion.div
            key="content"
            variants={openVariants}
            initial="initial"
            animate="animate"
            className={styles.answerBox}
          >
            <div
              dangerouslySetInnerHTML={{ __html: questionItem.answer }}
              className={styles.answerParagraph}
            />
            {questionItem.button && (
              <LearnMoreButton
                buttonLabel={questionItem.button.label}
                buttonLink={questionItem.button.link}
              />
            )}
          </motion.div>
        )}
      </div>
      <div className={styles.line} />
    </>
  );
}

export default Accordion;
