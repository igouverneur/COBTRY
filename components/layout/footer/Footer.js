import styles from "./Footer.module.css";
import { BsTwitter, BsTelegram, BsFacebook } from 'react-icons/bs';
import { FaDiscord} from 'react-icons/fa';





export default function Footer() {
  
  
  return (
    <footer  className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.social}>
          <a href="https://twitter.com/cob_mmorpg" target="_blank" rel="noreferrer" className={styles.icon}><BsTwitter size={22} /></a>
          <a href="https://t.me/callofblockchain" target="_blank" rel="noreferrer" className={styles.icon}><BsTelegram size={22} /></a>
          <a href="https://discord.gg/QYMhjrSa62" target="_blank" rel="noreferrer" className={styles.icon}><FaDiscord size={22} /></a>
          <a href="https://www.facebook.com/callofblockchain/" target="_blank" rel="noreferrer" className={styles.icon}><BsFacebook size={22} /></a>
          </div>
          <div className={styles.contact}>
            <h2>contact@callofblockchain.com</h2>
            <h2>jobs@callofblockchain.com</h2>
            <h2>igou@callofblockchain.com</h2>
          </div>
        </div>
        <h4>Copyright © 2022. Call of Blockchain. All Rights Reserved.</h4>
    </footer>
  );
}


