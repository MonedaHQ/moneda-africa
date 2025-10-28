import { useForm } from 'react-hook-form';
import styles from './styles/rsvp.module.css';
import { useNewsletter } from '@/hooks/useNewsletter';
import FormInput from '@/components/formElements/FormInput';
import Image from 'next/image';
import Button from '@/components/Button';
import { splitFullName } from '@/utils/helpers';

function RSVP() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const formActions = { register, errors };

  const { newsletterSignup, isSigningUp } = useNewsletter();

  function onSubmit(data) {
    const { firstName, lastName } = splitFullName(data.FULL_NAME || '');
    const newData = {
      email: data.email,
      listId: 50,
      attributes: {
        FULL_NAME: data.FULL_NAME,
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        // WHATSAPP: data.WHATSAPP,
      },
    };

    newsletterSignup(newData, { onSettled: () => reset() });
  }
  return (
    <div className={styles.rsvpContainer} id="rsvp">
      <form className={styles.formBody} onSubmit={handleSubmit(onSubmit)}>
        <h4>Confirm Your Attendance</h4>
        <fieldset className={styles.fieldset}>
          <FormInput
            type="text"
            id="FULL_NAME"
            placeholder="Full name"
            formActions={formActions}
          />
          <FormInput
            type="email"
            id="email"
            placeholder="Email address"
            formActions={formActions}
          />
          {/* <FormInput
            type="number"
            id="WHATSAPP"
            placeholder="Whatsapp number"
            formActions={formActions}
          /> */}
        </fieldset>
        <Button type="submit" disabled={isSigningUp} variant="secondary">
          {isSigningUp ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
}

export default RSVP;
