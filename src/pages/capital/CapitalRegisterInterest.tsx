import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useContactUs } from '@/hooks/useContact';
import CapitalButton from './CapitalButton';
import styles from './styles/capitalregisterinterest.module.css';

const countries = [
  'Nigeria',
  'South Africa',
  'Ghana',
  'Kenya',
  'Mauritius',
  'Egypt',
  'Ethiopia',
  'Tanzania',
  'Uganda',
  'Namibia',
  'Zambia',
  'Zimbabwe',
  'DRC',
  'Senegal',
  "Côte d'Ivoire",
  'United Kingdom',
  'United States',
  'UAE',
  'France',
  'Germany',
  'Singapore',
  'China',
  'India',
  'Other',
];

const investmentRanges = [
  '$100,000 – $250,000',
  '$250,000 – $500,000',
  '$500,000 – $1,000,000',
  '$1,000,000 – $5,000,000',
  '$5,000,000+',
];

const howHeardOptions = [
  'Referral from existing investor',
  'LinkedIn',
  'Conference or event',
  'Press / media',
  'Direct outreach from Moneda',
  'Other',
];

const distributionOptions = ['Semi-annual', 'At maturity'];
const currencyOptions = ['USD', 'GBP', 'EUR', 'Other'];

const declarations = [
  'I confirm I am an accredited or institutional investor and understand this is a private offering.',
  'I understand returns are disclosed on application and this page does not constitute a binding commitment.',
  'I understand early withdrawal is not permitted within the 12-month investment term.',
  'I consent to Moneda Capital retaining my data for the purposes of this application.',
];

type FormState = {
  fullLegalName: string;
  entityName: string;
  email: string;
  phone: string;
  country: string;
  investmentAmount: string;
  distribution: string;
  currency: string;
  howHeard: string;
  comments: string;
  decl0: boolean;
  decl1: boolean;
  decl2: boolean;
  decl3: boolean;
};

