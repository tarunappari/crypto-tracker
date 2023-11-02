import styled from "styled-components";
import Button from "./common/Button";
import iphone from "../Assests/iphone.png";
import gradient from "../Assests/gradient.png";
import { motion } from "framer-motion";
import { duration } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "./common/Footer/Footer";


const LandingPageComponent = () => {

  let navigate = useNavigate()

  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      gap:'6rem'
    }}>
      <MainContainer>
      <div className="left-container">
        <motion.h1
          initial={{ opacity: 0, y: +50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="first-h1"
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: +80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="sec-h1"
          style={{ color: "var(--blue)" }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: +50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 ,delay:0.8}}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: +130 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="btn-div"
        >
          <Button text={"Dashboard"} onClickFunc={()=> navigate('/dashboard')} outlined={false} />
          <Button text={"Share"} onClickFunc={()=> navigate('/dashboard')} outlined={true} />
        </motion.div>
      </div>
      <div className="right-container">
        <motion.img
          initial={{ y: -25 }}
          animate={{ y: 25 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          src={iphone}
          alt="iphone"
          className="phoneimg"
        />
        <img src={gradient} alt="gradient" className="gradientImg" />
      </div>
    </MainContainer>
    <Footer />
    </div>
  );
};

export default LandingPageComponent;

let MainContainer = styled.div`
  display: flex;
  min-width: 100vw;
  justify-content: space-between;
  color: white;
  padding: 3rem;
  margin-top: 1rem;
  .left-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
      font-size: 6rem;
      font-weight: 900;
    }
    .btn-div {
      display: flex;
      gap: 2rem;
      margin-top: 1rem;
    }
    p {
      font-weight: 600;
      font-size: 1.1rem;
      color: var(--grey);
    }
    .first-h1:hover {
      color: var(--black);
      -webkit-text-stroke-color: var(--white);
      -webkit-text-stroke-width: 3px;
      transition: 0.3s;
    }
  }

  .right-container {
    position: relative;
    padding-right: 3rem;
    .gradientImg {
      width: 14rem;
      position: absolute;
      top: 3rem;
      right: 3rem;
    }
    .phoneimg {
      position: absolute;
      width: 17rem;
      z-index: 2;
      top: -2rem;
      right: 3rem;
    }
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    .left-container {
      h1 {
        font-size: 4rem;
        font-weight: 700;
      }
      p {
        font-weight: 400;
        font-size: 0.8rem;
        color: var(--grey);
      }
    }
    .right-container {
      min-width: 70vw;
      .gradientImg {
        width: 11rem;
      }
      .phoneimg {
        width: 13rem;
      }
    }
  }
`;
