import React, { useEffect, useState } from "react";

import axios from "axios";

import styles from "./UserRepositories.module.scss";
import { useUserContext } from "../../context/UserContext";
import {
  BASE_URL,
  OCTOCAT_USER_NAME,
  REPOS_PER_PAGE,
} from "../../services/constants";
import { INavigation, IRepository } from "../../types/types";
import { parseLink, sortByStarsDescending } from "../../utils";
import { ForkIcon, Spinner, StarIcon } from "../Icons";
import Pagination from "../Pagination/Pagination";

const UserRepositories = () => {
  const { user } = useUserContext();

  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [navigation, setNavigation] = useState<INavigation | undefined>();

  async function getRepositories(
    url = `${BASE_URL}/users/${
      user?.login || OCTOCAT_USER_NAME
    }/repos?per_page=${REPOS_PER_PAGE}`
  ) {
    try {
      await axios.get(url).then((response) => {
        setRepositories(response?.data);

        if (Object.hasOwn(response.headers, "link")) {
          const parsedLinkData = parseLink(response.headers.link);

          setNavigation(parsedLinkData);
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }

  useEffect(() => {
    getRepositories();
  }, [user?.id]);

  if (!user) {
    return <p>&nbsp;</p>;
  }

  return (
    <section className={styles.wrapper}>
      {repositories?.length === 0 ? (
        <div className={styles.flex}>
          <Spinner className={styles.spinner} />
          <p>No repository found.</p>
        </div>
      ) : (
        <>
          <ul
            className={styles.info_wrapper}
            aria-live="polite"
            data-testid="repositories"
          >
            {repositories?.sort(sortByStarsDescending)?.map((repository) => (
              <li key={repository.id}>
                <a
                  href={repository.html_url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {repository.name}
                </a>
                <div className={styles.info}>
                  <span className={!repository.language ? styles.no_info : ""}>
                    {repository.language ?? "Unknown"}
                  </span>
                  <span>
                    <StarIcon /> {repository.stargazers_count}
                  </span>
                  <span>
                    <ForkIcon /> {repository.forks_count}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <Pagination
            goToPrevious={() => getRepositories(navigation?.prev)}
            goToNext={() => getRepositories(navigation?.next)}
            navigation={navigation}
          />
        </>
      )}
    </section>
  );
};

export default UserRepositories;
