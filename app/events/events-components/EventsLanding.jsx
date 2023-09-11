import styles from "@/app/events/events-components/EventsLanding.module.css";

function AboutLanding() {
  return (
    <div className={styles.landing}>
      <h1 className={styles.title}>Dancetitude 2023</h1>
      <div className={styles.text}>
        DANCETITUDE 2023: FAMILIAR STRANGERS is a culmination of the past,
        present and future, highlighting the struggles, slumps and breakthroughs
        members face through their journey of finding what dance means to them.
        Centered around the concept of unfolding oneself, join us as we
        reminisce on what was, celebrate what is, and look forward to what will
        be of MJ.
      </div>
    </div>
  );
}

export default AboutLanding;
