import styled from 'styled-components';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #de2157;
  padding: 0.75rem 1.25rem;
  color: #000;
  font-size: 2rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.p`
  color: #fff;
  text-decoration: none;
  font-size: 1.25rem;
  &:hover {
    color: #de2157;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Navbar = () => {
  const { user } = useUser();

  return (
    <Nav>
      <Logo>J</Logo>
      <NavLinks>
        <StyledLink href="/" passHref>
          <NavLink>Home</NavLink>
        </StyledLink>
        <StyledLink href="/portfolio" passHref>
          <NavLink>Portfolio</NavLink>
        </StyledLink>
        <StyledLink href="/admin" passHref>
          <NavLink>Admin</NavLink>
        </StyledLink>
        {!user ? (
        <StyledLink href="/api/auth/login" passHref>
          <NavLink>Login</NavLink>
        </StyledLink>
        ) : (
          <StyledLink href="/api/auth/logout" passHref>
            <NavLink>Logout</NavLink>
          </StyledLink>
        )}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;