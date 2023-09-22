import styles from "@/app/home-components/HomeLanding.module.css";

function HomeLanding({ poster, video, title }) {
  return (
    <div className={styles.landing}>
      <div className={styles.video__wrapper}>
        <video
          autoPlay
          loop
          muted
          className={styles.video}
          playsInline
          poster={poster}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default HomeLanding;
