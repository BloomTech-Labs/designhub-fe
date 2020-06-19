import React, { useState, useEffect, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';
import {} from '../index';
import { GET_ALL_USERS_QUERY } from '../graphql/index';
import { ADD_USER_MUTATION } from '../graphql/index';
import { useMutation } from '@apollo/react-hooks';

// This file contains the necessary setup to use auth0 login
// Read official documentation for a more thorough explanation

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);
export const Auth0Provider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [newUser, setNewUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  const [addUser] = useMutation(ADD_USER_MUTATION);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (
        window.location.search.includes('code=') &&
        window.location.search.includes('state=')
      ) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setNewUser({
          id: user?.sub,
          email: user?.email,
          avatar: user?.picture,
          // username: user?.nickname,
        });
        addUser({ variables: { data: {
          id: user?.sub,
          email: user?.email,
          avatar: user?.picture,
          // username: user?.nickname,
        } } });
        console.log('NewUserData', {
          id: user?.sub,
          email: user?.email,
          avatar: user?.picture,
          username: user?.nickname,
        });
      }

      
      setLoading(false);
    };



    
    initAuth0();
    // eslint-disable-next-line
  }, [addUser]);


  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client.getUser();
    setNewUser(user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setNewUser(user);
  };
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        newUser,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p),
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
