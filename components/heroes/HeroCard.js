import styles from "./HeroCard.module.css";
import Image from "next/image";


export default function HeroCard({name, attributes, image}) {
    return (
        
        <div className={styles.card} style={{backgroundImage: `url("${image}")`} }>
            <div className={styles.top}>
            <h2 className={styles.name}>{name}</h2>
            <h3 className={styles.description}>{attributes[0].value}</h3>
            </div>
            
            <div className={styles.bottom}>
            <button>Mint</button>
            <a target="_blank" rel="noreferrer" href={`https://opensea.io/collection/${name.toLowerCase()}-call-of-blockchain`}><Image src="/svgs/Logomark-Transparent White.png" height="50px" width="50px"/></a>
                                                                                        {/* -call-of-blockchain */}
            </div>
            
        </div>
        
        
        
          
      
    );
  }