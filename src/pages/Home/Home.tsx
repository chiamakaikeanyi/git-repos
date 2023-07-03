import React from "react";

import styles from "./Home.module.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import { UserProfile } from "../../components/UserProfile/UserProfile";

export default function Home() {
  return (
    <section data-testid="home_container" className={styles.container}>
      <SearchBar />
      <UserProfile />
    </section>
  );
}
