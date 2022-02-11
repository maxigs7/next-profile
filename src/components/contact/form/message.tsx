import cx from '@/lib/classnames';
import React from 'react';

interface IProps {
  status: 'success' | 'error' | undefined;
}

const Message: React.FC<IProps> = ({ status }) => {
  if (!status) return null;

  return (
    <div
      className={cx(
        'border-2 p-5 text-black',
        status === 'success' && 'bg-green-200 border-green-900',
        status === 'error' && 'bg-red-200 border-red-900',
      )}
    >
      {status === 'success' && `Your message has been sent. I'll be in touch soon.`}
      {status === 'error' && 'Something wrong happened. Please try again later.'}
    </div>
  );
};

export default Message;
