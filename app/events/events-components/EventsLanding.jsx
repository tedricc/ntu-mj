"use client";

import styles from "@/app/events/events-components/EventsLanding.module.css";
import SkeletonLoading from "@/components/ui/SkeletonLoading/SkeletonLoading";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function EventsLanding({
  title,
  text,
  backgroundImage,
  toggleModal,
  hasModal,
  video,
}) {
  const [loading, setLoading] = useState(true);

  function handleModal() {
    if (hasModal) {
      toggleModal(title, video);
    }
  }

  return (
    <>
      {loading && <SkeletonLoading />}

      <motion.div
        className={styles.landing}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        // viewport={{ once: true }}
        onClick={handleModal}
      >
        <div className={styles.gradient}></div>
        <Image
          width={1920}
          height={1080}
          src={backgroundImage}
          style={{ width: "100vw", height: "100vh" }}
          alt=""
          className={styles.background}
          priority
          onLoadingComplete={(event) => setLoading(false)}
        />
        <div className={styles.description}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.text}>{text}</div>
        </div>
      </motion.div>
    </>
  );
}

export default EventsLanding;
