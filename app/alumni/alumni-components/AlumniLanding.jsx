import styles from "@/app/alumni/alumni-components/AlumniLanding.module.css";
import Image from "next/image";
import Alumni from "@/public/alumni-placeholder.png";

function AlumniLanding() {
  return (
    <div className={styles.landing}>
      <h1>Our Favourite Alumni</h1>
      <figure className={styles.img__wrapper}>
        <Image src={Alumni} className={styles.img} />
      </figure>
    </div>
  );
}

export default AlumniLanding;
