import styled from "styled-components";
import { ContentWrapper, Heading, Paragraph, Section } from "../layout";
import { AssignedThemes } from "../../style";

export const About = () => {
    return (
      <Section
        theme={AssignedThemes.about}
        layout={"fixed-grid"}
        columnCount={"2"}
        minColumnSize={"50ch"}
        placeItems={"stretch center"}
      >
        <ContentWrapper
          layout={"manual-grid"}
          templateRows={"min-content"}
          autoRows={"min-content"}
          gap={"1rem"}
          templateColumns={"min(65ch, 100%)"}
          placeContent={"center center"}
        >
          <Heading>About Me</Heading>

            
          <Paragraph>
          Hey there, I'm Tom, a software developer and duck enthusiast with a passion for innovation. I've been immersed in Java, Javascript, and Python for years, always cooking up exciting projects. Whether it's crafting full-stack apps or simplifying the process with app generators, I thrive on exploring new ideas and delivering high-quality, clean-code solutions.
          </Paragraph>
          <Paragraph>
          Equipped with a robust skill set encompassing React, Spring, and Django, I've honed my expertise in web development. My proficiency extends to Agile methodologies, Git, and Azure DevOps, ensuring seamless project execution. When it comes to problem-solving, I'm your guy—I love diving into the intricacies of algorithms and database management to make every project shine.
          </Paragraph>
          <Paragraph>
          During my recent experiences, collaboration has been key. I've been at the forefront of guiding cross-functional teams to seamlessly integrate software components, enhancing user experience along the way. Noteworthy achievements include revolutionizing how users interact with applications and making React app development accessible to all skill levels through innovative approaches.
          </Paragraph>
          <Paragraph>
          Outside of coding, you'll find me watching Feynman talk about physics, hitting the road on my motorcycle, or spending time with some ducks =D. Feel free to shoot me an email or connect with me on LinkedIn, and let's create some tech magic together.
          </Paragraph>
        </ContentWrapper>

        <CoverImg src="/AboutPhoto.jpg" alt="" />
      </Section>
    );
};


const CoverImg = styled.img`
    object-fit: contain;
    border-radius: 1rem;
    align-self: center;
    max-height: 800px;
`
