import "./bober.scss"
import image from "../../img/Cat image.png";
import YellowBtn from '../elements/YellowBtn/Yellowbtn';
import { motion } from "framer-motion"


const Animation = {
  offscreen: {
    y: -300
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 3
    }
  }
};



export default function Bober() {
  return (
    <div className='bober' id='bober'>
      <div className="left">
        <div className="about-big-text">
          HAPPY BOBER+
        </div>
        <div className="about-normal-text">  
        <p className="little-text"><span className="pink">A new convenient subscription that allows you to publish animal ad by raising them to the top</span></p>
          <p>
            <li>Top 10 listings for a Bilibober+ subscription user.</li>
            <li>Billober+ subscription allows full feedback with real-time moderation.</li>
            <li>Bilibober + gives the opportunity to promote ads up.</li>
            <li>Special support program for nurseries and shelters.</li>
          </p>
        </div>
        <div className="buttons">
          <YellowBtn info="89₴ for 1 month"/>
          <YellowBtn info="499₴ for 6 month"/>
          <YellowBtn info="899₴ for 1 year"/>
        </div>
      </div>
      <div className="right">
        <motion.img className="imgBober" src={image} alt=""
          variants={Animation}               
          initial="offscreen"
          whileInView="onscreen"
        />
      </div>
    </div>
  )
}

