import Image from "next/image";
import React from "react";
import styles from "../../../styles/components/common/FriendsList/List.module.css";

interface Props {
  id: number;
  url: string;
  name: string;
}

export default function List({ id, url, name }: Props) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={`/assets/default_user.png`}
        width={40}
        height={40}
        layout="fixed"
      />
      <div className={styles.status}></div>
      <p>{name}</p>
    </div>
  );
}
