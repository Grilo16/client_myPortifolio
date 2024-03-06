import styled from "styled-components";
import { AssignedThemes, BorderRadius, SectionPadding, ThemeSelector } from "../../../style";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "../../../assets";
import { ContentWrapper } from "../ContentWrapper";
import { Paragraph, Subheading } from "../Text";

export const Footer = () => {
  return (
    <StyledFooter $theme={AssignedThemes.footer}>
      <ContentWrapper layout={"auto-grid"}>
        <ContentWrapper
          layout={"flex-column"}
          gap={"1rem"}
          alignItems={"center"}
          $theme={AssignedThemes.footer}
        >
          <Subheading>Contact</Subheading>
          <ContentWrapper layout={"flex-column"} gap={"1rem"}>
            <a href="mailto:tom.jf.britton@gmail.com?subject=Hi I saw your portifolio"> 
            <ContentWrapper layout={"flex"} gap={"1rem"} alignItems={"center"}
          $theme={AssignedThemes.footer}
          >
              <MailIcon width={"2rem"} />
              <Paragraph>tom.jf.britton@gmail.com</Paragraph>
            </ContentWrapper>
            </a> 

            <ContentWrapper layout={"flex"} gap={"1rem"} alignItems={"center"}
          $theme={AssignedThemes.footer}
          >
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
          <ContentWrapper layout={"flex-column"} gap={"1rem"} 
          $theme={AssignedThemes.footer}
          >
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
            <StyledButton><Paragraph>Get My Resume</Paragraph></StyledButton>
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

  padding-block: 2rem 1rem;
`;

const StyledButton = styled.button`
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.saffron};
  padding: 0.6rem 1rem;
  align-self: center;
`;

