import Nav from "@/components/Nav/Nav";
import HomeLanding from "@/app/home-components/HomeLanding";
import Footer from "@/components/Footer/Footer";
import HomeAbout from "./home-components/HomeAbout";

export default function Home() {
  return (
    <>
      <Nav />
      <HomeLanding
        poster={"/home-poster.jpg"}
        video={"/home-video.mp4"}
        title={"We are MJ"}
      />
      <HomeAbout />
      <Footer />
    </>
  );
}
