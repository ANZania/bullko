import  {useEffect, useState} from 'react';

export function useAuth(authFirebase) {
    const [authentication, setAuthentication] = useState(null);

    const provider = new authFirebase.GoogleAuthProvider();
    const auth = authFirebase();
    const signIn = () => auth.signInWithPopup(provider);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setAuthentication(user)
            }
        });
    }, [authentication])

    return({authentication, signIn})
}