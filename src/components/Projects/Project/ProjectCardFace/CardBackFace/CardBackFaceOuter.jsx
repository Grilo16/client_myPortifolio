import styled from "styled-components";
import { ThemeSelector } from "../../../../../style";
import { BaseCardFace } from "../BaseCardFace";

export const CardBackFaceOuter = ({children, ...props}) => {
    return (
        <CardBackDiv
            $theme={"dark-accent"}
            {...props}
        >
                {children}
        </CardBackDiv>
    )
}

const CardBackDiv = styled(BaseCardFace)`
  ${ThemeSelector};
`;
