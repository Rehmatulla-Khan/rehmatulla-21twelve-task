import React from "react";
import UserCard from "../../component/card/UserCard";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-2 mt-16 md:grid-cols-2 lg:grid-cols-3 place-items-center">
      <UserCard />
    </div>
  );
};

export default Home;
