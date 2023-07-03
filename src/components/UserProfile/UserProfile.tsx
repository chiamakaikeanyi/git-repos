import React from "react";
import format from "date-fns/format";
import styles from "./UserProfile.module.scss";

import {
  CompanyIcon,
  LocationIcon,
  TwitterIcon,
  WebsiteIcon,
  Spinner,
} from "../Icons";
import { composeClass } from "../../utils";
import { useUserContext } from "../../context/UserContext";

export const UserProfile = () => {
  const { user } = useUserContext();

  if (!user) {
    return <p>&nbsp;</p>;
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.profile}>
        {user.avatar_url ? (
          <img
            className={styles.avatar}
            src={user.avatar_url}
            alt="user's avatar"
          />
        ) : (
          <Spinner className={styles.avatar} />
        )}
        <div className={styles.profile_details}>
          <h1 className={styles.user_name}>{user.name ?? "GitHub User"} </h1>
          <a
            className={styles.user_login}
            href={`https://github.com/${user.login}`}
          >
            @{user.login ?? "not_available"}
          </a>
          <p className={styles.user_joined_date}>
            {user.created_at
              ? `Joined ${format(new Date(user.created_at), "dd MMM yyyy")}`
              : ""}
          </p>
        </div>
      </div>

      <div>
        <p className={styles.bio}>{user.bio ?? "This profile has no bio"}</p>

        <div className={styles.summary}>
          <div className={styles.stat}>
            <p className={styles.summary_title}>Repos</p>
            <h3 className={styles.summary_content}>{user.public_repos}</h3>
          </div>

          <div className={styles.stat}>
            <p className={styles.summary_title}>Followers</p>
            <h3 className={styles.summary_content}>{user.followers}</h3>
          </div>

          <div className={styles.stat}>
            <p className={styles.summary_title}>Following</p>
            <h3 className={styles.summary_content}>{user.following}</h3>
          </div>
        </div>

        <div className={styles.info_wrapper}>
          <div
            className={composeClass(
              styles.info,
              !user.location ? styles.no_info : ""
            )}
          >
            <LocationIcon /> {user.location ?? "Not Available"}
          </div>

          <div
            className={composeClass(
              styles.info,
              !user.blog ? styles.no_info : ""
            )}
          >
            <WebsiteIcon />
            {user.blog ? <a href={user.blog}>{user.blog}</a> : "Not Available"}
          </div>

          <div
            className={composeClass(
              styles.info,
              !user.twitter_username ? styles.no_info : ""
            )}
          >
            <TwitterIcon /> {user.twitter_username ?? "Not Available"}
          </div>

          <div
            className={composeClass(
              styles.info,
              !user.company ? styles.no_info : ""
            )}
          >
            <CompanyIcon /> {user.company ?? "Not Available"}
          </div>
        </div>
      </div>
    </section>
  );
};
