import styles from "@/app/home-components/HomeAbout.module.css";
import Highlight from "@/components/ui/Highlight/Highlight";
import Performances from "@/public/home assets/performances.jpg";
import ClassVideos from "@/public/home assets/class-videos.jpg";
import Battles from "@/public/home assets/battles.jpg";

function HomeAbout() {
  return (
    <div className="container">
      <div className="row">
        <div className={styles.title}>Welcome to MJ</div>
        <div className={styles.text}>
          More than a universal language, dance has been a force that transcends
          time and space, and generations and backgrounds to become what it is
          today. As we try to capture the nuances of our dance and weave threads
          of the past and present, we strive for bigger breakthroughs and a
          future MJ dancers can share.
        </div>

        <div className={styles.subtitle}>Highlights</div>
        <div className={styles.highlights__container}>
          <Highlight
            title={"Performances"}
            image={Performances}
            link={
              "https://www.youtube.com/playlist?list=PL8E0MlvDb3X95JTu73iB77tHzj8ZYc22D"
            }
          />
          <Highlight
            title={"Class Videos"}
            image={ClassVideos}
            link={"https://t.me/+ON4fA4m7NH5iMTg1"}
          />
          <Highlight
            title={"Battles"}
            image={Battles}
            link={
              "https://www.youtube.com/playlist?list=PL8E0MlvDb3X9NgEni7BwXCBrB9NOsHQar"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
