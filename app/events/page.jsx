"use client";

import Nav from "@/components/Nav/Nav";
import EventsLanding from "@/app/events/events-components/EventsLanding";
import Footer from "@/components/Footer/Footer";
import CoverImage from "@/public/easter eggs/abi.jpg";
import Alumni from "@/public/dtt assets/alumni-dtt.jpg";
import MJMJ from "@/public/dtt assets/mjmj-dtt.jpg";
import Lovy from "@/public/dtt assets/lovy-dtt.jpg";
import GS from "@/public/dtt assets/gs-dtt.jpg";
import KY from "@/public/dtt assets/ky-dtt.jpg";
import CYC from "@/public/dtt assets/cyc-dtt.jpg";
import Unichlo from "@/public/dtt assets/unichlo-dtt.jpg";
import JavAsh from "@/public/dtt assets/javash-dtt.jpg";
import Meow from "@/public/dtt assets/meow-dtt.jpg";
import DanHeng from "@/public/dtt assets/danheng-dtt.jpg";
import Din from "@/public/dtt assets/din-dtt.jpg";
import Gin from "@/public/dtt assets/gin-dtt.jpg";
import Bird from "@/public/dtt assets/bird-dtt.jpg";
import Finale from "@/public/dtt assets/finale-dtt.jpg";
import { useState } from "react";
import DTTModal from "@/components/DTTModal/DTTModal";

function page() {
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalVideo, setModalVideo] = useState("");

  function toggleModal(title, video) {
    if (!modal) {
      setModal(true);
      setModalTitle(title);
      setModalVideo(video);
      console.log("open");
    } else {
      setModal(false);
      setModalTitle("");
      setModalVideo("");
      console.log("close");
    }
  }

  return (
    <>
      <Nav />
      {modal && (
        <DTTModal
          toggleModal={toggleModal}
          modalTitle={modalTitle}
          modalVideo={modalVideo}
        />
      )}
      <EventsLanding
        title={"Dancetitude 2023"}
        text={
          "This production follows the history and present of NTU MJ, highlighting the struggles, slumps, and breakthroughs members faced through their journey of finding what dance means to them. Centered around the concept of unfolding oneself, the pieces in this production display one’s raw emotions and thoughts compared to what they appear to be, synonymous with what many others face."
        }
        backgroundImage={CoverImage}
        toggleModal={toggleModal}
        hasModal={false}
      />
      <EventsLanding
        title={"PRELUDE: Our Story"}
        backgroundImage={Alumni}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/qPNH44pO-fU?si=v_bDOCZnB3QMAAS4"}
      />
      <EventsLanding
        title={"ACT 1: US | Eras"}
        backgroundImage={MJMJ}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/PcgRClNeors?si=3tgsJ2aqNwG8yEbu"}
      />
      <EventsLanding
        title={"ACT 2: My Conviction | Awakening"}
        backgroundImage={Lovy}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/L1hR9VLkemw?si=f8aMVCWPzdpGHfDS"}
      />
      <EventsLanding
        title={"ACT 2: My Conviction | Our Voices"}
        backgroundImage={GS}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/dAkqSIY_ieU?si=TtGBzsr51awklMJX"}
      />
      <EventsLanding
        title={"ACT 3: Our Inner World | Through the Night"}
        backgroundImage={KY}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/D0p1kgF6ZIQ?si=MBeyCWwaoWyY5pPK"}
      />
      <EventsLanding
        title={"ACT 3: Our Inner World | Amidst Disorientation"}
        backgroundImage={CYC}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/-9RE45jGNz0?si=cpi34pmxeUZruVPA"}
      />
      <EventsLanding
        title={"ACT 3: Our Inner World | We Find Our Fight"}
        backgroundImage={Unichlo}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/pSh1Kqi7KcA?si=F_mbId1AAIK1Ccto"}
      />
      <EventsLanding
        title={"ACT 3: Our Inner World | Steadfast in the Chaos"}
        backgroundImage={JavAsh}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/OJBHt58jf8o?si=2Re7DmPV_BO32P4H"}
      />
      <EventsLanding
        title={"ACT 4: Our Connections | Me to We"}
        backgroundImage={Meow}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/HgXUdufttkg?si=03yCwyhUTl-GDZ3e"}
      />
      <EventsLanding
        title={"ACT 4: Our Connections | Unit."}
        backgroundImage={DanHeng}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/vHWk1un-WHU?si=MMFNL_bkDeSmB8hG"}
      />
      <EventsLanding
        title={"ACT 5: Our Dream Play | Imagine If"}
        backgroundImage={Din}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/_l620HjWYvU?si=G3V-7NgyCK9m4VnD"}
      />
      <EventsLanding
        title={"ACT 5: Our Dream Play | The Ambiguity of Exploration"}
        backgroundImage={Gin}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/P1BjEwnPD50?si=Xx0kaefNk-Qm7ASi"}
      />
      <EventsLanding
        title={"ACT 5: Our Dream Play | Where The Flock Are We Going"}
        backgroundImage={Bird}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/8bOo5O_DOZg?si=2qbaEf6HyAQ8SKbM"}
      />
      <EventsLanding
        title={"THIS IS MJ"}
        backgroundImage={Finale}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/A--iVthV-Cc?si=7bhOJzFXRWmRRukU"}
      />
      <Footer />
    </>
  );
}

export default page;
