import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Music</h1>
      <br/>
      <br/>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox4}
          role="button"
          onClick={() => router.push("/1")}
        >
        <Image src="/pic/88.jpeg" alt="token" width={495} height={200} />
          <h2 className={styles.selectBoxTitle}>Demo Ticket</h2>
        </div>
        <div 
          className={styles.optionSelectBox4}
          role="button"
          onClick={() => router.push("/2")}
        >
         <Image src="/pic/88.jpeg" alt="token" width={495} height={200} />
          <h2 className={styles.selectBoxTitle}>Demo Ticket</h2>
        </div>
        <div 
          className={styles.optionSelectBox4}
          role="button"
          onClick={() => router.push("/2")}
        >
         <Image src="/pic/88.jpeg" alt="token" width={495} height={200} />
          <h2 className={styles.selectBoxTitle}>Demo Ticket</h2>
        </div>
        <div 
          className={styles.optionSelectBox4}
          role="button"
          onClick={() => router.push("/2")}
        >
         <Image src="/pic/88.jpeg" alt="token" width={495} height={200} />
          <h2 className={styles.selectBoxTitle}>Demo Ticket</h2>
        </div>
        <div 
          className={styles.optionSelectBox4}
          role="button"
          onClick={() => router.push("/2")}
        >
         <Image src="/pic/88.jpeg" alt="token" width={495} height={200} />
          <h2 className={styles.selectBoxTitle}>Demo Ticket</h2>
        </div>
        <div 
          className={styles.optionSelectBox4}
          role="button"
          onClick={() => router.push("/2")}
        >
         <Image src="/pic/88.jpeg" alt="token" width={495} height={200} />
          <h2 className={styles.selectBoxTitle}>Demo Ticket</h2>
        </div>
      </div>
      <br/>
      <br/>

      <div className={styles.nftBoxGrid}>
        </div>
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