"use client";

import { StyledLink } from '@/styles/components';
import styled from 'styled-components';

export const ContentContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const TextSection = styled.div`
  flex: 1;
  color: #fff;
  padding: 0 40px;

  h1 {
    font-size: 56px;
    line-height: 1.2;
    font-weight: bold;
    margin-bottom: 20px;

    span {
      color: #e84c70;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  button {
    background-color: #e84c70;
    border: none;
    padding: 10px 20px;
    color: #fff;
    font-size: 18px;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #c43a5f;
    }
  }
`;


const ContentSection = () => {
  return (
    <ContentContainer>
      <TextSection>
        <h1>
          I create exceptional <span>experiences.</span>
        </h1>
        <p>
          As a front-end developer, I specialize in creating user-friendly and
          visually appealing websites. I am passionate about designing
          interfaces that are easy to use and aesthetically pleasing.
        </p>
        <StyledLink href="/about-me">More about me</StyledLink>
      </TextSection>
    </ContentContainer>
  );
};

export default ContentSection;
