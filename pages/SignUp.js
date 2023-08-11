import React, { useState } from 'react'
import HomePageHeader from '../components/HomePageHeader'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from '../context/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { create } from 'domain';
import { useRouter } from 'next/router';

function SignUp() {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [errMessage, setErrMessage] = useState('');
    const router = useRouter(); 
  
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const displayName = e.target[0].value + " " + e.target[1].value;
        const email = e.target[2].value;
        const password = e.target[3].value;
        const confirm_password = event.target[4].value;

        if (password !== confirm_password) {
            setError('Passwords do not match');
            return;
        } else {
            setError('');
        }

        try {
          //Create user
          const res = await createUserWithEmailAndPassword(auth, email, password);
    
          //Create a unique image name
          const date = new Date().getTime();
          const storageRef = ref(storage, `${displayName + date}`);
    
          await uploadBytesResumable(storageRef).then(() => {
            getDownloadURL(storageRef).then(async () => {
              try {
                //Update profile
                await updateProfile(res.user, {
                  displayName,
                });
                //create user on firestore
                await setDoc(doc(db, "users", res.user.uid), {
                  uid: res.user.uid,
                  displayName,
                  email,
                });

                //create empty user chats on firestore
                await setDoc(doc(db, "userChats", res.user.uid), {});
                router.push('/dashboard');
              } catch (err) {
                console.log(err);
                // setErr(true);
                setLoading(false);
              }
            });
          });
        } catch (err) {
        //   setErr(true);
          setLoading(false);
        }
      };
    

    const handleGoogleSignUp = () => {
        // Call the Google Sign-Up process here
        // For example, you can use the `gapi.auth2.getAuthInstance().signIn()` method.
      };
    
      return (
        <div>
          <HomePageHeader />
          <div className='flex justify-center'>
            <div className='w-full mx-[50px] max-w-[500px] mt-[50px] mb-[150px]'>
                {/* Title */}
                <div className='text-xl font-bold mb-[20px]'>
                    Create an Account
                </div>

                {/* Login with email and password */}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="first_name" className="block font-medium">
                        First Name
                    </label>
                    <input type="first_name" className="border border-gray-300 rounded-md w-full p-2 mt-1 mb-4"/>

                    <label htmlFor="last_name" className="block font-medium">
                        Last Name
                    </label>
                    <input type="last_name" className="border border-gray-300 rounded-md w-full p-2 mt-1 mb-4"/>

                    <label htmlFor="email" className="block font-medium">
                        Email
                    </label>
                    <input type="email" className="border border-gray-300 rounded-md w-full p-2 mt-1 mb-4"/>

                    <label htmlFor="password" className="block font-medium">
                        Password
                    </label>
                    <input type="password" className="border border-gray-300 rounded-md w-full p-2 mt-1 mb-4"/>

                    <label htmlFor="password" className="block font-medium">
                        Confirm Password
                    </label>
                    <input type="password" className="border border-gray-300 rounded-md w-full p-2 mt-1 mb-4"/>

                    <div className='text-red-500'> 
                        {error}
                    </div>

                    <button className="bg-black text-white rounded-md px-4 py-2 mt-4 w-full hover:bg-gray-800">
                        Create an Account
                    </button>
                </form>

                {/* Google Sign Up */}
                {/* <button className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 w-full hover:bg-blue-600" onClick={handleGoogleSignUp}>
                    Sign up with Google
                </button> */}
            </div>
          </div>
        </div>
      );
}

export default SignUp