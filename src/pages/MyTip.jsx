import React, { useState } from "react";
import { useLoaderData } from "react-router";
import MyTipCard from "../components/MyTipCard";

const MyTip = () => {
  const initialMytip = useLoaderData();
  const [users, setUsers] = useState(initialMytip);
  return (
    <div className="max-w-7xl mx-auto min-h-[calc(100vh-117px)] py-12">
     
          <MyTipCard  users={users} setUsers={setUsers}></MyTipCard>
      
    </div>
  );
};

export default MyTip;
