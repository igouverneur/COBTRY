
import Interface from '../components/home/Interface'

import AboutGame from '../components/home/AboutGame'
import AuthenticationSection from '../components/home/AuthenticationSection'
import HeroesSection from '../components/home/HeroesSection'
import PoweredBySection from '../components/home/PoweredBySection'
import styles from '../styles/Home.module.css'



export default function Home() {
  

  return (
    
    <div className={styles.container}>
      
      <Interface/>
      
      <AuthenticationSection/>
      <HeroesSection/>
      <AboutGame/>
      <PoweredBySection/>
      
    </div>
  )
}

Home.displayName = "Home"