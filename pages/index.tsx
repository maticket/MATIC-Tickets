import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  const router = useRouter();

  return (

    <div className={styles.container}>
      
      <div className={styles.nftBoxGrid}>
      
      <div 
          className={styles.optionSelectBox3}
        >
          <Image src="/pic/ban.png" alt="drop" width={1000} height={310} />
          
        </div>
        <div 
          className={styles.optionSelectBox4}
          role="button"
          onClick={() => router.push("/1")}
        >
         <Image src="/pic/88.jpeg" alt="token" width={500} height={265} />
         <br/>
          <h2 className={styles.selectBoxTitle}>Demo Ticket</h2>
         
        
        </div>

      </div>
     
      <h1 className={styles.h1}>Categories</h1>
      <br/>
      <div className={styles.nftBoxGrid}>
     
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/fashion")}
        >
          
          <Image src="/icons/Fashion.png" alt="drop" width={100} height={100} />
          <h2 className={styles.selectBoxTitle}>Fashion</h2>
          <br/>
        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/music")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/Music.png" alt="token" width={100} height={100} />
          <h2 className={styles.selectBoxTitle}>Music</h2>
          <br/>

        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/wedding")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/Wedding.png" alt="token" width={100} height={100} />
          <h2 className={styles.selectBoxTitle}>Wedding</h2>
          <br/>

        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/charities")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/Charities.png" alt="drop" width={100} height={100} />
          <h2 className={styles.selectBoxTitle}>Charities</h2>
          <br/>

        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/sports")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/Sports.png" alt="drop" width={100} height={100} />
          <h2 className={styles.selectBoxTitle}>Sports</h2>
          <br/>

        </div>
      </div>
      <br/>
      <br/>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/cinema")}
        >
          
          <Image src="/icons/Cinema.png" alt="drop" width={100} height={100} />
          <h2 className={styles.selectBoxTitle}>Cinema</h2>
          <br/>

        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/nightlife")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/Nightlife.png" alt="token" width={100} height={100} />
          <h2 className={styles.selectBoxTitle}>Nightlife</h2>
          <br/>
          
        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/festivals")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/Festivals.png" alt="token" width={100} height={100} />
          <h2 className={styles.selectBoxTitle}>Festivals</h2>
          <br/>

        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/membership")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/Membership.png" alt="drop" width={100} height={100} />
          <h2 className={styles.selectBoxTitle}>Membership</h2>
          <br/>

        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/business")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/Business.png" alt="drop" width={100} height={100} />
          <h2 className={styles.selectBoxTitle}>Business</h2>
          <br/>
        </div>
        <div className={styles.nftBoxGrid2}>
          <h1 className={styles.h1}>Explorer</h1>
        </div>

        <div
          className={styles.optionSelectBox2}
          role="button"
          onClick={() => router.push("/1")}
        >
        <Image src="/pic/88.jpeg" alt="token" width={265} height={200} />
          <h2 className={styles.selectBoxTitle}>Demo Ticket</h2>
        </div>
        

        <div 
          className={styles.optionSelectBox2}
          role="button"
          onClick={() => router.push("/2")}
        >
         <Image src="/pic/88.jpeg" alt="token" width={265} height={200} />
          <h2 className={styles.selectBoxTitle}>Demo Ticket</h2>
        
        </div>
        
        <div 
          className={styles.optionSelectBox2}
          role="button"
          onClick={() => router.push("/2")}
        >
         <Image src="/pic/88.jpeg" alt="token" width={265} height={200} />
          <h2 className={styles.selectBoxTitle}>Demo Ticket</h2>
        
        </div>
        <div 
          className={styles.optionSelectBox2}
          role="button"
          onClick={() => router.push("/2")}
        >
         <Image src="/pic/88.jpeg" alt="token" width={265} height={200} />
          <h2 className={styles.selectBoxTitle}>Demo Ticket</h2>
        
        </div>
        <div 
          className={styles.optionSelectBox2}
          role="button"
          onClick={() => router.push("/2")}
        >
         <Image src="/pic/88.jpeg" alt="token" width={265} height={200} />
          <h2 className={styles.selectBoxTitle}>Demo Ticket</h2>
        
        </div>
        <div
          className={styles.optionSelectBox2}
          role="button"
          onClick={() => router.push("/1")}
        >
        <Image src="/pic/88.jpeg" alt="token" width={265} height={200} />
          <h2 className={styles.selectBoxTitle}>Demo Ticket</h2>
        </div>
        <div
          className={styles.optionSelectBox2}
          role="button"
          onClick={() => router.push("/1")}
        >
        <Image src="/pic/88.jpeg" alt="token" width={265} height={200} />
          <h2 className={styles.selectBoxTitle}>Demo Ticket</h2>
        </div>
        <div
          className={styles.optionSelectBox2}
          role="button"
          onClick={() => router.push("/1")}
        >
        <Image src="/pic/88.jpeg" alt="token" width={265} height={200} />
          <h2 className={styles.selectBoxTitle}>Demo Ticket</h2>
        </div>
        <div
          className={styles.optionSelectBox2}
          role="button"
          onClick={() => router.push("/1")}
        >
        <Image src="/pic/88.jpeg" alt="token" width={265} height={200} />
          <h2 className={styles.selectBoxTitle}>Demo Ticket</h2>
        </div>
        <div
          className={styles.optionSelectBox2}
          role="button"
          onClick={() => router.push("/1")}
        >
        <Image src="/pic/88.jpeg" alt="token" width={265} height={200} />
          <h2 className={styles.selectBoxTitle}>Demo Ticket</h2>
        </div>
      
      </div>
      <br/>
      <br/>
      <br/>
      <div className={styles.link}>
      <Link href="https://maticket.gitbook.io/home/" className={styles.link}>
      Documents
            </Link>
            </div>
            <br/>
      <h2 className={styles.selectBoxTitle}>maticket © 2024</h2>
      <br/>
    </div>
    
  );
};

export default Home;