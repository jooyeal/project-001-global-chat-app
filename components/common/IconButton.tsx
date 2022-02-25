import React, { ButtonHTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import styles from "../../styles/components/common/IconButton.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconDefinition;
  size: SizeProp;
}

export default function IconButton({ icon, size, ...props }: Props) {
  return (
    <button className={styles.container} {...props}>
      <FontAwesomeIcon icon={icon} size={size} />
    </button>
  );
}