function CapitalRegisterInterest() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' });
  const { contactUs, isSubmitting } = useContactUs();

  const [form, setForm] = useState<FormState>({
    fullLegalName: '',
    entityName: '',
    email: '',
    phone: '',
    country: '',
    investmentAmount: '',
    distribution: '',
    currency: '',
    howHeard: '',
    comments: '',
    decl0: false,
    decl1: false,
    decl2: false,
    decl3: false,
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;
    const checked =
      e.target instanceof HTMLInputElement && e.target.type === 'checkbox'
        ? e.target.checked
        : undefined;
    setForm((prev) => ({
      ...prev,
      [name]: checked !== undefined ? checked : value,
    }));
  }

  function handleToggle(field: 'distribution' | 'currency', value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    contactUs({
      fullLegalName: form.fullLegalName,
      entityName: form.entityName,
      email: form.email,
      phone: form.phone,
      country: form.country,
      investmentAmount: form.investmentAmount,
      distribution: form.distribution,
      currency: form.currency,
      howHeard: form.howHeard,
      comments: form.comments,
      formType: 'capital-register-interest',
    });
  }

  function fadeUp(delay = 0) {
    return {
      initial: { opacity: 0, y: 20 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      transition: {
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    };
  }

  return (
    <section ref={ref} id="register-interest" className={styles.section}>
      {/* ── HEADER ───────────────────────────────────── */}
      <div className={styles.header}>
        <motion.p className={styles.label} {...fadeUp(0)}>
          Register Your Interest
        </motion.p>
        <motion.h2 className={styles.heading} {...fadeUp(0.08)}>
          Tell us about
          <br />
          <span className={styles.headingAccent}>your interest.</span>
        </motion.h2>
        <motion.p className={styles.subtitle} {...fadeUp(0.16)}>
          Complete the form below. We will be in touch within 48 hours with full
          documentation and next steps. This is not a commitment &mdash; it is
          the beginning of the conversation.
        </motion.p>
      </div>

      {/* ── FORM ─────────────────────────────────────── */}
      <motion.div className={styles.formWrap} {...fadeUp(0.2)}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Row 1: Full Legal Name + Entity */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.fieldLabel} htmlFor="fullLegalName">
                Full Legal Name <span className={styles.req}>*</span>
              </label>
              <input
                id="fullLegalName"
                name="fullLegalName"
                type="text"
                placeholder="As on passport or ID"
                value={form.fullLegalName}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel} htmlFor="entityName">
                Entity / Company Name
              </label>
              <input
                id="entityName"
                name="entityName"
                type="text"
                placeholder="If investing through a company"
                value={form.entityName}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          </div>

          {/* Row 2: Email + Phone */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.fieldLabel} htmlFor="email">
                Email Address <span className={styles.req}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel} htmlFor="phone">
                Phone / WhatsApp <span className={styles.req}>*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+234 800 000 0000"
                value={form.phone}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
          </div>

          {/* Row 3: Country + Investment Amount */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.fieldLabel} htmlFor="country">
                Country of Residence <span className={styles.req}>*</span>
              </label>
              <div className={styles.selectWrap}>
                <select
                  id="country"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  <option value="" disabled>
                    Select country
                  </option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <span className={styles.selectArrow}>↓</span>
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel} htmlFor="investmentAmount">
                Investment Amount (USD) <span className={styles.req}>*</span>
              </label>
              <div className={styles.selectWrap}>
                <select
                  id="investmentAmount"
                  name="investmentAmount"
                  value={form.investmentAmount}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  <option value="" disabled>
                    Select range
                  </option>
                  {investmentRanges.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <span className={styles.selectArrow}>↓</span>
              </div>
            </div>
          </div>

          {/* Preferred Distribution */}
          <div className={styles.field}>
            <p className={styles.fieldLabel}>Preferred Distribution</p>
            <div className={styles.toggleGroup}>
              {distributionOptions.map((opt) => (
                <CapitalButton
                  key={opt}
                  variant="toggle"
                  active={form.distribution === opt}
                  onClick={() => handleToggle('distribution', opt)}
                >
                  {opt}
                </CapitalButton>
              ))}
            </div>
          </div>

          {/* Preferred Currency */}
          <div className={styles.field}>
            <p className={styles.fieldLabel}>Preferred Currency</p>
            <div className={styles.toggleGroup}>
              {currencyOptions.map((opt) => (
                <CapitalButton
                  key={opt}
                  variant="toggle"
                  active={form.currency === opt}
                  onClick={() => handleToggle('currency', opt)}
                >
                  {opt}
                </CapitalButton>
              ))}
            </div>
          </div>

          {/* How did you hear */}
          <div className={styles.field}>
            <label className={styles.fieldLabel} htmlFor="howHeard">
              How did you hear about Moneda Capital?
            </label>
            <div className={styles.selectWrap}>
              <select
                id="howHeard"
                name="howHeard"
                value={form.howHeard}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="" disabled>
                  Select one
                </option>
                {howHeardOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              <span className={styles.selectArrow}>↓</span>
            </div>
          </div>

          {/* Comments */}
          <div className={styles.field}>
            <label className={styles.fieldLabel} htmlFor="comments">
              Questions or Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              placeholder="Share any questions about the structure, terms, or process…"
              value={form.comments}
              onChange={handleChange}
              className={styles.textarea}
              rows={5}
            />
          </div>

          {/* Declaration */}
          <div className={styles.declaration}>
            <p className={styles.declarationTitle}>Declaration</p>
            {declarations.map((text, i) => (
              <label key={i} className={styles.checkRow}>
                <input
                  type="checkbox"
                  name={`decl${i}`}
                  checked={form[`decl${i}` as keyof FormState] as boolean}
                  onChange={handleChange}
                  className={styles.checkbox}
                />
                <span className={styles.checkLabel}>{text}</span>
              </label>
            ))}
          </div>

          <CapitalButton
            variant="solid"
            type="submit"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting
              ? 'Submitting…'
              : 'Submit — We Will Be in Touch Within 48 Hours →'}
          </CapitalButton>

          <p className={styles.formLegal}>
            Moneda Capital Managers &middot; FSC Mauritius Regulated &middot;
            Accredited investors only &middot; This is not a public offer
            &middot; investors@moneda.africa
          </p>
        </form>
      </motion.div>
    </section>
  );
}

export default CapitalRegisterInterest;
