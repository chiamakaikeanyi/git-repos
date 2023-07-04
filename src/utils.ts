import { IRepository } from "./types/types";

/**
 * Combines a number of styles
 */
export const composeClass = (...styles: string[]) => {
  let classes = "";

  styles.forEach((arg) => {
    if (arg) {
      classes += `${arg} `;
    }
  });

  return classes.trim();
};

export const sortByDateDescending = (a: IRepository, b: IRepository) => {
  if (a.created_at < b.created_at) return 1;
  if (b.created_at < a.created_at) return -1;

  return 0;
};

export const parseLink = (link: string) => {
  const links: Record<string, string> = {};

  link.split(",").forEach((link) => {
    const [url, rel] = link.split(";");
    const linkUrl = url.trim().slice(1, -1);
    const linkRel = rel.trim().split("=")[1].slice(1, -1);

    links[linkRel] = linkUrl;
  });

  return {
    prev: links["prev"],
    next: links["next"],
  };
};
