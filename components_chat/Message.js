import React, { useState, useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../context/firebase";
import { v4 as uuid } from "uuid";

function Message() {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  return (
    <div className='h-[60px] border-t-2 border-gray-200 w-full'>
      <div className='flex justify-between mt-[10px] w-full'>
        <input
          className='w-full left-element placeholder-gray-300 ml-[5px] text-gray-500 text-[20px] focus:outline-none'
          placeholder='Write a message...'
          value={text}
          onChange={(e) => setText(e.target.value)} // Use handleMessageChange for onChange
        />
        <button
          className={`ml-[20px] right-element font-medium px-[15px] py-[5px] mr-[20px] rounded-full ${
            text ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'
          }`}
          onClick={handleSend}
          disabled={!text}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Message;
