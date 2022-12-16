import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import MeetTeam from "./components/MeetTeam";
import CircleProgress from "./components/Sections/CircleProgress";
import CommentsSection from "./components/Sections/CommentsSection";
import Customize from "./components/Sections/Customize";
import CustomizeItSection from "./components/Sections/CustomizeItSection";
import DesignCounterSection from "./components/Sections/DesignCounterSection";
import FollowMeSection from "./components/Sections/FollowMeSection";
import MarketResearch from "./components/Sections/MarketResearch";
import MeasureMeSection from "./components/Sections/MeasureMeSection";
import MyDesignerSection from "./components/Sections/MyDesignerSection";
import SpecialDesign from "./components/Sections/SpecialDesign";
import TryOnSection from "./components/Sections/TryOnSection";

function App() {
  return (
  <>
    <Layout>
      <Banner/>
      <MeetTeam/>
      <SpecialDesign/>
      <MarketResearch/>
      <Customize/>
      <MeasureMeSection/>
      <CircleProgress/>
      <CustomizeItSection/>
      <DesignCounterSection/>
      <TryOnSection/>
      <MyDesignerSection/>
      <FollowMeSection/>
      <CommentsSection/>
      <Footer/>
    </Layout>
  </>
  );
}

export default App;
