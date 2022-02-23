import { FormControl, Input, Label, Recaptcha, Textarea } from '@/components';
import { useLocale } from '@/hooks';
import cx from '@/lib/classnames';
import { IContact } from '@/model';
import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Message from './message';

type FormErrors = Partial<{ [key in keyof IContact]: string }> & { captcha?: string };
interface DataForm extends IContact {
  'g-recaptcha-response': string;
}
interface IProps extends React.ComponentProps<'form'> {
  onSubmitForm: (contact: DataForm) => Promise<void>;
}

const validateForm = (contact: DataForm): FormErrors | undefined => {
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

  if (!contact['g-recaptcha-response'].trim()) {
    errors.message = 'Captcha is required';
    noErrors = false;
  }

  if (noErrors) return undefined;

  return errors;
};

const ContactForm: React.FC<IProps> = ({ className, onSubmitForm }) => {
  const { t } = useLocale();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<'success' | 'error' | undefined>(undefined);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onSubmitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const target = e.target as typeof e.target & {
      email: { value: string };
      fullName: { value: string };
      message: { value: string };
      subject: { value: string };
    };

    const recaptchaValue = recaptchaRef.current?.getValue() || '';
    const contact: DataForm = {
      email: target.email.value,
      fullName: target.fullName.value,
      message: target.message.value,
      subject: target.subject.value,
      'g-recaptcha-response': recaptchaValue,
    };
    const errors = validateForm(contact);
    if (errors) {
      setErrors(errors);
      return;
    }

    // Else reCAPTCHA was executed successfully so proceed with the
    // alert
    try {
      setErrors({});
      setIsSubmitting(true);
      await onSubmitForm(contact);
      setStatus('success');
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      setStatus('error');
    } finally {
      recaptchaRef.current?.reset();
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className={cx('max-w-lg mx-auto flex flex-col w-full gap-2', className)}
      onSubmit={onSubmitHandler}
      ref={formRef}
    >
      <Message status={status} />
      <FormControl>
        <Label>{t('contact_label_fullName')}</Label>
        <Input placeholder={t('contact_placeholder_fullName')} name="fullName" />
        {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}
      </FormControl>
      <FormControl>
        <Label>{t('contact_label_email')}</Label>
        <Input placeholder={t('contact_placeholder_email')} name="email" type="email" />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
      </FormControl>
      <FormControl>
        <Label>{t('contact_label_subject')}</Label>
        <Input placeholder={t('contact_placeholder_subject')} name="subject" />
        {errors.subject && <span className="text-red-500">{errors.subject}</span>}
      </FormControl>

      <FormControl>
        <Label>{t('contact_label_message')}</Label>
        <Textarea placeholder={t('contact_placeholder_message')} name="message" rows={5} />
        {errors.message && <span className="text-red-500">{errors.message}</span>}
      </FormControl>

      <FormControl>
        <Recaptcha size="normal" ref={recaptchaRef} />
        {errors.captcha && <span className="text-red-500">{errors.captcha}</span>}
      </FormControl>

      <button
        className="px-4 py-2 rounded font-bold bg-dodgeBlue-500 text-white uppercase"
        type="submit"
        disabled={isSubmitting}
      >
        {t('contact_button_submit')}
      </button>
    </form>
  );
};

export default ContactForm;
