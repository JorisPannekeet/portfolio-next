'use client';
import { ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import ImageBanner from '../components/ImageBanner';
import GlobalStyle from '../styles/global';
import { Providers } from './providers';


const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #000;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #000;
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const ContentWrapper = styled.main`
  flex: 1; /* Ensures the main content takes up the remaining height */
  padding: 0 20px;
`;

type LayoutProps = {
  children: ReactNode;
};


const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>Joris Pannekeet Portfolio</title>
        <meta name="description" content="I create exceptional experiences for the web." />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <GlobalStyle />
        <Providers>
          <LayoutWrapper>
            <PageWrapper>
              <Navbar />
              <ContentWrapper>{children}</ContentWrapper>
            </PageWrapper>
            <ImageBanner />
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
