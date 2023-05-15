"use client";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
export default function Navbar() {

  const handleClose = () => {
    const element = document.getElementById('sidebar');
    // const opa = document.getElementById('opacity');
    console.log(element);
    element.style.width = '0vw';
    // opa.style.width = '0vw'
  }

  const handleOpen = () => {
    const element = document.getElementById('sidebar');
    // const opa = document.getElementById('opacity');
    // opa.style.width = '100vw'
    element.style.width = '40vw';
  }

  return (
    <>
    
      <div id='sidebar' className={styles.sidebar}>
        <div className={styles.closeIcon}>
          <i onClick={handleClose} style={{color:'#FF9800', cursor:'pointer'}} className="fa-regular fa-2x fa-rectangle-xmark"></i>
        </div>
        <ul>
          <hr/>
          <li><Link href="/">Home</Link></li><hr/>
          <li><Link href="/course">Course</Link></li><hr/>
        </ul>
      </div>
    <div className={styles.navbar}>

      <div ><Link style={{ textDecoration: 'none' }} className={styles.logo} href='/'>Course Grabber</Link></div>
      <div className={styles.links}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/course">
          Course
        </Link>
      </div>
      <div className={styles.menuIcon}>
      <i onClick={handleOpen} className="fa-solid fa-2x fa-bars"></i>
        </div>
    </div>
    
    </>
  );
}
