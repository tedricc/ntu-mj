import Nav from "@/components/Nav/Nav";
import EventsLanding from "@/app/events/events-components/EventsLanding";
import Footer from "@/components/Footer/Footer";

function page() {
  return (
    <>
      <Nav />
      <EventsLanding
        title={"Dancetitude 2023"}
        text={
          "This production follows the history and present of NTU MJ, highlighting the struggles, slumps, and breakthroughs members faced through their journey of finding what dance means to them. Centered around the concept of unfolding oneself, the pieces in this production display one’s raw emotions and thoughts compared to what they appear to be, synonymous with what many others face."
        }
        backgroundImage={
          "https://github.com/tedricc/ntu-mj/blob/main/public/events-banner.jpg?raw=true"
        }
      />
      <EventsLanding
        title={"PRELUDE: OUR STORY"}
        // text={
        //   "ANG WEI QING (Opening) YEO REN PING (Hip Hop) JANICE GOH (Open) XENIA TAN (Open) LEONG YAN TING (Mandopop) ALEXIS LYE(Litefeet) ERNEST YEE (Litefeet) JACY HENG (Litefeet) LAU LEON (Litefeet)"
        // }
        backgroundImage={
          "https://github.com/tedricc/ntu-mj/blob/main/public/alumni-dtt.jpg?raw=true"
        }
      />
      <EventsLanding
        title={"ACT 1: US | Eras"}
        // text={"AMANDA PHUA (SIM DreamWerkz) JORDAN YU MARCUS CHING YI JINA"}
        backgroundImage={
          "https://github.com/tedricc/ntu-mj/blob/main/public/mjmj-dtt.jpg?raw=true"
        }
      />
      <EventsLanding
        title={"ACT 2: My Conviction | Awakening"}
        backgroundImage={
          "https://github.com/tedricc/ntu-mj/blob/main/public/lovy-dtt.jpg?raw=true"
        }
      />
      <EventsLanding
        title={"ACT 2: My Conviction | Our Voices"}
        backgroundImage={
          "https://github.com/tedricc/ntu-mj/blob/main/public/gs-dtt.jpg?raw=true"
        }
      />
      <EventsLanding
        title={"ACT 3: Our Inner World | Through the Night"}
        backgroundImage={
          "https://github.com/tedricc/ntu-mj/blob/main/public/ky-dtt.jpg?raw=true"
        }
      />
      <EventsLanding
        title={"ACT 3: Our Inner World | Amidst Disorientation"}
        backgroundImage={
          "https://github.com/tedricc/ntu-mj/blob/main/public/cyc-dtt.jpg?raw=true"
        }
      />
      <EventsLanding
        title={"ACT 3: Our Inner World | We Find Our Fight"}
        backgroundImage={
          "https://github.com/tedricc/ntu-mj/blob/main/public/unichlo-dtt.jpg?raw=true"
        }
      />
      <EventsLanding
        title={"ACT 3: Our Inner World | Steadfast in the Chaos"}
        backgroundImage={
          "https://github.com/tedricc/ntu-mj/blob/main/public/javash-dtt.jpg?raw=true"
        }
      />
      <EventsLanding
        title={"ACT 4: Our Connections | Me to We"}
        backgroundImage={
          "https://github.com/tedricc/ntu-mj/blob/main/public/alumni-dtt.jpg?raw=true"
        }
      />
      <EventsLanding
        title={"ACT 4: Our Connections | Unit."}
        backgroundImage={
          "https://github.com/tedricc/ntu-mj/blob/main/public/danheng-dtt.jpg?raw=true"
        }
      />
      <EventsLanding
        title={"ACT 5: Our Dream Play | Imagine If"}
        backgroundImage={
          "https://github.com/tedricc/ntu-mj/blob/main/public/din-dtt.jpg?raw=true"
        }
      />
      <EventsLanding
        title={"ACT 5: Our Dream Play | The Ambiguity of Exploration"}
        backgroundImage={
          "https://github.com/tedricc/ntu-mj/blob/main/public/gin-dtt.jpg?raw=true"
        }
      />
      <EventsLanding
        title={"ACT 5: Our Dream Play | Where The Flock Are We Going"}
        backgroundImage={
          "https://github.com/tedricc/ntu-mj/blob/main/public/bird-dtt.jpg?raw=true"
        }
      />
      <EventsLanding
        title={"THIS IS MJ"}
        backgroundImage={
          "https://github.com/tedricc/ntu-mj/blob/main/public/finale-dtt.jpg?raw=true"
        }
      />
      <Footer />
    </>
  );
}

export default page;
