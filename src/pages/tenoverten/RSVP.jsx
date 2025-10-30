import { useForm } from 'react-hook-form';
import styles from './styles/rsvp.module.css';
import { useNewsletter } from '@/hooks/useNewsletter';
import FormInput from '@/components/formElements/FormInput';
import Image from 'next/image';
import Button from '@/components/Button';
import { splitFullName } from '@/utils/helpers';

function RSVP() {
  const { register, formState, handleSubmit, reset, watch } = useForm();
  const { errors } = formState;
  const formActions = { register, errors };

  const { newsletterSignup, isSigningUp } = useNewsletter();

  // watch the TAGS select to know whether to show the PLUS_ONE input
  const tagsValue = watch('TAGS');
  const hasPlusOne = tagsValue === 'yes';

  function onSubmit(data) {
    const { firstName, lastName } = splitFullName(data.FULL_NAME || '');
    const attributes = {
      // FULL_NAME: data.FULL_NAME,
      FIRSTNAME: firstName,
      LASTNAME: lastName,
      TAGS: data.TAGS,
    };

    // include PLUS_ONE only when provided/selected
    if (hasPlusOne && data.PLUS_ONE) {
      attributes.FULL_NAME = data.PLUS_ONE;
    }

    const newData = {
      email: data.email,
      listId: 50,
      attributes,
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
          <FormInput type="select" id="TAGS" formActions={formActions}>
            <option value="">Bringing a +1?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </FormInput>

          {hasPlusOne && (
            <FormInput
              type="text"
              id="PLUS_ONE"
              placeholder="Full name of your +1"
              formActions={formActions}
            />
          )}
        </fieldset>

        <Button type="submit" disabled={isSigningUp} variant="secondary">
          {isSigningUp ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
}

export default RSVP;
