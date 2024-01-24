import styles from "@/components/ui/Highlight/Highlight.module.css";
import Image from "next/image";

function Highlight({ title, image, link }) {
  return (
    <>
      <a className={styles.highlight} href={link} target="blank">
        <Image src={image} width={500} height={500} className={styles.img} />
        <div className={styles.highlight__container}>
          <div className={styles.highlight__text}>{title}</div>
        </div>
      </a>
    </>
  );
}

export default Highlight;
