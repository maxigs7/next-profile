import { RECAPTCHA_SITE_KEY } from 'config';
import React, { ForwardedRef } from 'react';
import ReCAPTCHA, { ReCAPTCHAProps } from 'react-google-recaptcha';

type Props = Omit<ReCAPTCHAProps, 'sitekey'>;
const Recaptcha = ({ onChange, ...props }: Props, ref: ForwardedRef<ReCAPTCHA>) => {
  if (!RECAPTCHA_SITE_KEY) return null;

  return <ReCAPTCHA ref={ref} sitekey={RECAPTCHA_SITE_KEY} onChange={onChange} {...props} />;
};

export default React.forwardRef<ReCAPTCHA, Props>(Recaptcha);
