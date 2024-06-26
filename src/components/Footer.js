import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaTwitterSquare , FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        {/* <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <img src="https://img.freepik.com/free-vector/end-season-website-banner-with-50-off-offer_1302-8184.jpg?size=626&ext=jpg" width="440"></img>
            </div>
            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section> */}
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
            <img src="./images/logors.png" alt="my logo img" width="200"/>
              {/* <h3>Rohan Ecommerce</h3> */}
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <a href="https://twitter.com/RohanGouda07" target="_blank"  rel="noreferrer">
                  <FaTwitterSquare  className="icons" />
                  </a>
                </div>
                <div>
                <a href="https://www.instagram.com/rohan.gouda.7/"  target="_blank"  rel="noreferrer">
                  <FaInstagram className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"  rel="noreferrer">
                    <FaYoutube className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 9131665933</h3>
              <h3>Email</h3>
              <h3>rohangouda07@gmail.com</h3>
              <a className="fixed top-4 right-6" href="https://www.buymeacoffee.com/rohangouda" style={{"zIndex" : 51}} target="_blank">
                <button className="rounded-md px-4 py-2 flex" style={{backgroundColor: "rgb(129 107 229)", fontSize: "20px"
    ,padding: "2px 10px 3px 3px", borderRadius:"10px", color: "rgb(0, 0, 0)"}}>
                  <div className="flex">
                      <span className="btn-icon px-1">
                        <img src="./images/chai.svg" alt="Chai icon" />
                      </span>
                      <span className="btn-custom-text">Buy us a chai</span>
                </div>
                </button>
                </a>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} Rohan. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
