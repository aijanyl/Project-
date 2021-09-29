import React from "react";
import pics from "../images/pics.jpg";
import Navbar from "./Navbar/Navbar.jsx";
import "./Header.css";
import { ParallaxProvider } from "react-scroll-parallax";
import pics2 from "../images/pics2.jpg";
import vid from "../images/vid.mp4";
import Footer from "../Footer.js/Footer";
import ImageSlider from "../Slider/ImageSlider";

const Header = () => {
  return (
    <div className="main" style={{ height: "100vh" }}>
      <Navbar />
      <div
        className="backim"
        style={{
          backgroundImage: `url('${pics}')`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="background">
          <div
            className="maintext"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "17rem",
            }}
          >
            <h2
              style={{
                width: "100%",
                fontSize: "3rem",
                color: "white",
                fontFamily: "'Amatic SC',handwriting",
              }}
            >
              KYRGYZSTAN CHILDREN'S FUNDS <br /> A shared commitment to relieve
              suffering and improve the lives of Kyrgyzstan's Children.
            </h2>
          </div>
          <button
            className="button1"
            style={{ alignItems: "center", justifySelf: "center" }}
          >
            Donate
          </button>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ed7117"
          fill-opacity="1"
          d="M0,64L40,80C80,96,160,128,240,138.7C320,149,400,139,480,122.7C560,107,640,85,720,90.7C800,96,880,128,960,160C1040,192,1120,224,1200,224C1280,224,1360,192,1400,176L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <div
        className="info1"
        style={{
          backgroundColor: "white",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-around",
        }}
      >
        <div className="infot">
          <h2
            style={{
              width: "100%",
              fontSize: "3rem",
              color: "orange",
              fontFamily: "'Amatic SC',handwriting",
            }}
          >
            A little about us
          </h2>
          <p>
            A little about Kyrgyzstan Children’s Funds is non-profit
            corporation.
            <br /> Monetary gifts are tax deductible and are
            <br />
            often matched with other gifts from around the world to complete
            projects.
            <br />
            We understand that issues impacting children can change <br />{" "}
            drastically with world affairs. We fund changemakers improving the{" "}
            <br />
            lives of vulnerable children addressing a range of issues, <br />
            allowing us to respond to the greatest areas of need.
          </p>
        </div>
        <img src={pics2} style={{ width: "20rem" }} />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ed7117"
          fill-opacity="1"
          d="M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,144C672,128,768,160,864,197.3C960,235,1056,277,1152,266.7C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div
        className="info4"
        style={{
          backgroundColor: "#ed7117",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "-10px",
        }}
      >
        <video className="vid" width="35%" autoPlay loop muted>
          <source src={vid} type="video/mp4" />
        </video>
        <h2
          style={{
            fontSize: "2rem",
            color: "white",
            fontFamily: "'Amatic SC',handwriting",
            marginTop: "100px",
          }}
        >
          We employ a rigorous initial and follow-up investigation process.
          <br /> Every program has been investigated by one of the world’s{" "}
          <br />
          leading security firms to ensure that they meet
          <br /> World of Children standards.
        </h2>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ed7117"
          fill-opacity="1"
          d="M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,144C672,128,768,160,864,197.3C960,235,1056,277,1152,266.7C1248,256,1344,192,1392,160L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div
        className="info3"
        style={{
          backgroundColor: "white",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <h2
            style={{
              width: "100%",
              fontSize: "5rem",
              color: "orange",
              fontFamily: "'Amatic SC',handwriting",
            }}
          >
            Our news
          </h2>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ed7117"
          fill-opacity="1"
          d="M0,160L40,160C80,160,160,160,240,170.7C320,181,400,203,480,197.3C560,192,640,160,720,138.7C800,117,880,107,960,133.3C1040,160,1120,224,1200,224C1280,224,1360,160,1400,128L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <div
        className="info2"
        style={{
          backgroundColor: "#ed7117",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <h2
          style={{
            fontSize: "4rem",
            color: "white",
            fontFamily: "'Amatic SC',handwriting",
            marginTop: "10px",
          }}
        >
          Your donation make changes
        </h2>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ed7117"
          fill-opacity="1"
          d="M0,224L21.8,208C43.6,192,87,160,131,138.7C174.5,117,218,107,262,128C305.5,149,349,203,393,234.7C436.4,267,480,277,524,261.3C567.3,245,611,203,655,170.7C698.2,139,742,117,785,128C829.1,139,873,181,916,181.3C960,181,1004,139,1047,117.3C1090.9,96,1135,96,1178,128C1221.8,160,1265,224,1309,240C1352.7,256,1396,224,1418,208L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
        ></path>
      </svg>
      <ImageSlider />
      <Footer />
    </div>
  );
};

export default Header;
