import styles from "@/components/ui/Comm.module.css";
import Image from "next/image";

function Comm({ img, name, title }) {
  return (
    <div className={styles.comm__container}>
      <div className={styles.comm}>
        <figure className={styles.img__wrapper}>
          {img ? (
            <Image src={img} width={80} height={80} className={styles.img} />
          ) : (
            <></>
          )}
        </figure>

        <div className="description">
          <div className={styles.comm__name}>{name}</div>
          <div className={styles.comm__title}>{title}</div>
        </div>
      </div>
    </div>
  );
}

export default Comm;
