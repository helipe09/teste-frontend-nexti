import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  display:flex;
`;

export const BoxProduct = styled.div`
  background-color: ${props=>props.theme.colors.secondary};
  height:15rem;
  width:30rem;
  padding:2rem;
  border-radius:2rem;
  margin-right:2rem;

  h1{
    margin-bottom:2rem;
    &::after {
      content: "";
      display: block;
      width: 3.5rem;
      border-bottom: 0.6rem solid ${(props) => props.theme.colors.warning};
  }

  h2{
    font-size:2rem;
  }
`;
