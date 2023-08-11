import React, { useContext, useEffect, useState } from 'react'
import Chats from './Chats'
import Message from './Message'
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div className="w-2/3 flex flex-col bg-white">
      <div className="h-[50px] ml-[10px] mt-[10px] text-[20px] font-bold"> {data.user?.displayName} </div>
      <div className="flex flex-col flex-grow">
        <div className="flex-grow mx-[10px]">
          <Chats/>
        </div>
        <div className="mx-[10px]">
          <Message/>
        </div>
      </div>
    </div>
  )
}

export default Chat