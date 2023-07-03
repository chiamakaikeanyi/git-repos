import React from "react";

import styles from "./Home.module.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserProfile from "../../components/UserProfile/UserProfile";
import UserRepositories from "../../components/UserRepositories/UserRepositories";

export default function Home() {
  return (
    <section data-testid="home_container" className={styles.container}>
      <SearchBar />
      <UserProfile />
      <UserRepositories />
    </section>
  );
}
