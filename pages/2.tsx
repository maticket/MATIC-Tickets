import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { Web3Button } from "@thirdweb-dev/react";
import { nft2} from "../consts/contractAddresses";
import Link from "next/link";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container1}>
      <br>
      </br>
      
      <br/>
      <br/>
      
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox3}
          
        >
          <h1 className={styles.h1}>Demo Ticket</h1>
          <h2 className={styles.selectBoxTitle2}>Description</h2>
          <h3 className={styles.selectBoxTitle}>This Is A Sample Event So You Can See How Your Actual Event Will Look</h3>
          <br/>
          <h2 className={styles.selectBoxTitle2}>Instructions</h2>
          <h3 className={styles.selectBoxTitle}>Select The Event You Want, Then Carefully Read The Instructions.</h3>
<h3 className={styles.selectBoxTitle}> Learn Where The Event Is Being Held And How To Get There.</h3>
<h3 className={styles.selectBoxTitle}> Mint The Ticket And Wait For The Event Date.</h3>
<h3 className={styles.selectBoxTitle}> when You Arrive At The Event, You’ll Find The Sponsor Waiting For You.</h3>

         

        </div>

        <div 
          className={styles.optionSelectBox4}
        >
          <Image src="/pic/88.jpeg" alt="drop" width={500} height={300} />
          <br/>
         
          <Web3Button
            connectWallet={{
            modalSize: "compact",
            modalTitleIconUrl: "",
          }}
        contractAddress={nft2}
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          alert("NFT minted!");
          
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        Mint ticket
      </Web3Button>
        </div>
       

        <div
          className={styles.optionSelectBox5}
        >
          <h2 className={styles.selectBoxTitle}>Price</h2>
          <div className={styles.link}>
      <Link href="https://maticket.gitbook.io/home/" className={styles.link}>
      Documents
            </Link>
            </div>
        </div>
        <div
          className={styles.optionSelectBox5}
        >
          <h2 className={styles.selectBoxTitle}>Price</h2>
         
      <Link href="https://maticket.gitbook.io/home/" className={styles.link}>
      Documents
            </Link>
        </div>
        <div
          className={styles.optionSelectBox5}
        >
          <h2 className={styles.selectBoxTitle}>Price</h2>
         
      <Link href="https://maticket.gitbook.io/home/" className={styles.link}>
      Documents
            </Link>
        </div>
        <div
          className={styles.optionSelectBox5}
        >
          <h2 className={styles.selectBoxTitle}>Price</h2>
         
      <Link href="https://maticket.gitbook.io/home/" className={styles.link}>
      Documents
            </Link>
        </div>
        <div
          className={styles.optionSelectBox5}
        >
          <h2 className={styles.selectBoxTitle}>Price</h2>
         
      <Link href="https://maticket.gitbook.io/home/" className={styles.link}>
      Documents
            </Link>
        </div>
        <div
          className={styles.optionSelectBox5}
        >
          <h2 className={styles.selectBoxTitle}>Price</h2>
         
      <Link href="https://maticket.gitbook.io/home/" className={styles.link}>
      Documents
            </Link>
        </div>
        

        
      </div>
      
      <br/>
      
      
      <div className={styles.link}>
      <Link href="https://maticket.gitbook.io/home/" className={styles.link}>
      Documents
            </Link>
            </div>
          
      <h2 className={styles.selectBoxTitle}>maticket © 2024</h2>
    </div>
    
  );
};

export default Home;