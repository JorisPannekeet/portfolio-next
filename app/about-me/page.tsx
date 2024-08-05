"use client";

import { useUser } from '@auth0/nextjs-auth0/client';
import { TextSection, ContentContainer } from '@/components/ContentSection';
import { StyledLink } from '@/styles/components';

const Projects = () => {
  const { user } = useUser();

  return (
    <ContentContainer>
      <TextSection>
        <h1>Hi! I&apos;m <span>Joris</span>. {user && <p>It&apos;s to meet you <span>{user.name}!</span></p>}</h1>
        <p>
          I am a front-end developer with around 9 years of experience in the
          field. My expertise lies in developing eﬃcient and scalable applications
          using React and TypeScript. In addition, I have a strong background in
          design, HTML, CSS, WEB3 and game development.
        </p>

        <p>
          Throughout my career, I have worked with a diverse range of clients
          and projects, ranging from small-scale startups to large enterprise-
          level corporations. My work has always been focused on creating
          dynamic and engaging user experiences, while ensuring high
          performance and accessibility standards.
        </p>

        <p>
          My passion for technology and innovation has driven me to constantly
          learn and evolve, staying up-to-date with the latest trends and best
          practices in the industry. As a result, I am able to oﬀer my clients
          cutting-edge solutions that are tailored to their unique needs.
        </p>
        <StyledLink href="/portfolio">Check out my portfolio</StyledLink>
      </TextSection>
    </ContentContainer >
  );
};

export default Projects;
