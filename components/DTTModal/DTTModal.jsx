"use client";

import styles from "@/components/DTTModal/DTTModal.module.css";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

function DTTModal({ toggleModal, modalTitle, modalVideo }) {
  function preventClick(event) {
    event.stopPropagation();
  }

  return (
    <>
      <motion.div
        className={styles.wrapper}
        onClick={toggleModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className={styles.modal}
          onClick={(event) => preventClick(event)}
          initial={{ scale: 0.5, translateX: "-50%", translateY: "-50%" }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.2,
          }}
        >
          <div className={styles.close__btn} onClick={toggleModal}>
            <FaTimes />
          </div>
          <div className={styles.title}>{modalTitle}</div>
          <div className={styles.video}>
            <iframe
              width="560"
              height="315"
              src={modalVideo}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style={{
                // maxWidth: "800px",
                // maxHeight: "400px",
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
          <div className="modal__description"></div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default DTTModal;
