import React, { FC } from "react";
import { useAuth } from "../contexts/useAuth";
import Summarize from "./Summarize/Summarize";
import Login from "./Login/Login";


/** ensures only a logged in user can use the application */
const PrivateRoute: FC = () => {
  const { currentUser } = useAuth()!;
  const [authenticated, setAuthenticated] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (currentUser) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [currentUser]);
  console.log(currentUser, authenticated)
  return authenticated ? <Summarize /> : <Login />;
};

export default PrivateRoute;
