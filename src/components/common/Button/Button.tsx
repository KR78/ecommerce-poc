import React from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  className?: string;
  type?: 'button' | 'reset' | 'submit';
  unStyled?: boolean;
  disabled?: boolean;
  loading?: boolean;
  ariaLabel?: string;
  children?: React.ReactNode;
  onClick(e: any): void;
}

const Button = ({
  type,
  className,
  unStyled,
  loading,
  children,
  onClick,
  disabled,
  ariaLabel,
}: ButtonProps) => {
  const buttonClassName = () => {
    let c = '';
    if (className) {
      c += `${className} `;
    }
    if (unStyled) {
      return `${c} ${style.unStyled}`;
    }
    return c;
  };

  return (
    <button
      aria-label={ariaLabel}
      type={type}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
      }}
      className={buttonClassName()}
      disabled={loading || disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  ariaLabel: '',
  type: 'button',
  unStyled: true,
  disabled: false,
  loading: false,
  children: null,
};

export default Button;
