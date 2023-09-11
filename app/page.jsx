import Nav from "@/components/Nav/Nav";
import HomeLanding from "@/app/home-components/HomeLanding";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Nav />
          <HomeLanding />
        </div>
      </div>
    </>
  );
}
