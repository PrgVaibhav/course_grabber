"use client";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Course Grabber</div>
      <div className={styles.links}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/course">
          Course
        </Link>
      </div>
    </div>
  );
}
