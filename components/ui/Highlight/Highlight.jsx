import styles from "@/components/ui/Highlight/Highlight.module.css";
import Image from "next/image";

function Highlight({ title, image }) {
  return (
    <>
      <div className={styles.highlight}>
        <Image
          src={image}
          width={500}
          height={500}
          className={styles.img}
        />
        <div className={styles.highlight__container}>
          <div className={styles.highlight__text}>{title}</div>
        </div>
      </div>
    </>
  );
}

export default Highlight;
