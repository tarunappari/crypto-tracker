import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Footer = () => {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <FooterContainer>
      <div onClick={() => topFunction()}>
        <h2>CryptoTracker</h2>
      </div>
      <div className="social-links">
        <Link
          to="https://github.com/tarunappari"
          className="social-link"
          target="_blank"
        >
          <GitHubIcon />
        </Link>
        <Link
          to="https://www.linkedin.com/in/tarun-appari-77ba93280/"
          className="social-link"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link
          to="https://www.facebook.com/tarun.appari"
          className="social-link"
          target="_blank"
        >
          <FacebookIcon />
        </Link>
        <Link
          to="https://www.instagram.com/_imnomonk____/"
          className="social-link"
          target="_blank"
        >
          <InstagramIcon />
        </Link>
      </div>
    </FooterContainer>
  );
};

export default Footer;

let FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin: 3rem;
  height: auto;
  border-radius: 0.75rem;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(31, 83, 198, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  h2 {
    color: var(--white);
    cursor: pointer;
    font-size: 1.4rem;
  }

  .social-links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
  }

  .social-link {
    color: var(--white);
    font-size: 2rem !important;
    transition: all 0.2s ease-in-out !important;
  }

  .social-link:hover {
    transform: scale(1.2);
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media only screen and (max-width: 800px) {
    margin: 1.5rem 0.5rem;
    position: relative;
    bottom: -15rem;
    
    h2 {
      font-size: 1rem;
    }

    .social-links {
      gap: 0.5rem;
    }
    .social-link {
      font-size: 1rem !important;
    }
  }
`;
