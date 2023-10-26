import styles from "@/app/alumni/alumni-components/AlumniLanding.module.css";

function AlumniLanding() {
  return (
    <div className={styles.landing}>
      <h1 className={styles.title}>MJ Laolumni</h1>
      <div className={styles.placeholder}>
        <div className={styles.placeholder__text}></div>
        This page is still under development, please check again soon!
      </div>
    </div>
  );
}

export default AlumniLanding;
