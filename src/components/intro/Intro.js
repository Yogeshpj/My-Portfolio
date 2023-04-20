import "./intro.css";
import front from "..//images//Front.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">YOGESH JAYACHANDRAN</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Student</div>
              <div className="i-title-item">Sportsman</div>
              <div className="i-title-item">UI/UX Learner</div>
              <div className="i-title-item">Physics Enthusiast</div>
              <div className="i-title-item">Content Writer</div>
            </div>
          </div>
          <p className="i-desc">
            I am a student learning HTML,CSS,JavaScript,React,C++,Java etc...
            I am a Smart worker with good leadership skills.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={front} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;