import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="" 
            />
          </Link>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/icons/h.png"
              width={50}
              height={50}
              alt="" 
            />
          </Link>

          <div className={styles.navMiddle}>

          <Link href="/fashion" className={styles.link}>
            Fashion
            </Link>
            <Link href="/music" className={styles.link}>
            Music
            </Link>
            <Link href="/wedding" className={styles.link}>
            Wedding
            </Link>
            <Link href="/charities" className={styles.link}>
            Charities
            </Link>
            <Link href="/sports" className={styles.link}>
            Sports
            </Link>
            <Link href="/cinema" className={styles.link}>
            Cinema
            </Link>
            <Link href="/nightlife" className={styles.link}>
            Nightlife
            </Link>
            <Link href="/festivals" className={styles.link}>
            Festivals
            </Link>
            <Link href="/membership" className={styles.link}>
            Membership
            </Link>
            <Link href="/business" className={styles.link}>
            Business
            </Link>

            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfUKi11WLMwVXlc1UhPhEjj7uHr9MKyHV5E39isqlRddsk3XA/viewform" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/icons/add.png"
              width={40}
              height={40}
              alt="" 
            />
          </Link>
          
          </div>
        </div>

        <div className={styles.navRight}>
        
        <div className={styles.navLeft}>
          <Link href="https://twitter.com/MaticTickets" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/icons/tw.png"
              width={45}
              height={45}
              alt="" 
            />
          </Link>
          <Link href="https://t.me/maticket" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/icons/tel.png"
              width={50}
              height={50}
              alt="" 
            />
          </Link>
          <Link href="https://www.youtube.com/@maticket" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/icons/y.png"
              width={50}
              height={50}
              alt="" 
            />
          </Link>
          <Link href="https://www.linkedin.com/company/maticket" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/icons/in.png"
              width={50}
              height={50}
              alt="" 
            />
          </Link>
          </div>
          <div 
          className={styles.optionSelectBox3}
        >
          
         <ConnectWallet
         theme={"dark"}
         btnTitle={"Connect Wallet"}
         modalTitle={""}
         modalSize={"wide"}
         welcomeScreen={{
           title: "MATICKET",
           subtitle: "NFT Tickets Platform",
           img: {
             src: "https://i.imgur.com/CwG7uYq.png",
             width: 150,
             height: 150,
           },
         }}
         modalTitleIconUrl={
           "https://i.imgur.com/CwG7uYq.png"
         }
       />
        </div>
        </div>
        
      </nav>
    </div>
  );
}
