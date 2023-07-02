import React from "react";
import type { FocusEventHandler, MouseEventHandler, ReactNode } from "react";

import styles from "./Button.module.scss";

interface IProps {
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  label: string;
  testId?: string;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IProps> = ({
  type = "button",
  icon,
  label,
  testId,
  className = "",
  disabled = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      data-testid={testId}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      {...rest}
    >
      {icon ? <span className={styles.icon}>{icon}</span> : null}
      {label}
    </button>
  );
};

export default Button;
