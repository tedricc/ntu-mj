import Nav from "@/components/Nav/Nav";
import HomeLanding from "@/app/about/about-components/AboutLanding";

function page() {
  return (
    <div className="container">
      <div className="row">
        <Nav />
        <HomeLanding />
      </div>
    </div>
  );
}

export default page;
