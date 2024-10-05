import Section from '@/components/Section';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { RiWhatsappFill } from 'react-icons/ri';
import { MdEmail, MdPhone } from 'react-icons/md';
import Button from '@/components/Button';

import styles from './styles/contactpage.module.css';
import FormMain from '@/components/formElements/FormMain';
import FormContainer from '@/components/formElements/FormContainer';
import FormBody from '@/components/formElements/FormBody';
import FormInput from '@/components/formElements/FormInput';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const contactInformation = [
  {
    title: 'Phone number',
    label: '+234 818 500 0400',
    link: 'tel:+2348185000400',
    icon: <MdPhone />,
  },
  {
    title: 'Email',
    label: 'info@monedaafrica.com',
    link: 'mailto:info@monedaafrica.com',
    icon: <MdEmail />,
  },
  {
    title: 'Office Address',
    label: '12, Abeke Animashaun, Lekki Phase 1, Lagos',
    link: 'https://maps.app.goo.gl/xod8EyenNrV8sRYx6',
    icon: <HiBuildingOffice2 />,
  },
  {
    title: 'WhatsApp',
    label: 'Send us a message',
    link: 'https://wa.link/ihxcl6',
    icon: <RiWhatsappFill />,
  },
];

function ContactPage() {
  return (
    <Section color="grey">
      <div className={styles.mainParent}>
        <ContactInfoDisplay />
        <ContactForm />
      </div>
    </Section>
  );
}

function ContactInfoDisplay() {
  return (
    <div className={styles.contactInfoParent}>
      {contactInformation.map((contact) => (
        <ContactCard contact={contact} key={contact.title} />
      ))}
    </div>
  );
}

function ContactCard({ contact }) {
  return (
    <div className={styles.contactCard}>
      <div className={styles.icon}>{contact.icon}</div>
      <div className={styles.contact}>
        <h4>{contact.title}</h4>
        <Button variant="link-light" href={contact.link}>
          {contact.label}
        </Button>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <div className={styles.formParent}>
      <div className={styles.formHeading}>
        <h3>Send Message</h3>
        <p>
          Please verify your information before sending your message. We will
          respond to your inquiry promptly.
        </p>
      </div>
      <FormFields />
    </div>
  );
}

function FormFields() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const formActions = { register, errors };

  const [isSubmitting, setIsSubmitting] = useState(false);

  //   const { submitForm } = useSubmitForm();

  function onSubmit(data) {
    setIsSubmitting(true);
    // submitForm(
    //   { data, subject: 'Contact Form Submission' },
    //   { onSuccess: () => router.push('/') }
    // );
  }

  return (
    // <FormMain>
    <FormContainer
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      padding={false}
    >
      <FormBody disabled={isSubmitting}>
        <FormInput
          type="text"
          id="first_name"
          label="First name"
          placeholder="John"
          formActions={formActions}
        />
        <FormInput
          type="text"
          id="last_name"
          label="Last name"
          placeholder="Doe"
          formActions={formActions}
        />
        <FormInput
          type="email"
          id="email"
          label="Email"
          placeholder="j.doe@example.com"
          formActions={formActions}
        />
        <FormInput
          type="number"
          id="phone_number"
          label="Phone number (optional)"
          placeholder="080123456789"
          formActions={formActions}
          required={false}
        />
        <div className={styles.textarea}>
          <FormInput
            type="textarea"
            id="description"
            label="Message"
            placeholder="Your message goes here"
            formActions={formActions}
          />
        </div>
      </FormBody>
    </FormContainer>
    // </FormMain>
  );
}

export default ContactPage;
