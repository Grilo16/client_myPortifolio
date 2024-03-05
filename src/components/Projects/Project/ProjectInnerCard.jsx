import styled from "styled-components";
import { templateRows } from "./ProjectOuterCard";

export const ProjectInnerCard = ({children, ...props}) => {
    return (
        <ProjectInnerDiv
            {...props}
        >
            {children}
        </ProjectInnerDiv>
    )
}

const ProjectInnerDiv = styled.div`
  display: grid;
${templateRows};
  grid-template-rows: subgrid;
  grid-row: span 3;
  transition: 0.7s ease-in-out;
  transform-style: preserve-3d;
`;
