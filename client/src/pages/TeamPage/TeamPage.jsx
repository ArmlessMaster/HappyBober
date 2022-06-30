import './TeamPage.scss'

import React from "react";
import { useAnimation, motion } from "framer-motion";
import "../../App.scss"
import { useState } from 'react';
import Cat from "../../img/rammus.png"
import Book1 from "../../img/logo1.svg"
import Book2 from "../../img/сresh.gif"
import vova from "../../img/vova.png"
import andrey from "../../img/andrey.png"
import alina from "../../img/alina.png"
import sasha from "../../img/sasha.png"
import ehor from "../../img/ehor.png"
export const TeamPage = () => {

  const AnimationLeft = {
    offscreen: {
      x: '-30vw',
      opacity: '0'
    },
    onscreen: {
      x: '0vw',
      opacity: '1', 
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 3
      }
    }
  };

  const AnimationRight = {
    offscreen: {
      x: '30vw',
      opacity: '0'
    },
    onscreen: {
      x: '0vw',
      opacity: '1', 
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 3
      }
    }
  };

  const [show, setShow] = useState(false);

  const imgAnimation = useAnimation();
  const imgAnimationReverse = useAnimation();
  const handleMouseMove = (e) => {
    const { clientX } = e;
    const moveX = clientX - window.innerWidth / 2;

    const offsetFactor = 10;
    imgAnimation.start({
      x: moveX / offsetFactor,
    });
    imgAnimationReverse.start({
      x: -moveX / offsetFactor
    });
  };

    return (
      <div className="Rules" style={{ marginTop: '4vw' }}>
        <div className= "Rules-Main-Screen">
          <p>IGRA NA PREDELAH</p>
          <div className="rules__main-screen-img Rules-animation-div1 rules__main-screen-img1">
            <motion.img src={Book2} alt="" 
                      drag
                      dragConstraints={{
                        top: -100,
                        left: -100,
                        right: 100,
                        bottom: 100,
                      }}
              transition={{
                default: { duration:1 },
                type: "spring",
            
              }}/>
          </div>
          <div className="rules__main-screen-img Rules-animation-div2 rules__main-screen-img21">
          <motion.img 
              drag
              dragConstraints={{
                top: -150,
                left: -150,
                right: 150,
                bottom: 150,
              }}
            src={Book1} alt="" 
            transition={{
              default: { duration:1 },
              type: "spring",

            }}/>
          </div>
          <div className="rules__main-screen-img Rules-animation-div3 rules__main-screen-img3">
          <motion.img 
                    drag
                    dragConstraints={{
                      top: -150,
                      left: -150,
                      right: 150,
                      bottom: 150,
                    }}
            src={Cat} alt=""
            transition={{
              default: { duration:1 },
              type: "spring",
        
              }}/>
          </div>
        </div>
        <div className="info">
          <div className="info-flex">
            <motion.div variants={AnimationLeft}
            viewport={{ once: true }}
                      initial="offscreen"
                      whileInView="onscreen"  className="info-left">
               <div className="big-info-left-text">Andrey  <span className='pink'> "LittleDarkAge" </span>Dvugroshev</div>
               <div className="little-info-left-text">
                <p>The big boss of the team, it was he who implemented the design and applications, was the main frontender of the team.</p>
                <p>Author of the projects "Coffee with Cats" and "Heartstone tournament system". An excellent leader, a person with design taste and style.</p>
                <p>Number one of the Kramatorsk blacklist of Dota 2 players. One of the founders of the League of Legends team "Igra na Predelah". Just a cool and muscular man.</p>
               </div>
            </motion.div >
            <motion.div  className="info-right-photo"
            viewport={{ once: true }}
            variants={AnimationRight}
            initial="offscreen"
            whileInView="onscreen">
              <img className='team-portret' src={andrey} alt=""/>
            </motion.div>
          </div>
        </div>

        <div className="info">
          <div className="info-flex">
          <motion.div  className="info-right-photo"
          viewport={{ once: true }}
            variants={AnimationLeft}
            initial="offscreen"
            whileInView="onscreen">
              <img className='team-portret' src={vova} alt=""/>
            </motion.div>
            <motion.div variants={AnimationRight}
            viewport={{ once: true }}
                      initial="offscreen"
                      whileInView="onscreen"  className="info-left">
               <div className="big-info-left-text">Vladimir <span className='blue'>"SirBilibober"</span> Buhalo</div>
               <div className="little-info-left-text"><p>A person with the title "King of Poop", the team leader always sent him to the most obrygan tasks, which he managed to the surprise of everyone.</p>
               <p>He has a violent character, even a donkey will envy his stubbornness. A fan of playing league of legends and poroflit over kogmao, a man who owns a bagel. </p>
               <p>Creator of the projects "Fish shop", "Diary". Rofler, a tough guy. In prison, he received the nickname "toad" or "Tahm Kench"</p></div>
            </motion.div >
          </div>
        </div>
        
        <div className="info">
          <div className="info-flex">
            <motion.div variants={AnimationLeft}
            viewport={{ once: true }}
                      initial="offscreen"
                      whileInView="onscreen"  className="info-left">
               <div className="big-info-left-text">Alexander <span className='pink'>"Kagmao"</span>  Kalinichenko</div>
               <div className="little-info-left-text"><p>Elderly bibizyana, noticed in collaboration with Vitaly Lobanov, for which he was missed in the team of "Igra Na Predelah".</p>
               <p>The old bastard, who in solo was able to make the "Interpol Card File" and "Interpol Card File 2 Mining version".</p>
               <p>In the past, he robbed Vitaly Lobanov, for which he received punishment, namely, the creation of a chat for this project. (Actually, he is in the team under the command of Vitalik Lobanov, but for some reason he is sitting with us. Please tell him the truth that he is not with us).</p></div>
            </motion.div >
            <motion.div  className="info-right-photo"
            viewport={{ once: true }}
            variants={AnimationRight}
            initial="offscreen"
            whileInView="onscreen">
              <img className='team-portret' src={sasha} alt=""/>
            </motion.div>
          </div>  
        </div>

        <div className="info">
          <div className="info-flex">
          <motion.div  className="info-right-photo"
          viewport={{ once: true }}
            variants={AnimationLeft}
            initial="offscreen"
            whileInView="onscreen">
              <img className='team-portret' src={ehor} alt=""/>
            </motion.div>
            <motion.div variants={AnimationRight}
            viewport={{ once: true }}
                      initial="offscreen"
                      whileInView="onscreen"  className="info-left">
               <div className="big-info-left-text">Ehor <span className='blue'>"Ehor4ik"</span> Miroshnikov</div>
               <div className="little-info-left-text"><p>The winner of the bodybuilding tournament, a real man, friend and handsome. Creator of the legendary projects "Gym 1", "Gym 2", "Gym 3", "Gym 4", "Gym 5", "Gym vs Interpol Card Files", "Gym Forever"</p>
               <p>He eats about 4000 kilocalories every meal, if he goes to eat, then you need to wait for him tomorrow or the day after tomorrow, God of hosts.</p>
               </div>
              
            </motion.div >
          </div>
        </div>
        <div className="info">
          <div className="info-flex">
            <motion.div variants={AnimationLeft}
            
                      viewport={{ once: true }}
                      initial="offscreen"
                      whileInView="onscreen"  className="info-left">
               <div className="big-info-left-text">Alina <span className='pink'>"CatBerd21"</span> Zubova</div>
               <div className="little-info-left-text"><p>The queen of evidence, we can’t write anything about her, because she left us (sad).
We are waiting for her!!!</p></div>
            </motion.div >
            <motion.div  className="info-right-photo"
            viewport={{ once: true }}
            variants={AnimationRight}
            initial="offscreen"
            whileInView="onscreen">
              <img className='team-portret' src={alina} alt=""/>
            </motion.div>
          </div>
        </div>
      </div>
    );
};