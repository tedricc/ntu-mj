"use client";

import styles from "@/app/events/events-components/EventsLanding.module.css";
import { motion } from "framer-motion";

function EventsLanding({ title, text, backgroundImage }) {
  const style = {
    backgroundImage: `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1), 
      rgba(0, 0, 0, 0.6),   
      rgba(0, 0, 0, 0.1)  
    ), url(${backgroundImage})`,
  };

  return (
    <motion.div
      className={styles.landing}
      style={style}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className={styles.description}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.text}>{text}</div>
      </div>
    </motion.div>
  );
}

export default EventsLanding;
