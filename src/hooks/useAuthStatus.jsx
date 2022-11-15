import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    console.log(auth);
    onAuthStateChanged(auth, (user) => {
      console.log('user at auth hook',user)
      if (user) {
        setLoggedIn(true);
        setUser(user);
      }
      setCheckingStatus(false);
    });
  }, []);
  return { user, loggedIn, checkingStatus };
}


