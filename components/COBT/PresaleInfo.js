import styles from "./PresaleInfo.module.css";

export default function PresaleInfo() {
    return (
      <div className={styles.container}>
        <div className={styles.qna}>
            <h1 className={styles.q}>Token Name:</h1>
            <h2 className={styles.a}>Call Of Blockchain Token</h2>
        </div>
        <div className={styles.qna}>
            <h1 className={styles.q}>Token Symbol:</h1>
            <h2 className={styles.a}>$COBT</h2>
        </div>
        <div className={styles.qna}>
            <h1 className={styles.q}>Token Decimals:</h1>
            <h2 className={styles.a}>18</h2>
        </div>
        <div className={styles.qna}>
            <h1 className={styles.q}>Token Address:</h1>
            <a  className={styles.a}href="">0xFF4E741572Fa00a93949aD571Cb2F8D6A9E1dc33</a>
        </div>
        <div className={styles.qna}>
            <h1 className={styles.q}>Total Supply:</h1>
            <h2 className={styles.a}>100,000,000</h2>
        </div>
        <div className={styles.qna}>
            <h1 className={styles.q}>Tokens For Presale:</h1>
            <h2 className={styles.a}>24,000,000</h2>
        </div>
        <div className={styles.qna}>
            <h1 className={styles.q}>Tokens For Liquiditys:</h1>
            <h2 className={styles.a}>16,000,000</h2>
        </div>
        <div className={styles.qna}>
            <h1 className={styles.q}>Presale Rate:</h1>
            <h2 className={styles.a}>1 BNB = 24,000 $COBT</h2>
        </div>
        <div className={styles.qna}>
            <h1 className={styles.q}>Listing Rate:</h1>
            <h2 className={styles.a}>1 BNB = 22,800 $COBT</h2>
        </div>
        <div className={styles.qna}>
            <h1 className={styles.q}>Hard Cap:</h1>
            <h2 className={styles.a}>1000 BNB</h2>
        </div>
        <div className={styles.qna}>
            <h1 className={styles.q}>Unsold Tokens:</h1>
            <h2 className={styles.a}>Burn</h2>
        </div>
        <div className={styles.qna}>
            <h1 className={styles.q}>Presale Maximum Buy:</h1>
            <h2 className={styles.a}>3 BNB</h2>
        </div>
        <div className={styles.qna}>
            <h1 className={styles.q}>Presale Minimum Buy:</h1>
            <h2 className={styles.a}>No Minimum</h2>
        </div>
      </div>
    );
  }