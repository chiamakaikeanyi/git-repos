import React, { useEffect, useState } from "react";

import styles from "./SearchBar.module.scss";
import { useUserContext } from "../../context/UserContext";
import { apiClient } from "../../services/api-client";
import { BASE_URL } from "../../services/constants";
import Button from "../Button/Button";
import { SearchIcon } from "../Icons";
import Input from "../Input/Input";

const SearchBar = () => {
  const { dispatch } = useUserContext();
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState(false);

  async function getUser(user = username) {
    const data = await apiClient({
      url: `${BASE_URL}/users/${user}`,
    });

    if (!data) {
      setMessage(true);
    } else {
      dispatch({ type: "SET_USER", payload: data });
      setMessage(false);
    }
  }

  useEffect(() => {
    let initialFetch = false;

    if (!initialFetch) {
      getUser("octocat");
      initialFetch = true;
    }
    // eslint-disable-next-line
  }, []);

  return (
    <label htmlFor="user_search" className={styles.wrapper}>
      <Input
        icon={<SearchIcon />}
        type="search"
        name="user_search"
        value={username}
        onChange={(event) => setUsername(event.target.value?.trim())}
        placeholder="GitHub username..."
        customClass={styles.input_field}
      />
      {message && <span className={styles.no_result}>No result</span>}
      <Button
        label="Search"
        onClick={() => getUser()}
        customClass={styles.button}
      />
    </label>
  );
};

export default SearchBar;
