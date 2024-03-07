import styled, { css } from "styled-components";
import { ContentWrapper, Heading, Paragraph, Section } from "../layout";
import {
  BlenderIcon,
  CssIcon,
  DjangoIcon,
  ExpressIcon,
  FigmaIcon,
  HtmlIcon,
  JavaIcon,
  JavascriptIcon,
  MongoDBIcon,
  PostgresIcon,
  PythonIcon,
  ReactIcon,
  RustIcon,
  SpringIcon,
  StudioMaxIcon,
} from "../../assets";
import { useState } from "react";
import { AssignedThemes, BorderRadius, CenteredFlex, LineHighlightOnHover } from "../../style";
import { Skill } from "./Skill";

export const Skills = () => {
  const [highlighted, setHighighted] = useState("");

  const skills = [
    {
      name: "Blender",
      icon: <BlenderIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
      type: ["design"],
    },
    {
      name: "Css",
      icon: <CssIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
      type: ["design", "front-end"],
    },
    {
      name: "Django",
      icon: <DjangoIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
      type: ["back-end"],
    },
    {
      name: "Express",
      icon: <ExpressIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
      type: ["back-end"],
    },
    {
      name: "Figma",
      icon: <FigmaIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
      type: ["design"],
    },
    {
      name: "Html",
      icon: <HtmlIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
      type: ["design", "front-end"],
    },
    {
      name: "Java",
      icon: <JavaIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
      type: ["design"],
    },
    {
      name: "Javascript",
      icon: <JavascriptIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
      type: ["front-end", "back-end"],
    },
    {
      name: "MongoDB",
      icon: <MongoDBIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
      type: ["back-end"],
    },
    {
      name: "Postgres",
      icon: <PostgresIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
      type: ["back-end"],
    },
    {
      name: "Python",
      icon: <PythonIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
      type: ["front-end", "back-end"],
    },
    {
      name: "React",
      icon: <ReactIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
      type: ["front-end"],
    },
    {
      name: "Rust",
      icon: <RustIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
      type: ["back-end"],
    },
    {
      name: "Spring",
      icon: <SpringIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
      type: ["back-end"],
    },
    {
      name: "StudioMax",
      icon: <StudioMaxIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
      type: ["design"],
    },
  ].map(({ name, icon, type }, index) => (
    <HighlightableSkill key={index} $highlight={type.includes(highlighted)} name={name} icon={icon}/>
  ));

  return (
    <Section
      layout={"flex-column"}
      theme={AssignedThemes.skills}
      justifyContent={"center"}
    >

      <ContentWrapper layout={"flex-column"} gap={"1rem"}>
        
        <ContentWrapper
          layout={"fixed-grid"}
          columnCount={3}
          minColumnSize={"4rem"}
          gap={"2rem"}
          width={"70%"}
          minHeight={"5rem"}
          alignSelf={"center"}
          theme={AssignedThemes.skills}

        >

          <ContentLineHighlight
            onTouchStart={() => setHighighted("design")}
            onPointerOver={() => setHighighted("design")}
            onPointerOut={() => setHighighted("")}
            {...CenteredFlex}
            minHeight={"5rem"}
            minWidth={"100%"}
          >
            <Heading size={"medium"}>Design</Heading>
          </ContentLineHighlight>
          
          <ContentLineHighlight
            onTouchStart={() => setHighighted("front-end")}
            onPointerOver={() => setHighighted("front-end")}
            onPointerOut={() => setHighighted("")}
            {...CenteredFlex}
          minHeight={"5rem"}
            minWidth={"100%"}
          >
            <Heading size={"medium"}>Front-End</Heading>
          </ContentLineHighlight>
          
          <ContentLineHighlight
            onTouchStart={() => setHighighted("back-end")}
            onPointerOver={() => setHighighted("back-end")}
            onPointerOut={() => setHighighted("")}
            {...CenteredFlex}
          minHeight={"5rem"}
            minWidth={"100%"}
          >
            <Heading size={"medium"}>Back-End</Heading>
          </ContentLineHighlight>

        </ContentWrapper>

        <ContentWrapper
          layout={"auto-grid"}
          gap={"3rem"}
          minColumnSize={"4rem"}
          padding={"1rem"}
          placeItems={"center"}
          theme={AssignedThemes.skills}
        >
          {skills}
        </ContentWrapper>
      </ContentWrapper>
    </Section>
  );
};

const ContentLineHighlight = styled(ContentWrapper)`
${BorderRadius};
${LineHighlightOnHover}


`

const HighlightableSkill = styled(Skill)`
  ${({ $highlight }) =>
    $highlight
    ? `
      scale: 1.1;
      box-shadow: 0 0 30px 2px #48abe0;
    `
    : null};
`;
