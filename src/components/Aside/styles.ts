import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};

  border-right: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Title = styled.h1`
  text-align: center;
  margin: 2rem auto;
`;

export const MenuContainer = styled.nav`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
`;

export const MenuItemLink = styled.a`
  color: ${(props) => props.theme.colors.info};
  display: flex;
  align-items: center;
  margin: 1rem 0;
  text-decoration: none;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
  > svg {
    font-size: 1.2rem;
    margin-right: 1rem;
  }
`;
