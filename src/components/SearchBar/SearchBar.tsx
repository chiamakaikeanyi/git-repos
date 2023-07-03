import { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import styles from "./SearchBar.module.scss";

import { SearchIcon } from "../Icons";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { apiClient } from "../../services/api-client";

const BASE_URL = "https://api.github.com";

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
