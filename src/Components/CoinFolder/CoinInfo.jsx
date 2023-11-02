import { useState } from "react";
import styled from "styled-components";

const CoinInfo = ({ coinName, desc }) => {
  const [flag, setFlag] = useState(false);

  const smallDesc =
    desc.length > 400
      ? desc.slice(0, 400) +
        "<p style='color:var(--grey); cursor:pointer;'>Read More...</p>"
      : desc;
  const fullDesc =
    desc.length > 400
      ? desc + "<p style='color:var(--grey);cursor:pointer;'>Read Less...</p>"
      : desc;


  return (
    <CoinInfoContainer className="grey-wrapper">
      <h2>{coinName}</h2>
      <p onClick={() => {
          desc.length > 400 && setFlag(!flag);
        }}
        dangerouslySetInnerHTML={{ __html: flag ? fullDesc : smallDesc }}></p>
    </CoinInfoContainer>
  );
};

export default CoinInfo;

let CoinInfoContainer = styled.div`
  font-size: 0.8rem;
  h2,
  p {
    padding: 0.5rem 0.9rem;
    color: var(--white);
  }
  p {
    a {
      text-decoration: underline !important;
    }
    a:hover {
      color: var(--blue) !important;
    }
  }
  @media only screen and (max-width:500px){
    font-size: 0.5rem;
    h2,
  p {
    padding: 0.2rem 0.1rem;
  }
  }
`;
