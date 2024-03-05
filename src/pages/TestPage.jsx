import { useState } from "react"
import { ContentWrapper, Heading, Paragraph, Section, Subheading } from "../components"
import { CardBackFace } from "../components/Projects/Project/ProjectCardFace"
import { BackFaceBody, BackFaceFooter, BackFaceHeader } from "../components/Projects/Project/ProjectCardFace/CardBackFace/BackFaceContents"
import { CardBackFaceInner } from "../components/Projects/Project/ProjectCardFace/CardBackFace/CardBackFaceInner"
import { CardBackFaceOuter } from "../components/Projects/Project/ProjectCardFace/CardBackFace/CardBackFaceOuter"
import { CardFrontFaceOuter } from "../components/Projects/Project/ProjectCardFace/CardFrontFace/CardFrontFaceOuter"
import { FrontFaceHeading, FrontFaceImage, FrontFaceSubHeading } from "../components/Projects/Project/ProjectCardFace/CardFrontFace/FrontFaceContents"
import { ProjectInnerCard } from "../components/Projects/Project/ProjectInnerCard"
import { ProjectOuterCard } from "../components/Projects/Project/ProjectOuterCard"
import styled from "styled-components"

export const TestPage = () => {
    const pages = ["20"]
    const links = ["as","asd"]
    const [currentPage, setCurrentPage] = useState(0);
    const pageData = pages.at(currentPage - 1) 


    const nextPage = () =>
      setCurrentPage((current) =>
        pages.length === current ? 0 : current + 1
      );

    const previousPage = () =>
      setCurrentPage((current) => (current <= 0 ? pages.length  : current - 1));


      const Project = ({projectName}) => {
        return (

            <ProjectOuter>

                
                <FrontFace>
                </FrontFace>
                <BackFace>

                </BackFace>





{/*                     
                    <CardBackFaceOuter>
                        <CardBackFaceInner>
                            <FrontFaceImage banner={"/projectsMedia/DuckysRevenge/Banner.png"}/>
                            <FrontFaceHeading projectName={projectName}/>
                            <FrontFaceSubHeading/>
                        </CardBackFaceInner>
                    </CardBackFaceOuter>


                    <CardFrontFaceOuter>
                        <CardBackFaceInner>
                                <BackFaceHeader buttonsData={links}/> 
                                <BackFaceBody currentPage={currentPage} pageData={pageData} overview={["overview"]} stack={["stack"]} projectName={"projectName"} />
                                <BackFaceFooter pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} nextPage={nextPage} previousPage={previousPage}/>
                        </CardBackFaceInner>
                    </CardFrontFaceOuter> */}


        </ProjectOuter>
        )
      }

    return (
        <Section layout={"fixed-grid"} margin={"2rem"} columnCount={2}>
                <Project projectName={"asdlfkj asdlkfjasd sadlfkjdsa"}/>
                <Project projectName={"asdlfkj asdlkfjasd"}/>
        </Section>        
    )
}


const ProjectOuter = styled.div`
    position: relative;
    isolation: isolate;
    background-color: transparent;
    width: min(30rem, 100%);

    transform-style: preserve-3d;
    perspective: 800px;
    transition: 0.7s ease-in-out;

    height: 30rem;
    grid-template-rows: 10rem 10rem 10rem;


    & > div {

        
    transform-style: preserve-3d;
    perspective: 800px;
        position: absolute;
        inset: 0;
    transition: 0.7s ease-in-out;

    }
     
    & :first-child {
        
        transform: translateZ(200px)
    }
    
    &:last-child {
        
        transform: translateZ(200px)

    }
  
    &:hover {
        transform: rotateY(180deg);
        backface-visibility: hidden;

    }

    `
const FrontFace = styled.div`
background-color: pink;

`
const BackFace = styled.div`
background-color: blue;

    

`
























{/* <ContentWrapper theme={"light"} layout={"flex"} flexDirection={"column"} gap={"0.5rem"}>
    <Heading >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, odit?</Heading>

    <Subheading weight={"200"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima accusamus cumque, ipsam nulla sapiente blanditiis molestias nemo excepturi voluptas laboriosam!</Subheading>
    <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat porro eaque, veniam, eum maiores nemo, excepturi reprehenderit dignissimos unde nulla aliquam recusandae inventore in error reiciendis atque dolores optio.</Paragraph>
</ContentWrapper>

 <ContentWrapper theme={"light-accent"} layout={"flex"} flexDirection={"column"} gap={"1rem"}>
    <Heading>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, odit?</Heading>
    <Subheading>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima accusamus cumque, ipsam nulla sapiente blanditiis molestias nemo excepturi voluptas laboriosam!</Subheading>
    <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat porro eaque, veniam, eum maiores nemo, excepturi reprehenderit dignissimos unde nulla aliquam recusandae inventore in error reiciendis atque dolores optio.</Paragraph>
</ContentWrapper>

 <ContentWrapper theme={"dark"} layout={"flex"} flexDirection={"column"} gap={"1rem"}>
    <Heading>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, odit?</Heading>
    <Subheading>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima accusamus cumque, ipsam nulla sapiente blanditiis molestias nemo excepturi voluptas laboriosam!</Subheading>
    <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat porro eaque, veniam, eum maiores nemo, excepturi reprehenderit dignissimos unde nulla aliquam recusandae inventore in error reiciendis atque dolores optio.</Paragraph>
</ContentWrapper>

 <ContentWrapper theme={"dark-accent"} layout={"flex"} flexDirection={"column"} gap={"1rem"}>
    <Heading>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, odit?</Heading>
    <Subheading>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima accusamus cumque, ipsam nulla sapiente blanditiis molestias nemo excepturi voluptas laboriosam!</Subheading>
    <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat porro eaque, veniam, eum maiores nemo, excepturi reprehenderit dignissimos unde nulla aliquam recusandae inventore in error reiciendis atque dolores optio.</Paragraph>
</ContentWrapper> */}