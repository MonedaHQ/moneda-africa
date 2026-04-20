import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { FaCircleCheck } from 'react-icons/fa6';
import {
  HiMiniArrowLongRight,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCheckBadge,
  HiOutlineShieldCheck,
} from 'react-icons/hi2';
import { MdCancel } from 'react-icons/md';

import Section from '@/components/Section';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import { useTermsheetSubmission } from '@/hooks/useTermsheetSubmission';

import styles from './styles/investmenttermsheet.module.css';

const termsAtGlance = [
  { key: 'Structure', value: 'Cost-plus (Murabaha)' },
  { key: 'Profit Rate', value: '15% p.a. fixed', highlight: true },
  { key: 'Term', value: '12 months' },
  { key: 'Profit Payments', value: 'Semi-annual' },
  { key: 'Capital Repayment', value: 'Full at maturity' },
  { key: 'Min. Tranche', value: 'US$100,000' },
  { key: 'Early Exit', value: 'Not permitted' },
  { key: 'Buyers', value: 'Chevron, Shell, Total, Seplat, Mobil' },
];

const howItWorks = [
  {
    title: 'Investor commits capital',
    body: 'Minimum US$100,000 tranche committed for a 12-month term under a signed cost-plus agreement.',
  },
  {
    title: 'Moneda procures approved goods',
    body: 'Funds are used strictly for procurement of goods or assets required to execute a confirmed SME contract.',
  },
  {
    title: 'Goods resold at agreed markup',
    body: 'Assets are resold under a pre-agreed cost-plus arrangement. The markup forms the investor return.',
  },
  {
    title: 'Returns distributed on completion',
    body: 'On contract completion, the multinational buyer pays. Profit is distributed semi-annually and capital returned at maturity.',
  },
];

const riskCards = [
  {
    label: '01 — Operational Risk',
    title: 'Will the SME perform as required?',
    body: 'Moneda co-executes every contract alongside the SME partner, maintaining operational oversight from procurement to payment instead of acting as a passive financier.',
  },
  {
    label: '02 — Liquidity Risk',
    title: 'Will the contract complete within the investment period?',
    body: 'Transactions are short-tenured and linked to receivables from investment-grade multinationals, providing stronger visibility on payment timing and completion.',
  },
];

const mitigationPoints = [
  'Transactions backed by tangible goods and assets',
  'Underlying contracts with established, creditworthy counterparties',
  'Pre-agreed transaction terms: cost, margin, and payment timeline',
  'Structured trade flows with full visibility and control',
  'Pledge and assignment of acquired trade receivables',
  'Corporate guarantee of Moneda Invest Africa',
];

const complianceBadges = [
  'Murabaha — Cost-Plus Sale',
  'Wakalah — Agency Deployment',
  'FSC Mauritius — Regulated',
  'No Interest — Trade Margin Only',
  'Asset-Backed — Every Transaction',
];

const declarations = [
  {
    name: 'read_terms_summary',
    text: 'I have read and understood the cost-plus investment terms summarised on this page.',
  },
  {
    name: 'understand_trade_margin',
    text: 'I understand that returns are generated through trade margins and not from interest-based lending.',
  },
  {
    name: 'accept_risk_disclosures',
    text: 'I understand and accept the risk disclosures described above, including operational and liquidity risks.',
  },
  {
    name: 'confirm_legitimate_funds',
    text: 'I confirm that the investment funds are from legitimate sources and that I am not acting under duress.',
  },
  {
    name: 'understand_no_early_exit',
    text: 'I understand that early withdrawal is not permitted within the agreed investment term.',
  },
  {
    name: 'consent_to_data_use',
    text: 'I consent to Moneda Invest Africa retaining my personal data for the purpose of administering this investment process.',
  },
];

const countryOptions = [
  'Nigeria',
  'United Kingdom',
  'United States',
  'United Arab Emirates',
  'Canada',
  'South Africa',
  'Ghana',
  'Kenya',
  'Mauritius',
  'Other',
];

const amountOptions = [
  'US$100,000',
  'US$200,000',
  'US$300,000',
  'US$500,000',
  'US$1,000,000',
  'Over US$1,000,000',
];

const declarationFieldNames = declarations.map((item) => item.name);

function InvestmentTermsheetPage() {
  return (
    <>
      <HeroPanel />
      <OpportunityPanel />
      <RiskPanel />
      <CompliancePanel />
      <ApplicationPanel />
    </>
  );
}

