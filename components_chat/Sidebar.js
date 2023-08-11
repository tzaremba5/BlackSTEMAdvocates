import React, { useContext, useState } from "react";
import Search from './Search'
import User from './User'

import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";

import { db } from "../context/firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";


function Sidebar() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const [selected, setSelected] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const { dispatch } = useContext(ChatContext);


  const handleSelect = async () => {
    setSelected(!selected);

    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    dispatch({ type: "CHANGE_USER", payload: user });
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {

        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    // setUser(null);
    // setUsername("")
  };

  return (
    <div className='w-1/3 text-gray-300 bg-white border-r-2 border-gray-200'>
      <div className="w-full">
        <div className="pt-[10px] pl-[20px] pb-[10px] text-[20px] relative flex items-center border-b-2 border-gray-200 ">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <input
          className="placeholder-gray-300 w-full text-gray-500 focus:outline-none pl-[10px]"
          placeholder="Search People, Groups, Messages"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          ></input>
        </div>

          {user && <div onClick={handleSelect} className={selected ? 'bg-gray-100' : ''}>  
              <User displayName={user.displayName} color='red'/>  
            </div>}
      </div>
    </div>
  )
}

export default Sidebar