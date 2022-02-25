import React, { useState } from "react";
import styles from "../../styles/components/common/Navbar.module.css";
import cn from "classnames";
import { faUser, faBell, faMoon } from "@fortawesome/free-solid-svg-icons";
import IconButton from "./IconButton";
import TextField from "./TextField";
import Link from "next/link";

interface Props {}

export default function Navbar({}: Props) {
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
      </div>
    </div>
  );
}
