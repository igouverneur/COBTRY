import {useContext } from 'react'
import CountDownTimerContext from "../../context/CountDownTimerContext";
import CountDownTimer from "../countDownTimer/CountDownTimer";

import styles from "./Interface.module.css";
import Nav from "../layout/header/Nav"

export default function Interface() {
 
  const {publicSaleRemainingTime} =
    useContext(CountDownTimerContext);

  

  let d = Math.floor(publicSaleRemainingTime / (3600 * 24));
  let h = Math.floor((publicSaleRemainingTime % (3600 * 24)) / 3600);
  let m = Math.floor((publicSaleRemainingTime % 3600) / 60);
  let s = Math.floor(publicSaleRemainingTime % 60);
  //TRY
  return (
    <div className={styles.container}>
      <Nav/>
        
      <div className={styles.intro}>
        <legend className={styles.coming}>Coming Soon</legend>
        <CountDownTimer d={d} h={h} m={m} s={s} />
        
        <a href="https://gleam.io/XQCSJ/call-of-blockchain-giveaway-and-whitelist-competition" target="_blank" rel="noreferrer">Join Whitelist</a>
      </div>
    </div>
  );
}
