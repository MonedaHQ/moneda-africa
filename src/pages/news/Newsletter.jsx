import Button from '@/components/Button';
import FormInput from '@/components/formElements/FormInput';
import { useForm } from 'react-hook-form';

import styles from './styles/newsletter.module.css';
import Section from '@/components/Section';

function Newsletter() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const formActions = { register, errors };

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Section>
      <div className={styles.container}>
        <h3 className={styles.heading}>Subscribe to our Newsletter</h3>
        <form className={styles.formBody} onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            type="email"
            id="email"
            placeholder="Enter your email address"
            formActions={formActions}
          />
          <Button variant="secondary" type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </Section>
  );
}

export default Newsletter;
