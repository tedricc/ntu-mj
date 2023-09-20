"use client";

import styles from "@/components/ui/Comm/Comm.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

function Comm({ img, name, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className={styles.comm__container}
    >
      <div className={styles.comm}>
        <figure className={styles.img__wrapper}>
          {img ? (
            <Image
              src={img}
              width={100}
              height={100}
              className={styles.img}
              alt={name}
            />
          ) : (
            <></>
          )}
        </figure>

        <div className="description">
          <div className={styles.comm__name}>{name}</div>
          <div className={styles.comm__title}>{title}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default Comm;
