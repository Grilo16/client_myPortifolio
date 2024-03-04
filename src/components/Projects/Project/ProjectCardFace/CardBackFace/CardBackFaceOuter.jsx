import styled from "styled-components";
import { AssignedThemes, ThemeSelector } from "../../../../../style";
import { BaseCardFace } from "../BaseCardFace";

export const CardBackFaceOuter = ({children, ...props}) => {
    return (
        <CardBackDiv
            $theme={AssignedThemes.projects.card.back.outer}
            {...props}
        >
                {children}
        </CardBackDiv>
    )
}

const CardBackDiv = styled(BaseCardFace)`
  ${ThemeSelector};
`;
