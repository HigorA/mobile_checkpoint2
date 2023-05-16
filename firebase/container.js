import { useDispatch } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from './firebase-api'
import { setUser, resetUser } from '../reducers/loginSlice'

const FirebaseContainer = ({children}) => {
    const dispatch = useDispatch();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(setUser({user}))
        } else {
            dispatch(resetUser())
        }
    })

    return (
        <>
            {children}
        </>
    )
}

export default FirebaseContainer;