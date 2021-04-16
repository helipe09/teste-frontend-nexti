import styled from 'styled-components';

export const Button = styled.button`
  color:${(props) => props.theme.colors.black};
  display:flex;
  align-items:center;
  padding:1.2rem;
  height:3rem;
  background-color: ${(props) => props.theme.colors.info};
  border-radius:1rem;

  >svg{
    font-size:1.5rem;
    margin-right:0.5rem;
  }
`;
