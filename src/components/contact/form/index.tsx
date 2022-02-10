import { FormControl, Input, Label, Textarea } from '@/components';
import cx from '@/lib/classnames';
import React from 'react';

interface IProps extends React.ComponentProps<'form'> {}

const ContactForm: React.FC<IProps> = ({ className }) => {
  return (
    <form className={cx('max-w-lg mx-auto flex flex-col w-full gap-2', className)}>
      <FormControl>
        <Label>Full name</Label>
        <Input placeholder="John Doe" name="fullName" />
      </FormControl>
      <FormControl>
        <Label>Email</Label>
        <Input placeholder="jonh@example.com" name="email" type="email" />
      </FormControl>
      <FormControl>
        <Label>Subject</Label>
        <Input placeholder="Subject" name="subject" />
      </FormControl>

      <FormControl>
        <Label>Message</Label>
        <Textarea placeholder="Write your message..." name="message" rows={5} />
      </FormControl>

      <button
        className="px-4 py-2 rounded font-bold bg-dodgeBlue-500 text-white uppercase"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
