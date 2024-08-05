import styled from 'styled-components';
import Link from 'next/link';

export const StyledLink = styled(Link)`
  text-decoration: none;
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
`;