import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> 
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'ROHAN STORE',
        1000,
        'ROHAN Gadget Galaxy.',
        1000,
        'ROHAN Trend Spot.',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '0.8em', marginTop:'2px', display: 'inline-block' }}
      repeat={Infinity}
    />
     </h1>
            
            <p>
            Discover Rohan's Emporium: A premier destination for cutting-edge gadgets,
            sleek electronics. Experience innovation and quality in every purchase, 
            redefining your shopping journey with us.
            </p>
            <NavLink>
              <a href="/products" target="_blank" rel="noreferrer"><Button >Shop now</Button></a>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
