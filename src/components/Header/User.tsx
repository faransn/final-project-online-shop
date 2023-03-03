import React, { useState, useEffect } from "react";
import { getSingleUser } from "../../api/user/get";
import userIcon from "../../assets/user-icon.png";
import { TUser } from "../../types/TUser";

function User() {
  const [singleUser, setSingleUser] = useState<TUser>();

  useEffect(() => {
    const fetchSingleUser = async () => {
      const jsonSingleUser = await getSingleUser();
      setSingleUser(jsonSingleUser);
    };
    fetchSingleUser();
  }, []);

  return (
    <div className="flex justify-start items-center">
      <img src={userIcon} alt="user icon" />
      <p className="font-serif hidden sm:inline">
        &nbsp;&nbsp;Hi, {singleUser?.name?.firstname || ""}
      </p>
    </div>
  );
}

export default User;
