import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import styles from "../../../styles/pages/home/Post.module.css";

interface Props {}

export default function Post({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image
          className={styles.profile_image}
          src="/assets/default_user.png"
          width={37}
          height={37}
          layout="fixed"
        />
        <p>username</p>
      </div>
      <div className={styles.main}>
        <div className={styles.desc}>
          oisjeiofjisoefkldslfkdsjkflskdlfjldsjfklsjdklfjskldjfklskldfjklsdjklfsjdklwiefjoewfjowejfiowejfioewjiofjewoifjewiofjweiofjewiofjio
        </div>
        <Image src="/assets/default_user.png" width={500} height={500} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.post_tool}>
          <FontAwesomeIcon icon={faHeart} size="2x" />
          <FontAwesomeIcon icon={faComment} size="2x" />
        </div>
        <div className={styles.comments}>
          <div className={styles.comment}>
            <p className={styles.comment_user}>username</p>
            <p className={styles.comment_desc}>
              descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
              descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
