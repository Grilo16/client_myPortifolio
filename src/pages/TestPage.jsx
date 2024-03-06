import styled from "styled-components"
import { duckysRevenge, duckysRevenge3D } from "../components/Projects/projectsData"

import { Project } from "../components/Projects/Project"
import { Section } from "../components"

export const TestPage = () => {

    return (
        <Section layout={"fixed-grid"} columnCount={2} theme={"dark-accent"}>
                <Project project={duckysRevenge3D} />
                <Project project={duckysRevenge} />
        </Section>        
    )
}


const RotatingCardWrapper = styled.div`
    position: relative;
    
    background-color: transparent;
    transform-style: preserve-3d;
    perspective: 2000px;

    width: min(30rem, 100%);
    height: 30rem;
    
    & > div {
        inset: 0;
        position: absolute;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        transition: transform 0.7s ease-in-out;

        padding: max(4%, 1.2rem) max(5%, 0.7rem) 2.9rem;

        & > * {
            transform: translateZ(100px);
            overflow: hidden;

        }
    }

    & > :last-child{
        transform: rotateY(-180deg) ;
    }

    &:hover {
        & > :first-child{
            transform: rotateY(180deg) ;
        }
        
        & > :last-child{
            transform: rotateY(0deg) ;
        } 
    }
`



const StyledImg = styled.img`
object-fit: cover;    


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
