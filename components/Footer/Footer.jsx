import styles from './page.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.logoBox}>
          <h3 className={styles.logo}>Course Grabber</h3>
        </div>
        <div className={styles.footerDetails}>
          <a className={styles.details}>Home</a>
          <a className={styles.details}>About us</a>
          <a className={styles.details}>FAQs</a>
          <a className={styles.details}>How it works?</a>
          <a className={styles.details}>Privacy Policy</a>
        </div>
        <div className={styles.socialHandles}>
          <div><h2>Contributers</h2></div>
          <a href="https://github.com/Varghab">Varghav <i class="fa-brands fa-github"></i></a>
          <a href="https://github.com/PrgVaibhav">Vaibhav <i class="fa-brands fa-github"></i></a>
          <a href="https://github.com/scragonrex">Abhishek <i class="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
  );
}
