import React, { useContext, useEffect, useState } from 'react'
import { doc, onSnapshot } from "firebase/firestore";

import Message from './Message'

import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../context/firebase";

function Chats() {
    const [chats, setChats] = useState([]);

    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        const getChats = () => {
        const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
            setChats(doc.data());
        });

        return () => {
            unsub();
        };
        };

        currentUser.uid && getChats();
    }, [currentUser.uid]);

    const handleSelect = (u) => {
        dispatch({ type: "CHANGE_USER", payload: u });
    };

  return (
    <div className="chats">
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
          className="flex w-full"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <div className="w-full border-b-2 border-gray-100 bg-gray-100 rounded-md mb-[10px] userChatInfo">
            <div className='text-[20px] ml-[10px] mt-[10px] font-light'>{chat[1]?.userInfo?.displayName}</div>
            <div className='text-[20px] ml-[10px] mt-[10px] pb-[10px]'>{chat[1]?.lastMessage?.text}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Chats