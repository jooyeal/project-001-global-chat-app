import React, { ReactChild, useEffect } from "react";
import FriendsList from "./FriendsList";
import Navbar from "./Navbar";
import styles from "../../styles/components/common/Layout.module.css";
import Drawer from "./Drawer";
import cn from "classnames";
import { friends } from "../../data/friends";
import { useAppDispatch } from "../../hooks/storeHook";
import { fetchSuccess } from "../../store/slices/authSlice";

interface Props {
  children: ReactChild;
}

export default function Layout({ children }: Props) {
  const dispatch = useAppDispatch();

  //회원정보는 항상 store에 저장하도록
  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      const parsedInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
      dispatch(fetchSuccess(parsedInfo));
    }
  }, []);

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
