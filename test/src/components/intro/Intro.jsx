import "./intro.scss"
import background from "../../img/Background.jpg";

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className="main-screen">
        <img src={background} alt="" />
        <div class="marquee-w">
            <div class="marquee">
              <span>Happy Bober Happy Bober&nbsp;</span>
            </div>
            <div class="marquee marquee2">
              <span>Happy Bober Happy Bober&nbsp;</span>
            </div>
        </div>
      </div>
    </div>
  )
}
