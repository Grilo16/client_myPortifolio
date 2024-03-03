import styled from "styled-components";
import { BorderRadius, SectionPadding, ThemeSelector } from "../../../style";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "../../../assets";
import { ContentWrapper } from "../ContentWrapper";
import { Paragraph, Subheading } from "../Text";

export const Footer = () => {
  return (
    <StyledFooter $theme={"dark"}>
      <ContentWrapper layout={"auto-grid"}>
        <ContentWrapper
          layout={"flex-column"}
          gap={"1rem"}
          alignItems={"center"}
        >
          <Subheading>Contact</Subheading>
          <ContentWrapper layout={"flex-column"} gap={"1rem"}>
            <ContentWrapper layout={"flex"} gap={"1rem"} alignItems={"center"}>
              <MailIcon width={"2rem"} />
              <Paragraph>tom.jf.britton@gmail.com</Paragraph>
            </ContentWrapper>

            <ContentWrapper layout={"flex"} gap={"1rem"} alignItems={"center"}>
              <PhoneIcon width={"2rem"} />
              <Paragraph>(+44) 7402-921-531 </Paragraph>
            </ContentWrapper>
          </ContentWrapper>
        </ContentWrapper>

        <ContentWrapper
          layout={"flex-column"}
          gap={"1rem"}
          alignItems={"center"}
        >
          <ContentWrapper layout={"flex-column"} gap={"1rem"}>
            <Subheading>Follow Me </Subheading>
            <ContentWrapper
              layout={"flex"}
              gap={"1rem"}
              justifyContent={"center"}
            >
              <a href="https://github.com/Grilo16/" target="_blank">
                <GitHubIcon width={"2rem"} />
              </a>
              <a href="https://www.linkedin.com/in/tom-jf-britton/" target="_blank">
                <LinkedInIcon width={"2rem"} />
              </a>
            </ContentWrapper>
          </ContentWrapper>
          <form action="/TomBrittonCv.pdf" value={"Download CV"} target="_blank">
            <StyledButton>Get My Resume</StyledButton>
          </form>
        </ContentWrapper>
      </ContentWrapper>

      <Paragraph alignSelf={"center"} size={"small"}>
        &copy; 2024 Thomas Britton. All rights reserved.
      </Paragraph>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  ${ThemeSelector}
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-block: 1rem;
`;

const StyledButton = styled.button`
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.saffron};
  padding: 0.6rem 1rem;
  align-self: center;
`;
