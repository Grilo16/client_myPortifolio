import styled from "styled-components"
import { Heading } from "../Text"
import { LayoutSelector, SetMarginPadding, ThemeSelector } from "../../../style"
import { ContentWrapper } from "../ContentWrapper"
import { GitHubIcon, LinkedInIcon } from "../../../assets"

export const Header = () => {
    return (
        <StyledHeader $theme={"dark"} $layout={"flex"} $justifyContent={"flex-end"} $alignItems={"center"} $padding={"0 1rem"}>
            <ContentWrapper
              layout={"flex"}
              gap={"2rem"}
              justifyContent={"center"}
              padding={"2rem"}
            >
              <a href="https://github.com/Grilo16/" target="_blank">
                <GitHubIcon width={"2rem"} />
              </a>
              <a href="https://www.linkedin.com/in/tom-jf-britton/" target="_blank">
                <LinkedInIcon width={"2rem"} />
              </a>
            </ContentWrapper>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    ${ThemeSelector};
    ${LayoutSelector};
    ${SetMarginPadding};


`
