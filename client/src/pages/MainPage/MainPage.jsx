import React from "react";

import Mobile from "../../components/mobile/Mobile";
import Intro from "../../components/intro/Intro"
import About from "../../components/about/About"
import Bober from "../../components/bober+/bober"
import Contact from "../../components/contact/Contact";
import "./MainPage.scss";
import "../../App.scss"

export const MainPage = () => {
    return (
      <div className="app">
        <div className="sections">
          <Intro/>
          <About/>
          <Bober/>
          <Mobile/>
          <Contact/>
        </div>
      </div>
    );
};
