import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faComment,
  faHouse,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/components/common/Drawer.module.css";
import Link from "next/link";

interface Props {}

export default function Drawer({}: Props) {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>
          <div className={styles.list}>
            <FontAwesomeIcon icon={faHouse} size="lg" />
          </div>
        </a>
      </Link>
      <Link href="/personalChat">
        <a>
          <div className={styles.list}>
            <FontAwesomeIcon icon={faComment} size="lg" />
          </div>
        </a>
      </Link>
      <Link href="/community">
        <a>
          <div className={styles.list}>
            <FontAwesomeIcon icon={faUserGroup} size="lg" />
          </div>
        </a>
      </Link>
    </div>
  );
}
