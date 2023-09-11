import styles from "@/app/home-components/HomeLanding.module.css";

function HomeLanding() {
  return (
    <div className={styles.landing}>
      <h1 className={styles.title}>Welcome to NTU MJ</h1>
      <div className={styles.text}>
        Est. 1993 <br />
        Courage | Ownership | Respect | Evolve
      </div>
    </div>
  );
}

export default HomeLanding;
