import React from "react";
import type { FocusEventHandler, MouseEventHandler, ReactNode } from "react";

import styles from "./Button.module.scss";
import { composeClass } from "../../utils";

interface IProps {
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  iconPosition?: string;
  label: string;
  testId?: string;
  customClass?: string;
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
  iconPosition = "left",
  label,
  testId,
  customClass = "",
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
      className={composeClass(styles.button, customClass)}
      disabled={disabled}
      data-testid={testId}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      {...rest}
    >
      {icon && iconPosition === "left" ? (
        <span className={styles.icon}>{icon}</span>
      ) : null}
      {label}
      {icon && iconPosition === "right" ? (
        <span className={styles.icon}>{icon}</span>
      ) : null}
    </button>
  );
};

export default Button;
