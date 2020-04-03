import React from 'react';
import PropTypes from "prop-types";


const FriendListItem = ({name, avatar, isOnline}) => {
    return (
        <li className="item">
  <span className="status">{isOnline}</span>
  <img className="avatar" src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
</li>
    );
};

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;