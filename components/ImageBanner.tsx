'use client';

import styled from 'styled-components';

const ImageSection = styled.div`
  flex: 1;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 40%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
  }
  i {
    font-size: 2rem;
    margin-top: 0.5rem;
  }
  div {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;

    h3 {
      font-size: 24px;
      color: #fff;
      margin-bottom: 10px;
    }

    span {
      color: #e84c70;
    }

    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      gap: 20px;

      li {
        a {
          color: #fff;
          font-size: 20px;
          transition: color 0.3s;

          &:hover {
            color: #e84c70;
          }
        }
      }
    }
  }
`;

const ImageBanner = () => {
  return (
    <ImageSection>
      <img src="https://assets.bettyblocks.com/38f148fc1cb1422886a3cbfdb99d1d6e_assets/files/61aaffffa59a4f70af2455fe3eaa2a65" alt="Joris Pannekeet" />
      <div>
        <h3>Joris Pannekeet</h3>
        <span>Frontend Developer</span>
        <ul>
          <li><a target='_blank' href="https://github.com/JorisPannekeet/portfolio-next"><i className="fab fa-github"></i></a></li>
          <li><a target='_blank' href="https://www.linkedin.com/in/joris-pannekeet-75ba4130/"><i className="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
    </ImageSection>
  );
};

export default ImageBanner;
