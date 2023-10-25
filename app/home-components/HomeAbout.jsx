import styles from "@/app/home-components/HomeAbout.module.css";
import Highlight from "@/components/ui/Highlight/Highlight";
import Performances from "@/public/home-banner.jpg";
import CP from "@/public/home-poster.jpg";
import Battles from "@/public/meow.jpg";

function HomeAbout() {
  return (
    <div className="container">
      <div className="row">
        <div className={styles.title}>Welcome to MJ</div>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem
          sequi totam atque amet exercitationem, in expedita doloribus ipsum,
          quia perspiciatis quam, soluta id tenetur dolore obcaecati reiciendis.
          Animi, aliquid.
        </div>

        <div className={styles.subtitle}>Highlights</div>
        <div className={styles.highlights__container}>
          <Highlight title={"Performances"} image={Performances} />
          <Highlight title={"Choreography Projects"} image={CP} />
          <Highlight title={"Battles"} image={Battles} />
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
