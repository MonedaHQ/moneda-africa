import Button from '@/components/Button';
import FormInput from '@/components/formElements/FormInput';
import { useForm } from 'react-hook-form';

import styles from './styles/newsletter.module.css';
import { useNewsletter } from '@/hooks/useNewsletter';

function Newsletter() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const formActions = { register, errors };
  const { newsletterSignup, isSigningUp } = useNewsletter();

  function onSubmit(data) {
    newsletterSignup(
      {
        email: data.email,
        listId: 32,
        attributes: { FIRSTNAME: data.FIRSTNAME, LASTNAME: data.LASTNAME },
      },
      { onSettled: () => reset() }
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Stay informed</p>
          <h2>Africa&apos;s real economy, delivered with clarity.</h2>
          <p>
            Join Moneda&apos;s briefing for considered analysis without the noise.
          </p>
        </div>
        <form className={styles.formBody} onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            type="text"
            id="FIRSTNAME"
            placeholder="First name"
            formActions={formActions}
          />
          <FormInput
            type="text"
            id="LASTNAME"
            placeholder="Last name"
            formActions={formActions}
          />
          <FormInput
            type="email"
            id="email"
            placeholder="Email address"
            formActions={formActions}
          />
          <Button variant="secondary" type="submit" disabled={isSigningUp}>
            {isSigningUp ? 'Subscribing…' : 'Join the briefing'}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
