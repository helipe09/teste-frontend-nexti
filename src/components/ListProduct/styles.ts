import styled from "styled-components";

export const Container = styled.li`
  background-color: ${(props) => props.theme.colors.secondary};
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border-radius: 1rem;
`;

export const FirstData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.colors.black};
  border-radius: 0.3rem;
  padding: 0.3rem;
  background-color: ${(props) => props.theme.colors.info};

  &:hover {
    transition: 0.3s;
    opacity: 0.7;
  }
`;
