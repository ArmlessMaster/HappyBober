import "./intro.scss"
import background from "../../img/Background.jpg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Intro() {
  const marqueeVariants = {
    animate: {
      x: ["0vw", "-58.1vw"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };
  return (
    <div className='intro' id='intro'>
      <div className="main-screen">
        <img src={background} alt="" />
        <div class="marquee-w">
          <div className="marquee-index ">
            <motion.div
              className="track"
              variants={marqueeVariants}
              animate="animate"
              >
              <p>
                Happy Bober. Happy Bober. Happy Bober. Happy Bober. 
              </p>
            </motion.div>
          </div>
          <div className="BtnWrapper-intro">
            <NavLink to="/ads"><button className="Intro-Line-full-button">Find a tailed friend</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}