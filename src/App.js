import React from "react";
import Profile from "./components/profile/profile";
import user from "./components/data/user.json";
import statisticalData from "./components/data/statistical-data.json";
import Statistics from "./components/statistics/Statistics";
import FriendList from "./components/FriendList/Friendlist";
import friends from "./components/data/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/data/transactions.json";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
