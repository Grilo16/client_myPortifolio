import { Skill } from "../../../../../../Skills"
import { ContentWrapper, Heading, Paragraph } from "../../../../../../layout"

export const ProjectOverview = ({stack, overview, projectName}) => {

    const {frontEnd, backEnd, languages} = {...stack}

    const displayLanguages = languages?.map(({name, icon}, index) => <Skill noName maxHeight={"4rem"} key={index} name={name} icon={icon}/>)

    const displayOverview = overview?.map(paragraph => <Paragraph size={"small"}>{paragraph}</Paragraph>)

    return (
        <>
        <Paragraph  size={"small"} weight={"200"}>Stack: </Paragraph>
            <ContentWrapper layout={"auto-grid"} minColumnSize={"2rem"} placeItems={"center"} padding={"0 1rem"}>
                {backEnd ? <Skill noName maxHeight={"4rem"} {...backEnd}/> :null} 
                {frontEnd ? <Skill noName maxHeight={"4rem"} {...frontEnd}/> :null} 
                {displayLanguages}
            </ContentWrapper>

            <ContentWrapper layout={"auto-grid"} gap={"1rem"} padding={"0 0 1rem"}>
            <Heading>{projectName}</Heading>
            <Paragraph size={"small"} weight={"200"}>Overview: </Paragraph>
            {displayOverview}
            </ContentWrapper>
        </>
    )
}


        
