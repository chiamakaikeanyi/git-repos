import React, { useContext } from "react";

import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import Button from "../Button/Button";
import { MoonIcon, SunIcon } from "../Icons";

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme, handleThemeChange } = themeContext;

  return (
    <>
      <nav className={styles.app_name}>
        <Link to="/">
          <h1>Git Repos</h1>
        </Link>
      </nav>
      <Button
        label={theme === "dark" ? "Light" : "Dark"}
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        icon={theme === "dark" ? <SunIcon color="#fff" /> : <MoonIcon />}
        iconPosition="right"
        customClass={styles.theme_switch}
        testId="theme_switch"
        onClick={handleThemeChange}
      />
    </>
  );
};

export default Header;
