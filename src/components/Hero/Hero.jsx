import styled from "styled-components";
import { ContentWrapper, Heading, Paragraph, Section, Subheading } from "../layout";

export const Hero = () => {
    return (
        
        <Section 
            theme={"dark"}
            layout={"auto-grid"}
            minColumnSize={"44ch"}
            placeItems={"center center"}
            minHeight={"calc(100vh, 4rem)"}
        >
            <CoverImg src="/HeroBanner.png" alt="" />
            
            <ContentWrapper 
                theme={"dark"} 
                layout={"flex"} 
                flexDirection={"column"}
                gap={"4rem"}
            >

                <ContentWrapper layout={"flex-column"} gap={"0.5rem"} >
                    <Heading size={"xx-large"}>Thomas Britton</Heading>
                    <Subheading>Full-Stack Software Developer</Subheading>
                    <Paragraph maxWidth={"45ch"}>Crafting innovative solutions with expertise in Java, Javascript, and Python. Let's build something amazing together!</Paragraph>
                </ContentWrapper>
                <form action="/TomBrittonCv.pdf" value={"Download CV"} target="_blank">
                    <StyledButton> <Paragraph>Get My Resume</Paragraph></StyledButton>
                </form>

            </ContentWrapper>
        </Section>
    )
};


const CoverImg = styled.img`
    object-fit: contain;
    border-radius: 1rem;
    align-self: center;
    height: 80%;
    justify-self: center;
`


const StyledButton = styled.button`
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.saffron};
  padding: 0.6rem 1rem;
  align-self: center;
    
`