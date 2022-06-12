import Mobile from "./components/mobile/Mobile";
import Intro from "./components/intro/Intro"
import Topbar from "./components/topbar/Topbar"
import About from "./components/about/About"
import Bober from "./components/bober+/bober"
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import "./App.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <About/>
        <Bober/>
        <Mobile/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
