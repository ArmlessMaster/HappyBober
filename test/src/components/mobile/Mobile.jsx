import "./mobile.scss"
import buttonAndroid from "../../img/button-google-play.svg";
import buttonIOS from "../../img/button-appstore.svg";
import mobile from "../../img/mobile.png";
import "../../fonts/AllianceNo1-ExtraBold.ttf";
import { motion } from "framer-motion";

export default function Mobile() {
  const marqueeVariants = {
    animate: {
      x: [0, -1920],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
          ease: "linear",
        },
      },
    },
  };
  
  return (
    <div className='mobile' id='mobile'>
      <div className="main">
        <div className="left">
          <p className="BigText">Find a tailed friend on your mobile phone</p>
          <ul className="TextList">
            <li>Convenient management</li>
            <li>additional functions</li>
            <li>adaptability</li>
            <li>convenient chat</li>
          </ul>
          <p  className="TextNormal">Unique application for finding a tailed friend or selling animals to an individual or company</p>
          <p className="BigText">DONWLOAD APP</p>
          <div className="buttons">
            <a href="1"><img src={buttonAndroid} alt="" /></a>
            <a href="1"><img src={buttonIOS} alt="" /></a>
          </div>
        </div>
        <div className="right">
          <img src={mobile} alt="" />
        </div>
        <div>
          <div className="marquee-mobile">
            <div>
              <h1>
                Let's Work Together. Let's Work Together. Let's Work Together. Let's
                Work Together. Let's Work Together. Let's Work Together. Let's Work
                Together
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
