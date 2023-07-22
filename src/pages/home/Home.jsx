import React from "react";
import Nav from "../../components/Nav";
import "../../styles/Home.css";
import LanguageIcon from "@mui/icons-material/Language";
import DrawIcon from "@mui/icons-material/Draw";
import AndroidIcon from "@mui/icons-material/Android";
import AddchartIcon from "@mui/icons-material/Addchart";

import "../../styles/Prlx.scss";
import Tilt from "react-parallax-tilt";
import SecurityIcon from "@mui/icons-material/Security";
import Gal from "../../components/Gal";
import Team from "./Team";
import Footer from "../../components/Footer";
import "../../styles/Mq.css";
// import { Add } from "@mui/icons-material";
const Home = () => {
  return (
    <div>
      <Nav />
      <main>
        <section className="hero">
          <div className="hero-info">
            <h3>IT SOLUTIONS</h3>
            <h1>IT Solutions Services For Your Business</h1>
            <h6>
              We are leading business startup consult providing company all over
              the world doing over 40 years financial services
            </h6>
            <div className="btn">Learn More</div>
          </div>
          <img src="./imgs/h9-shape5.png" id="spin" alt="" />
          <img src="./imgs/ziz.png" id="ziz" alt="" />
          <img src="./imgs/h7-shape1.png" id="bounce" alt="" />
          <div id="hm-img">
            <img src="./imgs/h9-banner1.png" alt="" />
          </div>
        </section>
        <section className="about">
          <div className="ab-left">
            <img src="./imgs/h7-banner2.png" alt="" />
            <img src="./imgs/ziz.png" id="ziz" alt="" />

            <img src="./imgs/h9-shape5.png" id="spin" alt="" />
          </div>
          <div className="ab-right">
            <div className="ab-data">
              <div className="semi blue">ABOUT US</div>
              <div className="t-title">
                We Are Innovative IT Solutions & Services Company
              </div>
              <div className="text">
                Nor is there anyone who loves or pursues or desires to obtain
                pain of itself, because it is pain, but occasionally
                circumstances occur in which toil and pain can procure him some
                great pleasure.
              </div>
              <div className="text">
                Nor is there anyone who loves or pursues or desires to obtain
                pain of itself, because it is pain, but occasionally
                circumstances occur in which toil and pain can procure him some
                great pleasure. pain of itself, because it is pain, but
                occasionally circumstances occur in which toil and pain can
                procure him some great pleasure.
              </div>
              <div className="btn">Contact Us</div>
            </div>
          </div>
          <img src="./imgs/h7-shape6.png" id="bounce" alt="" />
        </section>
        <section className="service">
          <div className="s-grid">
            <div className="s-t">
              <h2 className="blue">Our Services</h2>
              <h1 className="strong">One platform.</h1>
              <h1 className="light">Build quickly.</h1>
              <div className="btn">Contact Now</div>
            </div>{" "}
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee3f"
              glarePosition="all"
              tiltMaxAngleX="24"
              tiltMaxAngleY="15"
              className="parallax-effect-glare-scale bggg "
            >
              <div className="s-cd">
                <div className="s-top">
                  <div className="stl">
                    <LanguageIcon />
                  </div>
                  <div className="str">Web Development</div>
                </div>
                <div className="s-data">
                  Web development creates websites, from simple pages to
                  intricate applications, encompassing design, security, and
                  e-commerce.
                </div>
              </div>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee3f"
              glarePosition="all"
              tiltMaxAngleX="24"
              tiltMaxAngleY="15"
              className="parallax-effect-glare-scale bggg "
            >
              <div className="s-cd">
                <div className="s-top">
                  <div className="stl">
                    <DrawIcon />
                  </div>
                  <div className="str">UI/UX Design</div>
                </div>
                <div className="s-data">
                  UI/UX design combines interface and experience for an
                  intuitive, user-friendly journey.
                </div>
              </div>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee3f"
              glarePosition="all"
              tiltMaxAngleX="24"
              tiltMaxAngleY="15"
              className="parallax-effect-glare-scale bggg "
            >
              <div className="s-cd">
                <div className="s-top">
                  <div className="stl">
                    <AndroidIcon />
                  </div>
                  <div className="str">App Development</div>
                </div>
                <div className="s-data">
                  App development creates software applications for various
                  platforms, like mobile, web, and desktop.
                </div>
              </div>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee3f"
              glarePosition="all"
              tiltMaxAngleX="24"
              tiltMaxAngleY="15"
              className="parallax-effect-glare-scale bggg "
            >
              <div className="s-cd">
                <div className="s-top">
                  <div className="stl">
                    <AddchartIcon />
                  </div>
                  <div className="str">Advertising</div>
                </div>
                <div className="s-data">
                  Advertising promotes products or services, aiming to draw
                  attention and potential investment through controlled messages
                  via mass media.
                </div>
              </div>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee3f"
              glarePosition="all"
              tiltMaxAngleX="24"
              tiltMaxAngleY="15"
              className="parallax-effect-glare-scale bggg "
            >
              <div className="s-cd">
                <div className="s-top">
                  <div className="stl">
                    <SecurityIcon />
                  </div>
                  <div className="str">IT Security</div>
                </div>
                <div className="s-data">
                  Strengthen your posture with powerful and affordable solutions
                  designed to manage today's security.
                </div>
              </div>
            </Tilt>
          </div>
        </section>
        {/* <section className="team">
          <Team />
        </section> */}
        <section className="tec">
          <div class="custom-shape-divider-bottom-1679121643">
            <svg
              id="sv"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="tt">Technologies We Use</div>
          <div className="gd">
            <div className="tec-f">
              <img className="dk" src="./imgs/t1.png" alt="" />
              <img className="lt" src="./imgs/t1.png" alt="" />
            </div>
            <div className="tec-f">
              <img className="dk" src="./imgs/t2.png" alt="" />
              <img className="lt" src="./imgs/t2.png" alt="" />
            </div>
            <div className="tec-f">
              <img className="dk" src="./imgs/t3.png" alt="" />
              <img className="lt" src="./imgs/t3.png" alt="" />
            </div>
            <div className="tec-f">
              <img className="dk" src="./imgs/t3.svg" alt="" />
              <img className="lt" src="./imgs/t3.svg" alt="" />
            </div>
            <div className="tec-f">
              <img className="dk" src="./imgs/t8.png" alt="" />
              <img className="lt" src="./imgs/t8.png" alt="" />
            </div>
            <div className="tec-f">
              <img className="dk" src="./imgs/t5.png" alt="" />
              <img className="lt" src="./imgs/t5.png" alt="" />
            </div>
            <div className="tec-f">
              <img className="dk" src="./imgs/t6.png" alt="" />
              <img className="lt" src="./imgs/t6.png" alt="" />
            </div>
            <div className="tec-f">
              <img className="dk" src="./imgs/t7.svg" alt="" />
              <img className="lt" src="./imgs/t7.svg" alt="" />
            </div>
          </div>
        </section>
        <section id="ffftr">
          <Gal />
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Home;