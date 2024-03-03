import { ContentWrapper, Heading, Paragraph, Section, Subheading } from "../components"

export const TestPage = () => {
    return (
        <Section layout={"fixed-grid"} columnCount={2}>

            
 
            <ContentWrapper theme={"light"} layout={"flex"} flexDirection={"column"} gap={"0.5rem"}>
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
            </ContentWrapper>
        </Section>        
    )
}