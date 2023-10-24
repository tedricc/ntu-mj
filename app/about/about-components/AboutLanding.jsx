import styles from "@/app/about/about-components/AboutLanding.module.css";
import Comm from "@/components/ui/Comm/Comm";
import Rachel from "@/public/about assets/rachel.jpg";
import KaiTing from "@/public/about assets/kaiting.jpg";
import Angela from "@/public/about assets/angela.jpg";
import Cels from "@/public/about assets/cels.jpg";
import Cu from "@/public/about assets/cu.jpg";
import Kent from "@/public/about assets/kent.jpg";
import Karthik from "@/public/about assets/superstar.jpg";
import Tiff from "@/public/about assets/tiff.jpg";
import Claudia from "@/public/about assets/claudia.jpg";
import Jayne from "@/public/about assets/jayne.jpg";
import XueYing from "@/public/about assets/xue ying.jpg";

function AboutLanding() {
  return (
    <div className="container">
      <div className="row">
        <div className={styles.landing}>
          <h1 className={styles.title}>About NTU MJ</h1>
          <div className={styles.text}>
            MJ is one of Singapore's pioneer dance societies. The club's name
            originated from their previous direction of Modern Jazz. Dedicated
            to being a family, they strive to unite, love, and embrace one
            another despite differences, retaining diversity and uniqueness
            among members. Despite being managed entirely by the students, they
            aim to balance their studies while keeping their passion for dance
            burning. They believe that dance has a great power to nurture,
            inspire, and change lives, and they do just that, one count at a
            time.
          </div>

          <div className={styles.comm}>
            <h2 className={styles.comm__title}>AY 23/24 Committee</h2>

            <div className={styles.comm__list}>
              <Comm
                img={Rachel}
                name="Rachel"
                description="HIIII!! I am rachel, or people like to call me mummy😗 back at it for comm round 2, this time as the chairpersonnn of the club🤟🏻 i am currently a year 3 studying in chemical engineering, and a senior in MJ~ dancing in MJ is all about the community as well as finding out more about the way my body moves (and how to look swaggier😋) Throughout my 3 years in MJ, i have grown SO MUCHHH in dance as well as learning more about myself as a person, whilst making many many fond memories with the people i have met here. i hope that in the new comm term, we get to grow MJ into a place where others get to see and love MJ the way we do💜"
              />
              <Comm
                img={KaiTing}
                name="Kai Ting"
                description="Hiii I am Kai Ting, your incoming vice chairperson! I am year 4 studying ECPP and year 4 in MJ (senior 2 old already). Hope to make MJ a place of inspiration, fulfilment and ties, as it was for me. Looking forward to dancing the night away with y'all~"
              />
              <Comm
                img={Angela}
                name="Angela"
                description="HII i'm angela! one of the dance captains for MJ this year✨ currently a year 4 studying ECPS yeaAaa i've honestly enjoyed my time in MJ over the past few yrs, be it the friends i've made or the opportunities i've been given to explore my craft. i rly hope that MJ will be a place that ppl will want to come back to (aww), whr we can be open to diff experiences and also people hehe SEE YALL IN CLASS"
              />
              <Comm
                img={Cels}
                name="Celestine"
                description="Heyo! I'm Celestine (cels), Y4 WKW student and the upcoming MJ captain w my fav co-capt angela 😗 MJ is essentially my second home being the place where I started hip hop, as well as having met so many amazing & inspiring people throughout my 4 years here. I hope that I'll be able to help people find comfort, joy and most importantly themselves through dance! Just vibes 🤟🏼🤟🏼"
              />
              <Comm
                img={Cu}
                name="Cutural"
                description="Helluuu I'm Cutural, can call me Cu! Am a year 2 SSS student and the MJ secretary for AY 23/24 🤓 heheh it's always a fun time in MJ & I can't wait for more! 🌱"
              />
              <Comm
                img={Kent}
                name="Kent"
                description="Hello my name is Kent! your treasurer and currently studying in Y3 NBS 🤘🏻 MJ feels like an avenue of release where like-minded people share a common space and just be raw with their emotions through movement. This is something that feels like a home because I don't ever feel judged for it and I feel safe sharing my emotions through dance :-)"
              />
              <Comm
                img={Karthik}
                name="Karthik"
                description="Hey guys my name is Karthik, your Liaison, currently in Y3 Biz and Computing 👍🏻 i hope we can continue to make MJ a safe space for everyone to groww tgt!! and rest assured ill find us great sponsors for the coming year 😎"
              />
              <Comm
                img={Tiff}
                name="Tiffany"
                description="Hiii! I'm Tiffany, a Y3 Psychology student and the new logs for MJ!! Dancing in MJ means pushing myself in dance whilst having fun with my friends!! ✨✨"
              />
              <Comm
                img={Claudia}
                name="Claudia"
                description="hii i'm Claudia the Welfare Officer of MJ for the upcoming year!! I'm a year 2 Business student from NBS! I look forward to grow and dance together with everyone! ✨hope yall enjoy your welfare packs~ nomms nommsz 🍧"
              />
              <Comm
                img={Jayne}
                name="Jayne"
                description="Hey guys! My name is Jayne! 1/2 of the publicity team with Xue Ying 👍🏻 I'm a year 2 ADM student this year 😩🙏🏻 Dance has been a hugeee part of my tertiary life and a big reason I wanted to go to uni was so I could continue dancing and avoid adulting… HAHAHA and thus far MJ has given me amazing opportunities that has not only fed my itchy dance bones but it also allowed me to connect with a new community and experience my first live performance at DTT 23! 🤩 I hope your MJ year will be a fulfilling one for you as it has been for me thus far ❤️ stay groovy peng yous, lets dancey together 👊🏻"
              />
              <Comm
                img={XueYing}
                name="Xue Ying"
                description="Helloosss I'm xueying and I'm one of the P&Ps for MJ this year tgt w Jayne🙌🏻✨ I'm a y1.5 ADM student :) Being in MJ means being in a space with like-minded individuals who are pushing themselves in their dance journeys, such that u feel inspired to get that bread too🔥🍞Cant wait to capture the your beautiful faces and moments in MJ in this coming AY :))"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutLanding;
