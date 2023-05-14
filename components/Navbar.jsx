'use client'
import Link from "next/link";
import styles from '../app/navbar.module.css';
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Coursegrabber</div>
      <div className={styles.links}>
      {/* <Link className={router.pathname==='/'? styles.activeLink : styles.link} href="/">Home</Link> */}
      <Link className={styles.link} href="/">Home</Link>
      {/* <Link className={router.pathname==='/course'? styles.activeLink : styles.link} href="/course">Course</Link> */}
      <Link className={styles.link} href="/course">Course</Link>
      </div>
    </div>
  );
}
