export type AuthState = {
  token: string | null;
};

export const initialState: AuthState = {
  token: null,
};

const _memorizedAuthState = initialState;
export const getToken = () => _memorizedAuthState;

export type TAccount = {
  accessToken: string;
  email: string;
  id: number;
  roles: string[];
  tokenType: string;
  username: string;
};

export const setAccountStorages = (account: TAccount) => {
  localStorage.setItem("account", JSON.stringify(account));
};

export const getAccountStorages = () => {
  const account = localStorage.getItem("account");
  return account ? (JSON.parse(account) as TAccount) : null;
};
