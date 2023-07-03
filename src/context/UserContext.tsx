import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  Dispatch,
} from "react";

export interface IUser {
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

interface UserState {
  user: IUser | null;
}

type UserAction = {
  type: "SET_USER";
  payload: IUser | null;
};

interface UserContextType extends UserState {
  dispatch: Dispatch<UserAction>;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(UserReducer, {
    user: null,
  });

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }

  return context;
};
