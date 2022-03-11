import React, { useState } from "react";
import styles from "../../styles/components/common/Navbar.module.css";
import cn from "classnames";
import { faUser, faBell, faMoon } from "@fortawesome/free-solid-svg-icons";
import IconButton from "./IconButton";
import TextField from "./TextField";
import Link from "next/link";
import { removeAuthCookie } from "../../utils/cookieHandler";
import { useRouter } from "next/router";

interface Props {}

export default function Navbar({}: Props) {
  const router = useRouter();

  const onClickLogout = () => {
    removeAuthCookie();
    router.push("/login");
  };

  return (
    <div className={cn({ [styles.container]: true, [styles.white]: false })}>
      <div className={cn({ [styles.left]: true })}>
        <Link href="/">
          <a>Global Chat App</a>
        </Link>
      </div>
      <div className={cn({ [styles.center]: true })}>
        <TextField type="text" placeholder=" Search" />
      </div>
      <div className={cn({ [styles.right]: true })}>
        <IconButton icon={faMoon} size="lg" />
        <IconButton icon={faBell} size="lg" />
        <IconButton icon={faUser} size="lg" />
        <button
          className={cn({ [styles.logout]: true })}
          onClick={onClickLogout}
        >
          SIGNOUT
        </button>
      </div>
    </div>
  );
}
