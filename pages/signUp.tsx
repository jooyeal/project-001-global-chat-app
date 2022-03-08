import React, { ChangeEvent, useState } from 'react'
import styles from '../styles/pages/Signup.module.css'
import axios from 'axios'

type Props = {}



const signUp = (props: Props) => {
 
    return (
        <div className={styles.compBox}>
          <div className={styles.formBox}>
            <div className={styles.formTitle}>
              계정 만들기
            </div>
            <div className={styles.formEmail}>
              <div className={styles.formLabel}>
                E-mail
              </div>
              <input className={styles.inputBox} type="text" />
            </div>
            <div className={styles.formUser}>
              <div className={styles.formLabel}>
                UserName
              </div>
              <input className={styles.inputBox} type="text" />
            </div>
            <div className={styles.formPw}>
              <div className={styles.formLabel}>
                Password
              </div>
              <input className={styles.inputBox} type="password" />
            </div>
            <div className={styles.formPw}>
              <div className={styles.formLabel}>
                Confirm Password
              </div>
              <input className={styles.inputBox} type="password" />
            </div>
            <div className={styles.formBirth}>
              <div className={styles.birthBox}>
                <div className={styles.formLabel}>
                  Birth
                </div>
                <div className={styles.yymmddBox}>
                  <span className={styles.selectYear}>
                    <select id="yyyy">
                      <option>YEAR</option>
                      <option value="1990">1990</option>
                    </select>
                  </span>
                  <span className={styles.selectMonth}>
                    <select id="mm">
                      <option>MONTH</option>
                    </select>
                  </span>
                  <span className={styles.selectDay}>
                    <select id="dd">
                      <option>DAY</option>
                    </select>
                  </span>
                </div>
              </div>
            </div>
            <button>SIGN UP</button>
          </div>
        </div>
  )
}

export default signUp;