import React from "react";
import PropTypes from "prop-types";
import styles from "./Friends.module.css";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={styles.item}>
      {isOnline ? (
        <span className={styles.status} style={{ background: "#66b258" }} />
      ) : (
        <span className={styles.status} style={{ background: "#ea5f58" }} />
      )}
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;
