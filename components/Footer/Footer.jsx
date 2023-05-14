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
          <img src='/icon-facebook.svg'></img>
          <img src='/icon-instagram.svg'></img>
          <img src='/icon-twitter.svg'></img>
        </div>
      </div>
    </div>
  );
}
