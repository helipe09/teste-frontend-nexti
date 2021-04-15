import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const TitleContainer = styled.div`
  > h1 {
    color: ${(props) => props.theme.colors.white};

    &::after {
      content: "";
      display: block;
      width: 3.5rem;
      border-bottom: 0.6rem solid ${(props) => props.theme.colors.warning};
    }
  }
`;

export const Controller = styled.div``;
