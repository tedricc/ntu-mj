import Nav from "@/components/Nav/Nav";
import HomeLanding from "@/app/home-components/HomeLanding";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <HomeLanding
        poster={"/home-poster.jpg"}
        video={"/home-video.mp4"}
        title={"We are MJ"}
      />
      {/* <HomeLanding
        poster={"/home-poster.jpg"}
        video={"/performances.mp4"}
        title={"Performances"}
      /> */}
      <HomeLanding
        poster={"/home-poster.jpg"}
        video={"/cp.mp4"}
        title={"Choreography Projects"}
      />
      <HomeLanding
        poster={"/home-poster.jpg"}
        video={"/battle.mp4"}
        title={"Battles"}
      />
      <Footer />
    </>
  );
}
