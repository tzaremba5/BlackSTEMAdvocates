import React, {useState} from 'react';
import HomePageHeader from '../components/HomePageHeader';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../context/firebase";
import { useRouter } from 'next/router';

function Login() {
  const [error, setError] = useState("");
  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);

      router.push('/dashboard');

    } catch (err) {

    }
  };

  const handleGoogleSignUp = (e) => {

  };



  return (
    <div>
      <HomePageHeader />
      <div className='flex justify-center'>
        <div className='w-full mx-[50px] max-w-[500px] mt-[50px]'>

          {/* Title */}
          <div className='text-xl font-bold mb-[20px]'>
                Login
          </div>

          {/* Login with email and password */}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="block font-medium">
                Email
            </label>
            <input type="email" className="border border-gray-300 rounded-md w-full p-2 mt-1 mb-4"/>

            <label htmlFor="password" className="block font-medium">
                Password
            </label>
            <div className='text-red-500'>
              {error}
            </div>
            <input type="password" className="border border-gray-300 rounded-md w-full p-2 mt-1 mb-4"/>
            <button className="bg-black text-white rounded-md px-4 py-2 mt-4 w-full hover:bg-gray-800">
                Sign in
            </button>
          </form>

          {/* Login with Google */}
          {/* <button className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 w-full hover:bg-blue-600" onClick={handleGoogleSignUp}>
            Sign in with Google
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
