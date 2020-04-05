import React from "react";
import Profile from "./components/Profile/Profile";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/Friendlist";
import friends from "./data/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";

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
