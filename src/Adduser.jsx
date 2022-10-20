import React from "react";

const Adduser = ({ user }) => {
  return (
    <>
      <th className="th">{user.name?.first}</th>
      <th className="th">{user?.email}</th>
      <th className="th">{user?.phone}</th>
      <th className="th">{user.dob?.age}</th>
    </>
  );
};

export default Adduser;
