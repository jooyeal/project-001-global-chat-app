import React from "react";
import styles from "../../../styles/components/common/FriendsList/FriendsList.module.css";
import List from "./List";

interface friend {
  id: number;
  url: string;
  name: string;
}

interface Props {
  friends: Array<friend>;
}

export default function FriendsList({ friends }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>FRIEND LIST</div>
      {friends.map((friend) => (
        <List
          key={friend.id}
          id={friend.id}
          url={friend.url}
          name={friend.name}
        />
      ))}
    </div>
  );
}
