import { useForm } from 'react-hook-form';
import styles from './styles/rsvp.module.css';
import { useNewsletter } from '@/hooks/useNewsletter';
import FormInput from '@/components/formElements/FormInput';
import Image from 'next/image';
import Button from '@/components/Button';
import { splitFullName } from '@/utils/helpers';
import { newsletterApi } from '@/services/apiNewsletter';
import toast from 'react-hot-toast';

function RSVP() {
  const { register, formState, handleSubmit, reset, watch } = useForm();
  const { errors } = formState;
  const formActions = { register, errors };

  const { newsletterSignup, isSigningUp } = useNewsletter();

  // watch the "Coming alone?" select to know whether to show the guest input
  const tagsValue = watch('TAGS');
  // if TAGS === 'no' they are NOT coming alone -> they are bringing a guest
  const isBringingGuest = tagsValue === 'PLUS 1';

  async function onSubmit(data) {
    const { firstName, lastName } = splitFullName(data.FULL_NAME || '');
    const attributes = {
      FIRSTNAME: firstName,
      LASTNAME: lastName,
      TAGS: data.TAGS,
    };

    // include PLUS_ONE only when the attendee indicated they are bringing a guest
    if (isBringingGuest && data.PLUS_ONE) {
      attributes.FULL_NAME = data.PLUS_ONE;
    }

    const newData = {
      email: data.email,
      listId: 50,
      attributes,
    };

    // Use direct API call so we can handle errors locally (no hook onError)
    try {
      await newsletterApi(newData);
      toast.success('RSVP received.');
      reset();
    } catch (err) {
      toast.error('Attendee already registered.');
    }
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
            <option value="">Coming alone?</option>
            <option value="ALONE">Yes</option>
            <option value="PLUS 1">No</option>
          </FormInput>

          {isBringingGuest && (
            <FormInput
              type="text"
              id="PLUS_ONE"
              placeholder="Your guest's name"
              formActions={formActions}
              // require full name: at least two words (first + last)
              validation={{
                validate: (val) => {
                  if (!val) return "Please provide your guest's full name";
                  const cleaned = val.trim().replace(/\s+/g, ' ');
                  return (
                    cleaned.split(' ').length >= 2 ||
                    "Please provide your guest's full name"
                  );
                },
              }}
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
