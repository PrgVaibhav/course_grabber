import styles from "@/styles/loader.module.css";
const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader_inner}></div>
    </div>
  );
};

export default Loader;
