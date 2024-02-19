import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1CE5NNCVSBPy6XZSz7txlfGKRgf_iPt84j9VkfRESX1B2Yx7llMqUfhI61OaSefx_9w&usqp=CAU"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMdtDMg94X153HxkX1bBx2h7c5PjhR55fTCT9joLB60Pm5RGCzgtWQyjSJVtyIFRV4xvY&usqp=CAU"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://cashbacklive.in/wp-content/webp-express/webp-images/uploads/2022/12/XY-2-1.png.webp"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wskUcCvWe1ezlDkarMWBxa-2doY7BMLAje9NTm64wxnH-d3YEU-asUUpd8rtjYJNPdc&usqp=CAU"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Snapdeal_Logo.png"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
