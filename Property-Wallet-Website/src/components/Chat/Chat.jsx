import React, { useState } from "react";
import { Launcher } from "popup-chat-react";
import messageHistory from "./messageHistory";
import "./Chat.css";
function Chat() {
  const [state, setState] = useState({
    messageList: messageHistory,
    newMessagesCount: 0,
    isOpen: false,
    fileUpload: false,
  });

  function onMessageWasSent(message) {
    setState((state) => ({
      ...state,
      messageList: [...state.messageList, message],
    }));
  }

  function onFilesSelected(fileList) {
    const objectURL = window.URL.createObjectURL(fileList[0]);

    setState((state) => ({
      ...state,
      messageList: [
        ...state.messageList,
        {
          type: "file",
          author: "me",
          data: {
            url: objectURL,
            fileName: fileList[0].name,
          },
        },
      ],
    }));
  }
  //modify its acutally get message from bot
  function sendMessage(text) {
    if (text.length > 0) {
      const newMessagesCount = state.isOpen
        ? state.newMessagesCount
        : state.newMessagesCount + 1;

      setState((state) => ({
        ...state,
        newMessagesCount: newMessagesCount,
        messageList: [
          ...state.messageList,
          {
            author: "them",
            type: "text",
            data: { text },
          },
        ],
      }));
    }
  }

  function onClick() {
    setState((state) => ({
      ...state,
      isOpen: !state.isOpen,
      newMessagesCount: 0,
    }));
  }

  return (
    <Launcher
      agentProfile={{
        teamName: <span style={{ fontSize: "18px" }}>Property Wallet</span>,
        imageUrl: require("./header.png"),
      }}
      onMessageWasSent={onMessageWasSent}
      onFilesSelected={onFilesSelected}
      messageList={state.messageList}
      newMessagesCount={state.newMessagesCount}
      onClick={onClick}
      isOpen={state.isOpen}
      // showEmoji
      fileUpload={state.fileUpload}
      // pinMessage={{
      //   id: 123,
      //   imageUrl:
      //     "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
      //   title:
      //     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      //   text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      // }}
      onPinMessage={(value) => console.log(value)}
      placeholder="Type here..."
    />
  );
}

export default Chat;
