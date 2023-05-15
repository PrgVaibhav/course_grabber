import Link from "next/link";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <section className={styles.header_container}>
      <div className={styles.header_wrapper}>
      <div className={styles.header_title}>
        <span className={styles.first_span}>Course</span>{" "}
        <span className={styles.second_span}>Grabber</span>
        <div className={styles.header_description}>
        <p>
          Course Grabber is a one-stop platform that provides free online
          courses from popular video sharing platforms such as YouTube and other
          sources.
        </p>
        <p>
          At Course Grabber, we believe in the power of education, and we're
          committed to making it accessible to everyone. Whether you're a
          student, professional, or simply someone who enjoys learning new
          things, Course Grabber has something for everyone.
        </p>
        <Link href="/course">Start Learning</Link>
      </div>
      </div>
      <div>
        <img src='/4320858.jpg' className={styles.headerImage}></img>
      </div>
      </div>
    </section>
  );
}
