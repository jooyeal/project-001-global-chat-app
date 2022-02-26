import React, { ReactChild } from "react";
import FriendsList from "./FriendsList";
import Navbar from "./Navbar";
import styles from "../../styles/components/common/Layout.module.css";
import Drawer from "./Drawer";
import cn from "classnames";
import { friends } from "../../data/friends";

interface Props {
  children: ReactChild;
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainWrapper}>
        <div className={styles.drawer}>
          <Drawer />
        </div>
        <div className={styles.drawer_detail}></div>
        <div className={styles.children}>{children}</div>
        <div className={styles.friends}>
          <FriendsList friends={friends} />
        </div>
      </div>
    </div>
  );
}
