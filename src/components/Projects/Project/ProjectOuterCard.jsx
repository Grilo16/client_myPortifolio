import styled, { css } from "styled-components";
import { ThemeSelector } from "../../../style";

export const ProjectOuterCard = ({children, ...props}) => {
    return (
        <ProjectOuterDiv
            {...props}
        >
            {children}
        </ProjectOuterDiv>
    )
}

export const templateRows = css`
  grid-template-rows: 25rem 5rem 0.1rem;
  

`
const ProjectOuterDiv = styled.div`
  display: grid;
  background-color: transparent;
  grid-template-rows: subgrid;
  grid-row: span 3;
  width: min(30rem, 100%);
  perspective: 2000px;
  isolation: isolate;
  position: relative;

  &:hover {
    & > div {
      transform: rotateY(180deg);
    }
  }
`;

