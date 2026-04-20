import Button from '@/components/Button';
import FormInput from '@/components/formElements/FormInput';
import { useForm } from 'react-hook-form';

import styles from './styles/newsletter.module.css';
import Section from '@/components/Section';
import { useNewsletter } from '@/hooks/useNewsletter';

function Newsletter() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const formActions = { register, errors };

  const { newsletterSignup, isSigningUp } = useNewsletter();

  function onSubmit(data) {
    const newData = {
      email: data.email,
      listId: 32,
      attributes: { FIRSTNAME: data.FIRSTNAME, LASTNAME: data.LASTNAME },
    };

    newsletterSignup(newData, { onSettled: () => reset() });
  }

  return (
    <Section paddingTop={false} paddingBottom={false}>
      <div className={styles.container}>
        <h3 className={styles.heading}>Subscribe to our Newsletter</h3>
        <form className={styles.formBody} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.topList}>
            <FormInput
              type="text"
              id="FIRSTNAME"
              placeholder="John"
              formActions={formActions}
            />
            <FormInput
              type="text"
              id="LASTNAME"
              placeholder="Doe"
              formActions={formActions}
            />
          </div>
          <FormInput
            type="email"
            id="email"
            placeholder="Enter your email address"
            formActions={formActions}
          />
          <div className={styles.btnContainer}>
            <Button variant="secondary" type="submit">
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
}

export default Newsletter;
