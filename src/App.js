import Banner from "./components/Banner";
import Layout from "./components/Layout";
import MeetTeam from "./components/MeetTeam";
import CircleProgress from "./components/Sections/CircleProgress";
import Customize from "./components/Sections/Customize";
import MarketResearch from "./components/Sections/MarketResearch";
import MeasureMeSection from "./components/Sections/MeasureMeSection";
import SpecialDesign from "./components/Sections/SpecialDesign";

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
    </Layout>
  </>
  );
}

export default App;
