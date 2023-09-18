import styles from "@/app/events/events-components/EventsLanding.module.css";
import Image from "next/image";

function EventsLanding({ title, text, backgroundImage }) {
  // const style = {
  //   backgroundImage: `linear-gradient(
  //     to bottom,
  //     rgba(0, 0, 0, 0.6),
  //     rgba(0, 0, 0, 0)
  //   ), url(${backgroundImage})`,
  // };

  return (
    <div className={styles.landing}>
      {/* <Image
        src={backgroundImage}
        width={"100%"}
        height={"100%"}
        className={styles.img}
        alt={title}
      /> */}
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.text}>{text}</div>
    </div>
  );
}

export default EventsLanding;