function HeroPanel() {
  return (
    <Section color="darkBrown" paddingTop={false}>
      <div className={styles.heroGrid}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className={styles.eyebrow}>Ethical non-interest finance</p>
          <h1 className={styles.heroTitle}>
            Cost-Plus <span>Investment Program</span>
          </h1>
          <div className={styles.heroRule} />
          <p className={styles.heroDescription}>
            A trade-backed, Shariah-compatible investment structure generating
            returns from real economic activity, not interest. Capital is
            deployed into confirmed local content contracts with
            investment-grade multinational buyers.
          </p>

          <div className={styles.statsGrid}>
            <StatCard value="US$5M" label="Total Facility" delay={0.05} />
            <StatCard value="15%" label="Fixed Profit p.a." delay={0.1} />
            <StatCard value="12mo" label="Investment Term" delay={0.15} />
            <StatCard value="US$100k" label="Min. Tranche" delay={0.2} />
          </div>

          <div className={styles.ctaRow}>
            <Button variant="secondary" href="#apply" scrollOffset={120}>
              Register Your Interest <HiMiniArrowLongRight />
            </Button>
            <Button
              variant="link-dark-white"
              href="/Cost-Plus Investment (Termsheet).pdf"
            >
              View original PDF <HiOutlineArrowTopRightOnSquare />
            </Button>
          </div>
        </motion.div>

        <motion.div
          className={styles.termsCard}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
        >
          <p className={styles.cardLabel}>Investment terms at a glance</p>
          <div className={styles.termsList}>
            {termsAtGlance.map((item) => (
              <div className={styles.termRow} key={item.key}>
                <span>{item.key}</span>
                <strong className={item.highlight ? styles.termHighlight : ''}>
                  {item.value}
                </strong>
              </div>
            ))}
          </div>
          <div className={styles.termsNote}>
            <HiOutlineShieldCheck />
            <p>
              Returns are derived from trade margins on real transactions rather
              than interest-based lending.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function StatCard({ value, label, delay = 0 }) {
  return (
    <motion.div
      className={styles.statCard}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
    >
      <strong>{value}</strong>
      <span>{label}</span>
    </motion.div>
  );
}

function OpportunityPanel() {
  return (
    <Section color="light">
      <div className={styles.twoColumnLayout}>
        <FadeIn className={styles.contentBlock}>
          <p className={styles.sectionTag}>The Opportunity</p>
          <h2 className={styles.sectionTitle}>
            Capital deployed into <span>real economic activity</span>
          </h2>
          <p className={styles.bodyText}>
            Investor funds are used to finance the procurement of approved goods
            and assets, which are subsequently resold to end buyers under
            confirmed local content contracts owned by Moneda’s partner SMEs.
          </p>
          <p className={styles.bodyText}>
            These transactions are executed at a pre-agreed markup. Returns are
            derived from the agreed margin on trade, not from interest. Every
            deployment is tied to a defined commercial use case and monitored by
            the Moneda team.
          </p>
        </FadeIn>

        <FadeIn className={styles.contentBlock} delay={0.08}>
          <p className={styles.sectionTag}>How It Works</p>
          <div className={styles.stepList}>
            {howItWorks.map((step, index) => (
              <motion.div
                className={styles.stepItem}
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className={styles.stepNumber}>{`0${index + 1}`}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

function RiskPanel() {
  return (
    <Section color="grey">
      <FadeIn className={styles.sectionIntro}>
        <p className={styles.sectionTag}>Risk & Security</p>
        <h2 className={styles.sectionTitle}>
          Designed for <span>capital preservation</span>
        </h2>
      </FadeIn>

      <div className={styles.riskGrid}>
        {riskCards.map((item, index) => (
          <motion.div
            className={styles.riskCard}
            key={item.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <p className={styles.cardLabel}>{item.label}</p>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </motion.div>
        ))}
      </div>

      <FadeIn className={styles.mitigationBox} delay={0.08}>
        <p className={styles.cardLabel}>Risk mitigation & security</p>
        <div className={styles.mitigationGrid}>
          {mitigationPoints.map((item) => (
            <div className={styles.mitigationItem} key={item}>
              <HiOutlineCheckBadge />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}

function CompliancePanel() {
  return (
    <Section color="light">
      <FadeIn className={styles.centerIntro}>
        <p className={styles.sectionTag}>Compliance Framework</p>
        <h2 className={styles.sectionTitle}>
          Ethical by <span>structure</span>
        </h2>
        <p className={styles.centerText}>
          This structure is designed to operate within an ethical and
          Shariah-compatible framework, avoiding interest-based returns and
          linking performance to asset-backed trade activity with transparent
          pricing and margins.
        </p>
      </FadeIn>

      <div className={styles.badgeRow}>
        {complianceBadges.map((badge, index) => (
          <motion.div
            className={styles.complianceBadge}
            key={badge}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
          >
            {badge}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function ApplicationPanel() {
  const router = useRouter();
  const { status } = router.query;
  const { submitTermsheet, isSubmitting } = useTermsheetSubmission();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Record<string, string>>({
    defaultValues: {
      country_of_residence: '',
      investment_amount: '',
      heard_about_moneda: '',
      profit_payment_preference: 'semi-annual',
      preferred_bank_currency: 'USD',
      signature_date: new Date().toISOString().split('T')[0],
    },
  });

  const declarationError = declarationFieldNames.some((name) => errors[name]);

  function onSubmit(data) {
    submitTermsheet({
      subject: 'Cost-Plus Investment Program Interest Form',
      data: {
        ...data,
        source: 'website-investment-termsheet',
        submitted_at: new Date().toISOString(),
      },
    });
  }

  const renderContent = () => {
    switch (status) {
      case 'success':
        return <SuccessState />;
      case 'error':
        return <FailedState />;
      default:
        return (
          <form className={styles.formShell} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p className={styles.formBlockLabel}>
                Section A — Investor Particulars
              </p>
              <div className={styles.formGrid}>
                <FormField
                  label="Full Legal Name"
                  required
                  error={errors.full_legal_name}
                >
                  <input
                    type="text"
                    placeholder="As on passport / ID"
                    {...register('full_legal_name', {
                      required: 'This field is required',
                    })}
                  />
                </FormField>

                <FormField
                  label="Entity / Company Name"
                  error={errors.entity_name}
                >
                  <input
                    type="text"
                    placeholder="If investing through a company"
                    {...register('entity_name')}
                  />
                </FormField>

                <FormField label="Email Address" required error={errors.email}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    {...register('email', {
                      required: 'This field is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Please enter a valid email address',
                      },
                    })}
                  />
                </FormField>

                <FormField
                  label="Phone / WhatsApp"
                  required
                  error={errors.phone_whatsapp}
                >
                  <input
                    type="tel"
                    placeholder="+234 800 000 0000"
                    {...register('phone_whatsapp', {
                      required: 'This field is required',
                    })}
                  />
                </FormField>

                <FormField
                  label="Country of Residence"
                  required
                  error={errors.country_of_residence}
                >
                  <select
                    {...register('country_of_residence', {
                      required: 'Please select a country',
                    })}
                  >
                    <option value="">Select country</option>
                    {countryOptions.map((country) => (
                      <option value={country} key={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField
                  label="Investment Amount (USD)"
                  required
                  error={errors.investment_amount}
                >
                  <select
                    {...register('investment_amount', {
                      required: 'Please select an amount',
                    })}
                  >
                    <option value="">Select amount</option>
                    {amountOptions.map((amount) => (
                      <option value={amount} key={amount}>
                        {amount}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>
            </div>

            <ChoiceGroup
              label="Profit Payment Preference"
              name="profit_payment_preference"
              icon={<HiOutlineBanknotes />}
              register={register}
              error={errors.profit_payment_preference}
              options={[
                { value: 'semi-annual', label: 'Semi-annual payments' },
                { value: 'at-maturity', label: 'At maturity' },
              ]}
            />

            <ChoiceGroup
              label="Preferred Bank Account Currency"
              name="preferred_bank_currency"
              icon={<HiOutlineBriefcase />}
              register={register}
              error={errors.preferred_bank_currency}
              options={[
                { value: 'USD', label: 'USD' },
                { value: 'GBP', label: 'GBP' },
                { value: 'EUR', label: 'EUR' },
                { value: 'Other', label: 'Other' },
              ]}
            />

            <div className={styles.finalDetailsWrap}>
              <div className={styles.singleFieldRow}>
                <FormField
                  label="How did you hear about Moneda?"
                  error={errors.heard_about_moneda}
                >
                  <select {...register('heard_about_moneda')}>
                    <option value="">Select one</option>
                    <option value="ethical-finance-dialogue">
                      Ethical Finance Dialogue — April 2026
                    </option>
                    <option value="halvest-referral">
                      Referred by Halvest
                    </option>
                    <option value="personal-referral">Personal referral</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="other">Other</option>
                  </select>
                </FormField>
              </div>

              <div className={styles.signaturePanel}>
                <div className={styles.signatureIntro}>
                  <HiOutlineShieldCheck />
                  <div>
                    <p className={styles.signatureTitle}>Final sign-off</p>
                    <p className={styles.signatureCopy}>
                      Add your typed legal name and signing date to confirm this
                      submission.
                    </p>
                  </div>
                </div>

                <div className={styles.signatureFields}>
                  <FormField
                    label="Digital Signature"
                    required
                    error={errors.digital_signature}
                  >
                    <input
                      type="text"
                      placeholder="Type your full legal name"
                      {...register('digital_signature', {
                        required: 'Please add your signature',
                        validate: (value) =>
                          value.trim().split(' ').length >= 2 ||
                          'Please enter your full legal name',
                      })}
                    />
                  </FormField>

                  <FormField
                    label="Signature Date"
                    required
                    error={errors.signature_date}
                  >
                    <input
                      type="date"
                      {...register('signature_date', {
                        required: 'Please select the signing date',
                      })}
                    />
                  </FormField>
                </div>
              </div>

              <div className={styles.commentsWrap}>
                <FormField
                  label="Any questions or comments"
                  error={errors.questions_comments}
                >
                  <textarea
                    placeholder="Share any questions you have about the investment structure, terms, or process"
                    {...register('questions_comments')}
                  />
                </FormField>
              </div>
            </div>

            <div className={styles.declarationBox}>
              <p className={styles.formBlockLabel}>
                Section B — Declaration & Acknowledgement
              </p>
              {declarations.map((item) => (
                <label className={styles.declarationItem} key={item.name}>
                  <input
                    type="checkbox"
                    {...register(item.name, {
                      required: true,
                    })}
                  />
                  <span>{item.text}</span>
                </label>
              ))}
              {declarationError && (
                <p className={styles.errorText}>
                  Please confirm all declaration items before submitting.
                </p>
              )}
            </div>

            <div className={styles.formFooter}>
              <div className={styles.submitAction}>
                <Button variant="submit" type="submit" disabled={isSubmitting}>
                  {isSubmitting
                    ? 'Submitting...'
                    : 'Submit Investment Interest'}{' '}
                  <HiMiniArrowLongRight />
                </Button>
              </div>
              <p className={styles.formLegal}>
                This form is a summary of interest for discussion purposes only.
                It does not constitute a legally binding agreement. Full legal
                documentation will be issued separately. For queries contact{' '}
                <a href="mailto:info@monedainvest.com">info@monedainvest.com</a>
                .
              </p>
            </div>
          </form>
        );
    }
  };

  return (
    <Section color="darkBrown" id="apply">
      <div className={styles.formWrap}>
        <FadeIn className={styles.formHeader}>
          <p className={styles.sectionTag}>Register Your Interest</p>
          <h2 className={styles.sectionTitleLight}>
            Complete your <span>investment details</span>
          </h2>
          <p className={styles.centerTextLight}>
            This is a strictly private offering. Please complete the form below.
            Our team will be in touch within 48 hours to discuss next steps and
            share full documentation.
          </p>
        </FadeIn>
        {isSubmitting ? <Loader /> : renderContent()}
      </div>
    </Section>
  );
}

function FormField({ label, required = false, error, children }) {
  return (
    <div className={styles.field}>
      <label>
        {label}
        {required && <span>*</span>}
      </label>
      {children}
      {error && <p className={styles.errorText}>{error.message}</p>}
    </div>
  );
}

function ChoiceGroup({ label, name, options, register, error, icon }) {
  return (
    <div className={styles.choiceGroup}>
      <div className={styles.choiceHeader}>
        <span>{icon}</span>
        <label>{label}</label>
      </div>
      <div className={styles.choiceRow}>
        {options.map((option) => (
          <label className={styles.choiceItem} key={option.value}>
            <input
              type="radio"
              value={option.value}
              {...register(name, {
                required: 'Please select an option',
              })}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {error && <p className={styles.errorText}>{error.message}</p>}
    </div>
  );
}

function SuccessState() {
  return (
    <motion.div
      className={`${styles.notificationContainer} ${styles.success}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <FaCircleCheck />
      <div>
        <h3>Interest received</h3>
        <p>
          Thank you. Your investment interest has been submitted to the Moneda
          team. We will be in touch within 48 hours to discuss next steps and
          share full documentation.
        </p>
      </div>
    </motion.div>
  );
}

function FailedState() {
  const router = useRouter();

  function resetStatus() {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, status: '' },
      },
      undefined,
      { shallow: true },
    );
  }

  return (
    <motion.div
      className={`${styles.notificationContainer} ${styles.failed}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <MdCancel />
      <div>
        <h3>Submission failed</h3>
        <p>
          Please try again or contact the Moneda team directly if the issue
          persists.
        </p>
      </div>
      <Button variant="secondary" onClick={resetStatus}>
        Try again
      </Button>
    </motion.div>
  );
}

function FadeIn({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default InvestmentTermsheetPage;
