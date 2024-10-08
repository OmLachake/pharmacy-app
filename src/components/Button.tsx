import React from 'react';

interface IButton {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  size?: 'small' | 'long' | 'auto';
  error?: boolean;
  style?: 'filled' | 'border';
  action?: 'success' | 'default' | 'none' | 'error' | 'warn';
}

const Button = ({ 
    label, 
    onClick, 
    disabled = false, 
    size='auto', 
    error=false, 
    style='filled', 
    action='default' 
}: IButton) => {

  const errorClasses = error
    ? 'error'
    : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${size} ${style} ${action} ${errorClasses}`}
    >
      {label}
    </button>
  );
};

export default Button;