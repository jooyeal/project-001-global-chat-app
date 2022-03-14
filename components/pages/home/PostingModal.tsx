import React, { MouseEventHandler, useRef } from "react";
import styles from "../../../styles/pages/home/PostingModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../../common/IconButton";

interface Props {
  open: boolean;
  close: () => void;
}

const PostingModal = (props: Props) => {
  const { open, close } = props;
  const ref = useRef(null);

  const onClickOutSide: MouseEventHandler = (e) => {
    if (ref.current === e.target) {
      close();
    }
  };

  const onClickClose = () => {
    close();
  };
  return (
    <>
      {open && (
        <div ref={ref} onClick={onClickOutSide} className={styles.container}>
          <div className={styles.postingBox}>
            <div className={styles.header}>
              <h3 className={styles.title}>POSTING</h3>
              <IconButton icon={faClose} size="lg" onClick={onClickClose} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostingModal;
