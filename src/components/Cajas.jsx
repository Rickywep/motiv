import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import Caja from "./Caja";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Cajas() {
  const [feedbacks, setFeedbacks] = useState([]);
  console.log("file: TabUsers.jsx ~ line 6 ~ users",feedbacks);
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:4000/api/feedbacks");
      setFeedbacks(response.data.feedbacks);
    };

    getUsers();
  }, []);


  return (
    <Scrollbars className="scroll" >
      <div>
        {feedbacks.map((feed, id) => (
          <Caja key={id} data={feed} />
        ))}
      </div>
    </Scrollbars>
  );
}
