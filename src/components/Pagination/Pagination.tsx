import React from "react";

import styles from "./Pagination.module.scss";
import { INavigation } from "../../types/types";
import { isObjectEmpty } from "../../utils";
import Button from "../Button/Button";

interface IProps {
  goToPrevious(): void;
  goToNext(): void;
  navigation?: INavigation;
}

const Pagination: React.FC<IProps> = ({
  goToPrevious,
  goToNext,
  navigation,
}) => {
  return (
    <footer className={styles.wrapper}>
      <Button
        customClass={styles.navigation}
        disabled={!isObjectEmpty(navigation) && !navigation?.prev}
        onClick={() => goToPrevious()}
        label="Previous"
        testId="previous"
      />
      <Button
        customClass={styles.navigation}
        disabled={!isObjectEmpty(navigation) && !navigation?.next}
        onClick={() => goToNext()}
        label="Next"
        testId="next"
      />
    </footer>
  );
};

export default Pagination;
