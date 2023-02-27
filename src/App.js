import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Information from "./components/Information";
import Services from "./components/Services";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Community from "./components/Community";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="w-full relative">
      <Navbar />
      <Hero />
      <Information />
      <Services />
      <Tokenomics />
      <Roadmap />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
