import React from "react";
import type {
  ChangeEventHandler,
  KeyboardEventHandler,
  ReactNode,
} from "react";
import styles from "./Input.module.scss";
import { composeClass } from "../../utils";

interface IProps {
  type?: string;
  name: string;
  placeholder?: string;
  className?: string;
  value?: string;
  defaultValue?: string;
  icon?: ReactNode;
  iconName?: string;
  customClass?: string;
  autoComplete?: string;
  pattern?: string;
  required?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onFocus?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
}

const Input: React.FC<IProps> = ({
  value,
  icon,
  iconName,
  name,
  customClass = "",
  placeholder,
  defaultValue,
  type = "text",
  onChange,
  autoComplete = "off",
  pattern = "[A-Za-z]+",
  required,
  disabled = false,
  readOnly = false,
  maxLength = 20,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyUp,
}) => {
  return (
    <div className={styles.wrapper}>
      {icon ? <span className={styles.icon}>{icon}</span> : null}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        className={composeClass(styles.input, customClass)}
        autoComplete={autoComplete}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        minLength={0}
        required={required}
        pattern={pattern}
      />
    </div>
  );
};

export default Input;
