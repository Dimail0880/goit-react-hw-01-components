import React from "react";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import styles from "./Friends.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(el => (
        <FriendListItem
          key={el.id}
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired
};

export default FriendList;
