import "./About.css";
import Award from "..//images//NSS.png"
import Me from "..//images//Yogesh.JPG"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src= {Me}
            alt=""
            className="a-img"
          />
          
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Hola!My name is Yogesh Jayachandran and I am a Student pursuing my Electronics and communication Engineering from Sri Krishna College of Engineering and Technology. I am an accomplished coder and programmer, and I enjoy using my skills to contribute to in a way to help others. While in school, I earned the yearly Proficiency Awards  for my exemplary academic performance and leadership skills."
        </p>
        <div className="a-award">
        <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h3>Volunteering :</h3>
            <h4 className="a-award-title">National Service Scheme</h4>
            <p className="a-award-desc">
              I had been a part of government organisation in which Service to others as functional motto.
              I had been Awarded as the Best Afforestion Coordinator 2019, for my best service to the surrounding plants and trees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;