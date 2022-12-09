import Banner from "./components/Banner";
import Layout from "./components/Layout";
import MeetTeam from "./components/MeetTeam";
import SpecialDesign from "./components/Sections/SpecialDesign";

function App() {
  return (
  <>
    <Layout>
      <Banner/>
      <MeetTeam/>
      <SpecialDesign/>
    </Layout>
  </>
  );
}

export default App;
