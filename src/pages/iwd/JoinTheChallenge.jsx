import Section from '@/components/Section';
import styles from './styles/jointhechallenge.module.css';
import { Form, useForm } from 'react-hook-form';
import FormContainer from '@/components/formElements/FormContainer';
import FormBody from '@/components/formElements/FormBody';
import FormInput from '@/components/formElements/FormInput';
import Button from '@/components/Button';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { MdCancel } from 'react-icons/md';
import { useState } from 'react';
import { useContestSubmission } from '@/hooks/useContestSubmission';

const instructions = [
  {
    title: 'Share your story',
    paragraph:
      '<p>Record a video of yourself telling us:</p><ul><li>Who you are & what you do</li><li>What accelerating action means to you</li><li>How you’re making an impact in your community</li></ul>',
  },
  {
    title: 'Post it on Social Media',
    paragraph:
      '<p>You can post your video on Instagram, Facebook, LinkedIn or X (formerly Twitter). <br/>Make sure you:</p><ul><li>Use the hashtag <span>#LeadingHerCommunity</span></li><li>Keep your account public</li></ul>',
  },
  {
    title: 'Register your entry',
    paragraph:
      '<ul><li>Copy the link to your post</li><li>Fill out the entry form on this page</li></ul>',
  },
];

function JoinTheChallenge() {
  return (
    <Section>
      <main className={styles.main}>
        <Heading />
        <MainContent />
      </main>
    </Section>
  );
}

function Heading() {
  return (
    <div className={styles.heading}>
      <h2>Join the challenge!</h2>
      <p>Want to be a part of #LeadingHerCommunity? Here’s how:</p>
    </div>
  );
}

function MainContent() {
  return (
    <div className={styles.mainContent}>
      <Instructions />
      <EntryForm />
    </div>
  );
}

function Instructions() {
  return (
    <div className={styles.instructions}>
      {instructions.map((instruction, index) => {
        return (
          <div key={instruction.title} className={styles.instruction}>
            <div className={styles.title}>
              <span>Step {index + 1}</span>
              <h5>{instruction.title}</h5>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: instruction.paragraph }}
              className={styles.details}
            />
          </div>
        );
      })}
      <p>
        Shortlisted candidates will be invited to Moneda’s exclusive Accelerate
        Action event, where they’ll connect with industry leaders and
        changemakers. One inspiring woman will walk away with{' '}
        <strong>NGN500,000</strong> to continue making a difference in her
        community!
        <br />
        <br />
        Are you ready to lead? Enter now.
      </p>
    </div>
  );
}

function EntryForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const formActions = { register, errors };

  const [formCurremt, setFormCurrent] = useState(null);
  const { submitForm, isSubmittingForm } = useContestSubmission();

  function onSubmit(data) {
    submitForm(data, {
      onSuccess: () => setFormCurrent('success'),
      onError: () => setFormCurrent('failed'),
    });
  }
  return (
    <div className={styles.entryForm} id="challenge">
      {!formCurremt && (
        <h3
          style={{
            borderBottom: '1px solid var(--color-mid-grey)',
            paddingBottom: '8px',
          }}
        >
          Entry Form
        </h3>
      )}
      <FormContainer
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        padding={false}
      >
        {formCurremt === 'success' && <SuccessfulSubmission />}
        {formCurremt === 'failed' && (
          <FailedSubmission setFormCurrent={setFormCurrent} />
        )}
        {!formCurremt && <FormFields formActions={formActions} />}
      </FormContainer>
    </div>
  );
}

function SuccessfulSubmission() {
  return (
    <div className={styles.formBody}>
      <div className={styles.response}>
        <IoMdCheckmarkCircle className={styles.success} />
        <p>Thank you for participating!</p>
      </div>
    </div>
  );
}

function FailedSubmission({ setFormCurrent }) {
  return (
    <div className={styles.formBody}>
      <div className={styles.response}>
        <MdCancel className={styles.failed} />
        <p>
          Oops! Something went wrong.
          <Button variant="link-light" onClick={() => setFormCurrent(null)}>
            Try again
          </Button>
        </p>
      </div>
    </div>
  );
}

function FormFields({ formActions }) {
  const { register, errors } = formActions;
  return (
    <div className={styles.formBody}>
      <div className={styles.formGrid}>
        {/* Basic Information */}
        <FormInput
          type="text"
          id="first_name"
          label="First Name"
          placeholder="Jane"
          formActions={formActions}
        />
        <FormInput
          type="text"
          id="last_name"
          label="Last Name"
          placeholder="Doe"
          formActions={formActions}
        />
        <FormInput
          type="email"
          id="email_address"
          label="Email Address"
          placeholder="jane@example.com"
          formActions={formActions}
        />
        <FormInput
          type="tel"
          id="phone_number"
          label="Phone Number"
          placeholder="+2348012345678"
          formActions={formActions}
        />
        <FormInput
          type="text"
          id="location"
          label="Location (City & Country)"
          placeholder="Lagos, Nigeria"
          formActions={formActions}
        />

        {/* Challenge Submission Details */}
        <FormInput
          type="text"
          id="video_link"
          label="Link to Video"
          placeholder="https://www.instagram.com/p/xyz"
          formActions={formActions}
        />

        {/* How did you hear about the challenge? */}
        <FormInput
          type="select"
          id="referral"
          label="How did you hear about us?"
          formActions={formActions}
        >
          <option value="instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="linkedin">LinkedIn</option>
          <option value="word_of_mouth">Word of Mouth</option>
          <option value="other">Other</option>
        </FormInput>
      </div>

      <div className={styles.checkboxes}>
        <div className={styles.checkbox}>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="public_profile"
              {...register('public_profile', { required: true })}
            />
            <label htmlFor="public_profile">
              I confirm that my Instagram page is public and my entry follows
              the contest guidelines.
            </label>
          </div>
          {errors.public_profile && (
            <p className={styles.error}>You must confirm this.</p>
          )}
        </div>

        <div className={styles.checkbox}>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="consent"
              {...register('consent', { required: true })}
            />
            <label htmlFor="consent">
              I agree to Moneda using my submission for promotional purposes.
            </label>
          </div>
          {errors.consent && (
            <p className={styles.error}>You must agree to this.</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <Button variant="secondary" type="submit" className={styles.submitButton}>
        Enter Challenge
      </Button>
    </div>
  );
}

export default JoinTheChallenge;
