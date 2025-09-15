import React from 'react'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { SignInSuccess } from '../redux/user/userSlice';
import api from '../lib/axios';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
            const provider= new GoogleAuthProvider()
            const auth = getAuth(app) 
            const result = await signInWithPopup(auth,provider)
            console.log(result)
            const res = await api.post('/auth/google',{name:result.user.displayName,email:result.user.email,photo:result.user.photoURL},
                {
        headers: {
          "Content-Type": "application/json",
        }})
        const data=res.data;
        dispatch(SignInSuccess(data));  
        toast.success("signin successfull")
        navigate('/main')
        }  
 
        catch (error) {
            console.log("could not sign in with google,", error)
        }
    }
  return (
    <button 
    onClick={handleGoogleClick}
    type='button' 
    className='bg-yellow-300 text-sm sm:text-md text-amber-800 p-3 rounded-full w-[80%]  hover:opacity-95'>Continue with Google</button>
  )
}

export default OAuth