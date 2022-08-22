// import { useWeb3React } from "@web3-react/core";
import { ethers } from 'ethers';

import { useEffect, useState } from "react";

import HeroCard from "../components/heroes/HeroCard";
import {HeroesAbi, HeroesContracts} from '../HeroesAbi'

import styles from "../styles/TheHeroes.module.css"


export default function Presale() {
  

 

  const getHeroesJson = async () => {
    const heroesJson = []
    for(let heroContract of HeroesContracts){
  
      const provider = new ethers.providers.JsonRpcProvider("https://rpc-mainnet.maticvigil.com");
      const contract = new ethers.Contract(
      heroContract,
      HeroesAbi,
      provider
      )
  
      const tokenURI = await contract.tokenURI(1)
  
      const token = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/")
      const response = await fetch(token);
      const json = await response.json();
      console.log(json)
      heroesJson.push(json)
    }
    return heroesJson
  }

  const [heroes, setHeroes] = useState([])
  const [fetchingHeroes, setFetchingHeroes] = useState(false)

  useEffect(() => {
    setFetchingHeroes(true)
    const heroesJson = getHeroesJson()
    heroesJson.then(items => {
      setHeroes(items)
      setFetchingHeroes(false)
    })
    
  },[])

 

    return (
      <div className={styles.container}>
        <h1 className={styles.note}>NOTE: The Heroes NFTs Are Not For Sale And There Is No Set Date Until The Beta Launch Of The Game.</h1>
        <h1 className={styles.description}>The heroes of blockchain are the main characters in the game, you need at least 1 character to start playing(along with a Portal NFT.) and of course you can collect as many heroes as you can, Each hero belongs to a specific region, for example Linda belongs to Kusama while Clark is from Solana.</h1>
        <div className={styles.cards}>
        {!fetchingHeroes ? heroes.map(hero => <HeroCard key={hero.name} name={hero.name} attributes={hero.attributes} image={hero.image}/>) : "Loading Data"}
        </div>
        
        
      
      </div>
      
    )
  }

