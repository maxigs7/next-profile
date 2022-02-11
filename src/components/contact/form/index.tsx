import { FormControl, Input, Label, Textarea } from '@/components';
import cx from '@/lib/classnames';
import { IContact } from '@/model';
import React, { useRef, useState } from 'react';
import Message from './message';

type FormErrors = Partial<{ [key in keyof IContact]: string }>;

interface IProps extends React.ComponentProps<'form'> {
  onSubmitForm: (contact: IContact) => Promise<void>;
}

const validateForm = (contact: IContact): FormErrors | undefined => {
  const errors: FormErrors = {};
  let noErrors = true;
  if (!contact.fullName.trim()) {
    errors.fullName = 'Full name field is required';
    noErrors = false;
  }
  if (!contact.email.trim()) {
    errors.email = 'Email field is required';
    noErrors = false;
  }
  if (!contact.subject.trim()) {
    errors.subject = 'Subject field is required';
    noErrors = false;
  }
  if (!contact.message.trim()) {
    errors.message = 'Message field is required';
    noErrors = false;
  }

  if (noErrors) return undefined;

  return errors;
};

const ContactForm: React.FC<IProps> = ({ className, onSubmitForm }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<'success' | 'error' | undefined>(undefined);

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const target = e.target as typeof e.target & {
      email: { value: string };
      fullName: { value: string };
      message: { value: string };
      subject: { value: string };
    };

    const contact = {
      email: target.email.value,
      fullName: target.fullName.value,
      message: target.message.value,
      subject: target.subject.value,
    };
    const errors = validateForm(contact);
    if (errors) {
      setErrors(errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    return onSubmitForm(contact)
      .then(
        () => {
          setStatus('success');
          if (formRef.current) {
            formRef.current.reset();
          }
        },
        () => {
          setStatus('error');
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form
      className={cx('max-w-lg mx-auto flex flex-col w-full gap-2', className)}
      onSubmit={onSubmitHandler}
      ref={formRef}
    >
      <Message status={status} />
      <FormControl>
        <Label>Full name</Label>
        <Input placeholder="John Doe" name="fullName" />
        {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}
      </FormControl>
      <FormControl>
        <Label>Email</Label>
        <Input placeholder="jonh@example.com" name="email" type="email" />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
      </FormControl>
      <FormControl>
        <Label>Subject</Label>
        <Input placeholder="Subject" name="subject" />
        {errors.subject && <span className="text-red-500">{errors.subject}</span>}
      </FormControl>

      <FormControl>
        <Label>Message</Label>
        <Textarea placeholder="Write your message..." name="message" rows={5} />
        {errors.message && <span className="text-red-500">{errors.message}</span>}
      </FormControl>

      <button
        className="px-4 py-2 rounded font-bold bg-dodgeBlue-500 text-white uppercase"
        type="submit"
        disabled={isSubmitting}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
