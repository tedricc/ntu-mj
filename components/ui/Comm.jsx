import styles from "@/components/ui/Comm.module.css";
import Image from "next/image";

function Comm({ pic, name, title }) {
  return (
    <div className={styles.comm}>
      <div className={styles.comm__container}>
        <figure className={styles.pic__wrapper}>
          {pic ? (
            <Image
              src={pic}
              width={80}
              height={80}
              className={styles.pic}
            />
          ) : (
            <></>
          )}
        </figure>

        <div className="description">
          <div className="name">{name}</div>
          <div className="title">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default Comm;
