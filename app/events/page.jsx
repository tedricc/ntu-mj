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
      <Footer />
    </>
  );
}

export default page;
