"use client";

import styles from "@/components/ui/Comm/Comm.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

function Comm({ img, name, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={styles.comm__container}
    >
      <div className={styles.comm}>
        <figure className={styles.img__wrapper} onClick={toggle}>
          {img ? (
            <Image
              src={img}
              width={400}
              height={400}
              className={styles.img}
              alt={name}
            />
          ) : (
            <></>
          )}
        </figure>

        <div className={isOpen ? styles.open : styles.collapse}>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default Comm;
