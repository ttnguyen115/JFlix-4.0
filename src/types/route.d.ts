export type IRoute = {
  key: string;
  path: string;
  component: JSX.Element[] | JSX.Element;
  requiredAuth: boolean;
  exact: boolean;
};
