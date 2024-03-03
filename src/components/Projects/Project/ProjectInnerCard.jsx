import styled from "styled-components";

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
  grid-template-rows: subgrid;
  grid-row: span 3;
  transition: 1s ease-in-out;
  transform-style: preserve-3d;
`;
