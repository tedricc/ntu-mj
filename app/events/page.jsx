import Nav from "@/components/Nav/Nav";
import EventsLanding from "@/app/events/events-components/EventsLanding";
import Footer from "@/components/Footer/Footer";
import CoverImage from "@/public/events-banner.jpg";
import Alumni from "@/public/alumni-dtt.jpg";
import MJMJ from "@/public/mjmj-dtt.jpg";
import Lovy from "@/public/lovy-dtt.jpg";
import GS from "@/public/gs-dtt.jpg";
import KY from "@/public/ky-dtt.jpg";
import CYC from "@/public/cyc-dtt.jpg";
import Unichlo from "@/public/unichlo-dtt.jpg";
import JavAsh from "@/public/javash-dtt.jpg";
import Meow from "@/public/meow-dtt.jpg";
import DanHeng from "@/public/danheng-dtt.jpg";
import Din from "@/public/din-dtt.jpg";
import Gin from "@/public/gin-dtt.jpg";
import Bird from "@/public/bird-dtt.jpg";
import Finale from "@/public/finale-dtt.jpg";

function page() {
  return (
    <>
      <Nav />
      <EventsLanding
        title={"Dancetitude 2023"}
        text={
          "This production follows the history and present of NTU MJ, highlighting the struggles, slumps, and breakthroughs members faced through their journey of finding what dance means to them. Centered around the concept of unfolding oneself, the pieces in this production display one’s raw emotions and thoughts compared to what they appear to be, synonymous with what many others face."
        }
        backgroundImage={CoverImage}
      />
      <EventsLanding
        title={"PRELUDE: OUR STORY"}
        // text={
        //   "ANG WEI QING (Opening) YEO REN PING (Hip Hop) JANICE GOH (Open) XENIA TAN (Open) LEONG YAN TING (Mandopop) ALEXIS LYE(Litefeet) ERNEST YEE (Litefeet) JACY HENG (Litefeet) LAU LEON (Litefeet)"
        // }
        backgroundImage={Alumni}
      />
      <EventsLanding
        title={"ACT 1: US | Eras"}
        // text={"AMANDA PHUA (SIM DreamWerkz) JORDAN YU MARCUS CHING YI JINA"}
        backgroundImage={MJMJ}
      />
      <EventsLanding
        title={"ACT 2: My Conviction | Awakening"}
        backgroundImage={Lovy}
      />
      <EventsLanding
        title={"ACT 2: My Conviction | Our Voices"}
        backgroundImage={GS}
      />
      <EventsLanding
        title={"ACT 3: Our Inner World | Through the Night"}
        backgroundImage={KY}
      />
      <EventsLanding
        title={"ACT 3: Our Inner World | Amidst Disorientation"}
        backgroundImage={CYC}
      />
      <EventsLanding
        title={"ACT 3: Our Inner World | We Find Our Fight"}
        backgroundImage={Unichlo}
      />
      <EventsLanding
        title={"ACT 3: Our Inner World | Steadfast in the Chaos"}
        backgroundImage={JavAsh}
      />
      <EventsLanding
        title={"ACT 4: Our Connections | Me to We"}
        backgroundImage={Meow}
      />
      <EventsLanding
        title={"ACT 4: Our Connections | Unit."}
        backgroundImage={DanHeng}
      />
      <EventsLanding
        title={"ACT 5: Our Dream Play | Imagine If"}
        backgroundImage={Din}
      />
      <EventsLanding
        title={"ACT 5: Our Dream Play | The Ambiguity of Exploration"}
        backgroundImage={Gin}
      />
      <EventsLanding
        title={"ACT 5: Our Dream Play | Where The Flock Are We Going"}
        backgroundImage={Bird}
      />
      <EventsLanding title={"THIS IS MJ"} backgroundImage={Finale} />
      <Footer />
    </>
  );
}

export default page;
