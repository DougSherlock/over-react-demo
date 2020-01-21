import React, { useContext } from "react";
import { UserContext } from "./UserContext";

// This component displays name from Context
const Name = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h2 className="is-size-4">
        {/* Pass name from context here */}
        <strong>Name</strong>: {user.name}
      </h2>
    </div>
  );
};

export default Name;
