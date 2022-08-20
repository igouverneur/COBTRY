import styles from "./Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import { BsTwitter, BsTelegram, BsFacebook } from 'react-icons/bs';
import { FaDiscord} from 'react-icons/fa';

import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";


const injected = new InjectedConnector();


export default function Nav() {
  const {
    activate,
    account,
    connector,
    active,
    library: provider,
  } = useWeb3React();
  const connectHandler = async () => {
    try {
      if(!active){
        await activate(injected);
      }else{
        
      }
    } catch (error) {
      
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.splash}><Image src="/svgs/second_png.png" width="250px" height="250px" /></div>
      <div className={styles.logo}>
        <Link href="/">
          <a><Image src="/images/logopic.png" width="150px" height="120px"/></a>
        </Link>
      </div>
      <div className={styles.nav}>
        <ul>
          <li>
            <Link href="/the-portal-nft">Portal NFT</Link>
          </li>
          <li>
            <Link href="/COBT">$COBT</Link>
          </li>
          <li>
            <Link href="/the-heroes">Heroes</Link>
          </li>
          <li>
            <Link href="/market-place">Marketplace</Link>
          </li>
          <li>
            <Link href="/careers">Careers</Link>
          </li>
        </ul>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.icons}>
          <a href="https://twitter.com/cob_mmorpg" target="_blank" rel="noreferrer" className={styles.icon}><BsTwitter size={22} /></a>
          <a href="https://t.me/callofblockchain" target="_blank" rel="noreferrer" className={styles.icon}><BsTelegram size={22} /></a>
          <a href="https://discord.gg/QYMhjrSa62" target="_blank" rel="noreferrer" className={styles.icon}><FaDiscord size={22} /></a>
          <a href="https://www.facebook.com/callofblockchain/" target="_blank" rel="noreferrer" className={styles.icon}><BsFacebook size={22} /></a>
        </div>
        <div className={styles.connect}>
        <button onClick={connectHandler}>
          {account
            ? account.substring(0, 5) + "..." + account.substring(37, 42)
            : "Connect"}
        </button>
        </div>
      </div>
      
    </div>
  );
}


