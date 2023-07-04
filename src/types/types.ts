export interface IUser {
  id: number;
  login: string;
  avatar_url: string;
  location: string;
  company: string;
  bio?: string;
  twitter_username?: string;
  name: string;
  blog: string;
  created_at: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface IRepository {
  id: number;
  html_url: string;
  name: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
}

export interface INavigation {
  next?: string;
  prev?: string;
}
