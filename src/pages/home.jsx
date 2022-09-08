import {
  Banner,
  ContentBanner,
  Fandom,
  Footer,
  Hanging,
  Header,
  Invite,
  Reliable,
} from "component";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <div className="lg:pb-20 relative min-h-[626px] bg-discord_blue">
        <Header />
        <ContentBanner />
        <Banner />
      </div>
      <Invite />
      <Hanging />
      <Fandom />
      <Reliable />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
