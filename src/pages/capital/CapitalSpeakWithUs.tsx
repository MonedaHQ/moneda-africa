import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TbMail, TbMapPin, TbArrowRight } from 'react-icons/tb';
import CapitalButton from './CapitalButton';
import styles from './styles/capitalspeakwithus.module.css';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function CapitalSpeakWithUs() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section ref={ref} id="contact" className={styles.section}>
      <div className={styles.inner}>
        {/* ── LEFT ─────────────────────────────────────── */}
        <div className={styles.left}>
          <motion.p className={styles.label} {...fadeUp(0)}>
            Speak With Us
          </motion.p>

          <motion.h2 className={styles.heading} {...fadeUp(0.08)}>
            Have a question
            <br />
            before you <span className={styles.headingAccent}>commit?</span>
          </motion.h2>

          <motion.p className={styles.body} {...fadeUp(0.16)}>
            We speak directly with HNIs, family offices, and institutional
            investors considering African private credit. No intermediaries, no
            call centres — a direct conversation with the Moneda Capital team.
          </motion.p>

          <motion.div className={styles.contactList} {...fadeUp(0.24)}>
            <div className={styles.contactItem}>
              <div className={styles.iconWrap}>
                <TbMail className={styles.icon} />
              </div>
              <div>
                <p className={styles.contactLabel}>Direct Inquiry</p>
                <a
                  href="mailto:info@moneda.africa"
                  className={styles.contactValue}
                >
                  info@moneda.africa
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconWrap}>
                <TbMapPin className={styles.icon} />
              </div>
              <div>
                <p className={styles.contactLabel}>Global HQ</p>
                <p className={styles.contactValue}>
                  Cybercity, Ebene, Mauritius
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT ────────────────────────────────────── */}
        <motion.div className={styles.right} {...fadeUp(0.12)}>
          <div className={styles.card}>
            <p className={styles.cardEyebrow}>We respond within 48 hours</p>

            <blockquote className={styles.quote}>
              <span className={styles.quoteMark}>&ldquo;</span>
              We are not raising capital through intermediaries. Every investor
              conversation is handled directly by the Moneda Capital team.
              <span className={styles.quoteMark}>&rdquo;</span>
            </blockquote>

            <p className={styles.cardBody}>
              Whether you are evaluating your first allocation to African
              private credit or looking to scale an existing position — this is
              the conversation to have.
            </p>

            <CapitalButton variant="solid" href="#register-interest">
              Register Interest Below
              <TbArrowRight />
            </CapitalButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CapitalSpeakWithUs;
