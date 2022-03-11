import React, { ChangeEvent, useState } from "react";
import styles from "../styles/pages/Login.module.css";
import { postLogin } from "../service/authApi";
import { useAppDispatch } from "../hooks/storeHook";

type Props = {};

const login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const dispatch = useAppDispatch();

  const onChangepw = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const loginBtn = async () => {
    dispatch(postLogin(email, pw));
  };

  return (
    <div className={styles.compBox}>
      <div className={styles.formBox}>
        <div className={styles.titleText}>
          <div className={styles.loginBox}>
            (대충 로그인 페이지라는 문구)
            <div className={styles.compLabel}>
              <div className={styles.labelText}>e-mail</div>
              {/* <TextField value={email} onChange={onChangeEmail}/> */}
              <input
                className={styles.textBox}
                type="text"
                value={email}
                onChange={onChangeEmail}
              />
            </div>
            <div className={styles.compLabel}>
              <div className={styles.labelText}>pw</div>
              {/* <TextField type ="password" value={pw} onChange={onChangepw}/> */}
              <input
                className={styles.textBox}
                type="password"
                value={pw}
                onChange={onChangepw}
              />
            </div>
            <button className={styles.btn} onClick={loginBtn}>
              Login
            </button>
          </div>
        </div>
        <div className={styles.signUpBox}>
          <div className={styles.signUpText}>(대충 가입하라는 문구)</div>
          <div className={styles.signUpBtn}>
            <button>SignUp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
