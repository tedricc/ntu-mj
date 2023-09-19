import styles from "@/app/about/about-components/AboutLanding.module.css";
import Comm from "@/components/ui/Comm/Comm";
import Rachel from "@/public/rachel-placeholder.jpg";
import Angela from "@/public/angela-placeholder.jpg";
import Cels from "@/public/cels-placeholder.jpg";
import Karthik from "@/public/karthik-placeholder.jpg";
import Jayne from "@/public/jayne-placeholder.jpg";

function AboutLanding() {
  return (
    <div className={styles.landing}>
      <h1 className={styles.title}>About NTU MJ</h1>
      <div className={styles.text}>
        NTU MJ Hip Hop Dance Club, also known as MJ, is one of Singapore's
        pioneer dance societies. The club's name originated from their previous
        direction of Modern Jazz. Over the years and evolution of their members,
        they have adopted Hip Hop as their primary dance genre. In respecting
        the club's tradition and rich history, they have kept their unique name
        to remind their members of their roots. These days, the club is known
        more affectionately in the Singapore dance scene as MJ. Dedicated to
        being a family, they strive to unite, love, and embrace one another
        despite differences, retaining diversity and uniqueness among members.
        Despite being managed entirely by the students, they aim to balance
        their studies while keeping their passion for dance burning. In pursuit
        of excellence, their humility and discipline are traits they exemplify
        in life. They believe that dance has a great power to nurture, inspire,
        and change lives, and they do just that, one count at a time.
      </div>

      <div className={styles.comm}>
        <h2 className={styles.comm__title}>AY 23/24 Committee</h2>

        <div className={styles.comm__list}>
          <Comm img={Rachel} name="Rachel" title="President" />
          <Comm name="Kai Ting" title="Vice-President" />
          <Comm img={Angela} name="Angela" title="Dance Captain" />
          <Comm img={Cels} name="Cels" title="Dance Captain" />
          <Comm className={styles.member} name="Cutural" title="Secretary" />
          <Comm className={styles.member} name="Kent" title="Treasurer" />
          <Comm img={Karthik} name="Karthik" title="Liaison" />
          <Comm className={styles.member} name="Tiffany" title="Logistics" />
          <Comm className={styles.member} name="Claudia" title="Welfare" />
          <Comm img={Jayne} name="Jayne" title="Publicity " />
          <Comm className={styles.member} name="Xue Ying" title="Publicity " />
        </div>
      </div>
    </div>
  );
}

export default AboutLanding;
