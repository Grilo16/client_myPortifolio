import styled from "styled-components";
import { BaseCardFace } from "../BaseCardFace";
import { ThemeSelector } from "../../../../../style";

export const CardFrontFaceOuter = ({children, ...props}) => {
    return (
        <CardFrontDiv
            $theme={"light-accent"}
            {...props}
        >
                {children}
        </CardFrontDiv>
    )
}

const CardFrontDiv = styled(BaseCardFace)`
  display: grid;
  padding: 1.5rem;
  grid-template-rows: subgrid;
  z-index: 2;
  ${ThemeSelector};
`;
