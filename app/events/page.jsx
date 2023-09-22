"use client";

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
        video={"https://www.youtube.com/embed/biYWBDX6VEw?si=MyYm4i7poMEA8MwN"}
      />
      <EventsLanding
        title={"ACT 1: US | Eras"}
        backgroundImage={MJMJ}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/PHUEBYYxCNI?si=A4pDc-hOJWLeHQ_c"}
      />
      <EventsLanding
        title={"ACT 2: My Conviction | Awakening"}
        backgroundImage={Lovy}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/2JnE4cFMUhY?si=PURFzSonosjdaMbQ"}
      />
      <EventsLanding
        title={"ACT 2: My Conviction | Our Voices"}
        backgroundImage={GS}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/8LQ0nJnfJ5o?si=eIw5O5HWbZD2J9XH"}
      />
      <EventsLanding
        title={"ACT 3: Our Inner World | Through the Night"}
        backgroundImage={KY}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/QFj-_P0-WtY?si=CFzL6OdZZFgUAHcP"}
      />
      <EventsLanding
        title={"ACT 3: Our Inner World | Amidst Disorientation"}
        backgroundImage={CYC}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/SBOiDbQdQUs?si=POOE1HlQr0LO4e6-"}
      />
      <EventsLanding
        title={"ACT 3: Our Inner World | We Find Our Fight"}
        backgroundImage={Unichlo}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/53K6YRhlXOI?si=qnedhMvn780NjiuD"}
      />
      <EventsLanding
        title={"ACT 3: Our Inner World | Steadfast in the Chaos"}
        backgroundImage={JavAsh}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/3NbpUoEBvnk?si=3IlpuJl_VJ4UFsVh"}
      />
      <EventsLanding
        title={"ACT 4: Our Connections | Me to We"}
        backgroundImage={Meow}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/tp-WUaJYwyg?si=0IIr6HvQlLLUIQJA"}
      />
      <EventsLanding
        title={"ACT 4: Our Connections | Unit."}
        backgroundImage={DanHeng}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/nkIhF_Emwls?si=6TR6Y3PCpYLxYZzI"}
      />
      <EventsLanding
        title={"ACT 5: Our Dream Play | Imagine If"}
        backgroundImage={Din}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/4lsfxIzEiRY?si=6UqeOTW_ju5rxC2_"}
      />
      <EventsLanding
        title={"ACT 5: Our Dream Play | The Ambiguity of Exploration"}
        backgroundImage={Gin}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/Sw12LFYDjEU?si=U_jmkotwDE81VLVQ"}
      />
      <EventsLanding
        title={"ACT 5: Our Dream Play | Where The Flock Are We Going"}
        backgroundImage={Bird}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/PLKjO0Xx2lY?si=jm9wpaW3apNLVBzJ"}
      />
      <EventsLanding
        title={"THIS IS MJ"}
        backgroundImage={Finale}
        toggleModal={toggleModal}
        hasModal={true}
        video={"https://www.youtube.com/embed/KHvZ7kTSdrg?si=RM_UpF0zVulgt5vq"}
      />
      <Footer />
    </>
  );
}

export default page;
