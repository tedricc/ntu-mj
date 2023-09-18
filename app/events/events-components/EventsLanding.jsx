import styles from "@/app/events/events-components/EventsLanding.module.css";

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
    <div className={styles.landing} style={style}>
      <div className={styles.description}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}

export default EventsLanding;
