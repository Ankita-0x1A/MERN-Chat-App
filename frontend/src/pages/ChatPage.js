import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

// const ChatPage = () => {
//   const [chats, setChats] = useState([]);
//   const history = useHistory();

//   const fetchChats = async () => {
//     try {
//       const user = JSON.parse(localStorage.getItem("userInfo"));

//       // 🔥 IF NO USER → REDIRECT TO LOGIN
//       if (!user) {
//         history.push("/");
//         return;
//       }

//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       };

//       const { data } = await axios.get("/api/chat", config);

//       console.log("CHATS:", data);
//       setChats(data);
//     } catch (error) {
//       console.log("ERROR:", error.response?.data);
//     }
//   };

//   useEffect(() => {
//     fetchChats();
//   }, []);

//   return (
//     <div>
//       <h2>My Chats</h2>

//       {chats.length === 0 ? (
//         <p>No chats yet</p>
//       ) : (
//         chats.map((chat) => (
//           <div key={chat._id}>
//             {chat.chatName || "No Name"}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default ChatPage;