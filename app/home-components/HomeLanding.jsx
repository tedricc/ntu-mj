import styles from "@/app/home-components/HomeLanding.module.css";

function HomeLanding() {
  return (
    <div className={styles.landing}>
      <video
        autoPlay
        loop
        muted
        className={styles.video}
        playsInline
        poster="/home-poster.jpg"
      >
        <source src="/home-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className={styles.title}>We are MJ</h1>
    </div>
  );
}

export default HomeLanding;
