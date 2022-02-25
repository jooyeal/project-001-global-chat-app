import React, { InputHTMLAttributes } from "react";
import styles from "../../styles/components/common/TextField.module.css";
interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function TextField({ ...props }: Props) {
  return (
    <>
      <input className={styles.input} {...props} />
    </>
  );
}
